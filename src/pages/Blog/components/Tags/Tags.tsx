import React, { Fragment } from "react";

import "./style.css";
interface TagsProps {
  tags: string[];
  className?: string;
}

export const Tags: React.FC<TagsProps> = ({ tags, className }) => {
  return (
    <div className={className}>
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
            <label htmlFor={`Blog-${tag}`} className="tag">
              {tag}
            </label>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
