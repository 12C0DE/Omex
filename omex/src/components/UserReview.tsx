import { Stars } from "./index";

type UserReviewProps = {
  reviewMessage: string;
  starCount: number;
};

export const UserReview = ({ reviewMessage, starCount }: UserReviewProps) => {
  const profileIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-10 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );

  return (
    <div className="flex flex-col justify-start gap-2 px-2 mb-2">
      <div className="flex flex-row justify-between items-center">
        {profileIcon}
        <Stars starCount={starCount} />
      </div>
      <p className="text-sm font-kanit text-light">{reviewMessage}</p>
      <div className="flex flex-row gap-2">
        {/* Example thumbnails, replace with your image URLs */}
        {["/images/pic1.jpg", "/images/pic2.jpg", "/images/pic3.jpg"].map(
          (src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${idx + 1}`}
              className="w-12 h-12 object-cover rounded"
            />
          )
        )}
      </div>
    </div>
  );
};