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
      <p className="mb-6 text-base font-semibold text-text-400">
        Недавние статьи
      </p>
      <div className="flex flex-col gap-6">
        {posts.map(({ image, date, title, link }, i) => (
          <div className="flex items-center gap-4" key={i}>
            <img src={image} className="h-14 w-14 rounded-[5px]" />
            <div>
              <span className="mb-1 font-semibold leading-5 text-[#999FAE] text-[13p]">
                {date}
              </span>
              <Link
                to={link}
                className="block text-sm font-bold text-text-400 hover:text-[#3452FF] focus:text-[#3452FF]"
              >
                {title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
