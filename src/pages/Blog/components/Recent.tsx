import React from "react";
import { Link } from "react-router-dom";
import { RecentPost } from "types";

interface RecentProps {
  posts: RecentPost[];
  className?: string;
}

export const Recent: React.FC<RecentProps> = ({ posts, className }) => {
  return (
    <div className={className}>
      <p className="mb-6 text-base font-semibold text-text-400 3xl:text-xl">
        Недавние статьи
      </p>
      <div className="flex flex-col gap-6">
        {posts.map(({ image, date, title, link }, i) => (
          <div className="flex items-center gap-4" key={i}>
            <img
              src={image}
              className="h-14 w-14 rounded-[5px] 3xl:h-20 3xl:w-20"
            />
            <div>
              <Link
                to={link}
                className="line-clamp-1 text-sm font-bold text-text-400 hover:text-[#3452FF] focus:text-[#3452FF] 3xl:text-xl"
              >
                {title}
              </Link>
              <span className="mb-1 text-[13px] font-semibold leading-5 text-[#999FAE] 3xl:text-lg">
                {date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
