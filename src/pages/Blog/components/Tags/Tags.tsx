import React, { Fragment } from "react";

import "./style.css";
interface TagsProps {
  tags: string[];
  className?: string;

  selected: string[];
  onSelect: (tag: string) => void;
}

export const Tags: React.FC<TagsProps> = ({
  tags,
  className,
  selected,
  onSelect,
}) => {
  return (
    <div className={className}>
      <p className="mb-6 text-base font-semibold text-text-400 3xl:text-xl">
        Облако тегов
      </p>
      <div className="flex flex-wrap gap-[10px]">
        {tags.map((tag) => (
          <Fragment key={tag}>
            <input
              id={`Blog-${tag}`}
              type="checkbox"
              className="tag-input hidden"
              value={selected.includes(tag) ? "on" : "off"}
              onChange={() => onSelect(tag)}
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
