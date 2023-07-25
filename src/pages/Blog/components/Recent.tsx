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
      <p className="mb-6 text-base font-semibold text-text-400 3xl:text-2xl">
        Недавние статьи
      </p>
      <div className="flex flex-col gap-6">
        {posts.map(({ image, date, title, link }, i) => (
          <div className="flex items-center gap-4" key={i}>
            <img
              src={image}
              className="h-14 w-14 rounded-[5px] 3xl:h-24 3xl:w-24"
            />
            <div>
              <span className="mb-1 text-[13px] font-semibold leading-5 text-[#999FAE] 3xl:text-xl">
                {date}
              </span>
              <Link
                to={link}
                className="block text-sm font-bold text-text-400 hover:text-[#3452FF] focus:text-[#3452FF] 3xl:text-2xl"
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
