import React, { Fragment } from "react";

import "./style.css";
import { twMerge } from "tailwind-merge";

interface TagsProps {
  tags: string[];
  className?: string;
}

export const Tags: React.FC<TagsProps> = ({ tags, className }) => {
  return (
    <div className={twMerge("mb-12", className)}>
      <p className="mb-6 text-base font-semibold text-text-400 3xl:text-2xl">
        Облако тегов
      </p>
      <div className="flex flex-wrap gap-[10px]">
        {tags.map((tag) => (
          <Fragment key={tag}>
            <input
              id={`Blog-${tag}`}
              type="checkbox"
              className="tag-input hidden"
            />
            <label
              htmlFor={`Blog-${tag}`}
              className="cursor-pointer rounded bg-[#3452FF] bg-opacity-[0.14] px-[10px] py-[5px] text-sm font-bold text-[#3452FF] transition-colors 3xl:text-xl"
            >
              {tag}
            </label>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
