import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand
} from "@aws-sdk/client-s3";
import { Readable } from "stream";

const REGION = "us-east-2"; // Ohio
const BUCKET = "omex-project-photos";
const CLOUDFRONT_URL = "https://dkjg6qaitp98r.cloudfront.net";

const s3 = new S3Client({ region: REGION });

// In-memory cache (10 minutes)
let cache = { data: null, lastUpdated: 0 };
const CACHE_TTL_MS = 10 * 60 * 1000;

export const handler = async () => {
  try {
    // Serve cached version if still valid
    const now = Date.now();
    if (cache.data && now - cache.lastUpdated < CACHE_TTL_MS) {
      return makeResponse(200, cache.data, true);
    }

    // 1️⃣ List top-level folders
    const list = await s3.send(
      new ListObjectsV2Command({ Bucket: BUCKET, Delimiter: "/" })
    );

    const folders = list.CommonPrefixes?.map((p) => p.Prefix) || [];

    // 2️⃣ Process each folder in parallel
    const results = await Promise.all(
      folders.map(async (folder) => {
        const files = await s3.send(
          new ListObjectsV2Command({ Bucket: BUCKET, Prefix: folder })
        );

        const allKeys = (files.Contents || []).map((f) => f.Key);

        // Filter for image files
        const images = allKeys
          .filter((key) => /\.(jpg|jpeg|png|webp|heic)$/i.test(key))
          .map((key) => `${CLOUDFRONT_URL}/${key}`);

        // Choose a thumbnail (first image)
        const thumbnail = images.length > 0 ? images[0] : null;

        // Load optional description.json
        let metadata = {
          title: folder.replace("/", "").replace(/-/g, " "),
          description: "",
          location: "",
          date: "",
        };

        const descFile = allKeys.find((k) => k.endsWith("description.json"));
        if (descFile) {
          try {
            const descObj = await s3.send(
              new GetObjectCommand({ Bucket: BUCKET, Key: descFile })
            );
            const text = await streamToString(descObj.Body);
            const parsed = JSON.parse(text);
            metadata = { ...metadata, ...parsed };
          } catch (err) {
            console.warn(`Error reading ${descFile}:`, err);
          }
        }

        return { ...metadata, folder, thumbnail, images };
      })
    );

    // 3️⃣ Cache results
    cache.data = results;
    cache.lastUpdated = now;

    return makeResponse(200, results);
  } catch (err) {
    console.error("Error:", err);
    return makeResponse(500, { error: "Failed to list projects" });
  }
};

// Utility functions
const makeResponse = (code, data, cached = false) => ({
  statusCode: code,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "X-Cache-Status": cached ? "HIT" : "MISS"
  },
  body: JSON.stringify(data, null, 2)
});

const streamToString = (stream) =>
  new Promise((resolve, reject) => {
    const chunks = [];
    const readable = stream instanceof Readable ? stream : Readable.from(stream);
    readable.on("data", (chunk) => chunks.push(chunk));
    readable.on("error", reject);
    readable.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
  });

