import React from "react";
import { useNavigate } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Post } from "types";

interface PostsProps {
  posts: Post[];
  className?: string;
}

export const Posts: React.FC<PostsProps> = ({ posts, className }) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => () => {
    navigate(id);
  };

  return (
    <div className={className}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 600: 2, 768: 1, 1024: 2 }}
      >
        <Masonry gutter="1.875rem" className="mb-11">
          {posts.map(({ date, tags, title, text, image, link }, i) => (
            <div
              key={i}
              className="post w-full cursor-pointer rounded-xl bg-white p-5 shadow-100"
              onClick={handleClick(link)}
            >
              <span className="mb-5 text-[13px] font-semibold leading-5 text-[#999FAE] 3xl:text-lg">
                {date}
              </span>
              <div className="mb-2 flex flex-wrap gap-[10px]">
                {tags.map((tag) => (
                  <p className="text-sm font-bold text-[#3452FF] 3xl:text-xl">
                    {tag}
                  </p>
                ))}
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-400 3xl:text-3xl">
                {title}
              </h3>
              <p className="sub-heading-4">{text}</p>
              {image && (
                <img
                  src={image}
                  className="mt-4 h-full max-h-[330px] w-full rounded-xl object-cover"
                />
              )}
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <div className="mb-12 flex items-stretch gap-1 text-sm font-semibold text-text-400 3xl:text-lg">
        <button className="flex h-[35px] w-[35px] items-center justify-center rounded bg-[#3452FF] text-white">
          1
        </button>
        <button className="flex h-[35px] w-[35px] items-center justify-center">
          2
        </button>
        <button className="flex items-center justify-center px-1">
          Следующая »
        </button>
      </div>
    </div>
  );
};
