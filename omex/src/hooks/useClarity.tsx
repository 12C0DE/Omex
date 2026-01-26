import { useEffect } from "react";

const CLARITY_ID = import.meta.env.VITE_CLARITY_ID;

export function useClarity() {
  useEffect(() => {
    if (!CLARITY_ID || import.meta.env.DEV) return;

    if (document.getElementById("clarity-script")) return;

    // Create Clarity stub
    (window as any).clarity =
      (window as any).clarity ||
      function () {
        ((window as any).clarity.q = (window as any).clarity.q || []).push(
          arguments,
        );
      };

    // Create script
    const script = document.createElement("script");
    script.id = "clarity-script";
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;

    // ✅ TypeScript-safe insertion
    document.head.appendChild(script);

    // Initial page signal
    window.clarity?.("set", "page", window.location.pathname);
  }, []);
}