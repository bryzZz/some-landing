import React from "react";
import { twMerge } from "tailwind-merge";

import { ReactComponent as Search } from "assets/icons/search.svg";

interface FilterSearchProps {
  className?: string;
  inputClassName?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const FilterSearch: React.FC<FilterSearchProps> = ({
  className,
  inputClassName,
  placeholder,
  value,
  onChange,
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
        className={twMerge(
          "pb-[8px] pt-[7px] text-sm text-text-400 outline-none placeholder:text-[#C8C8C8] 3xl:text-xl",
          inputClassName
        )}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </label>
  );
};
