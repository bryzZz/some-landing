import React from "react";
import { twMerge } from "tailwind-merge";

import { ReactComponent as Search } from "assets/icons/search.svg";

interface FilterSearchProps {
  className?: string;
  placeholder?: string;
}

export const FilterSearch: React.FC<FilterSearchProps> = ({
  className,
  placeholder,
}) => {
  return (
    <label
      className={twMerge(
        "flex items-center gap-[7px] rounded-md border border-[#F1F1F1] bg-text-100 px-3 text-center shadow-100",
        className
      )}
    >
      <Search />
      <input
        className="pb-[8px] pt-[7px] text-[14px] text-text-400 outline-none placeholder:text-[#C8C8C8] lg:text-base"
        type="text"
        placeholder={placeholder}
      />
    </label>
  );
};
