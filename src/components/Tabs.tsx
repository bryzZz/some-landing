import React from "react";
import { twMerge } from "tailwind-merge";

interface TabsProps {
  tabs: string[];
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  value,
  onChange,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "heading-6 whitespace-nowrap rounded-[35px] border-2",
        className
      )}
    >
      {tabs.map((label, i) => (
        <button
          key={i}
          className={twMerge(
            "w-1/2 px-11 py-4",
            value === i &&
              "rounded-[35px] bg-[#FDFDFD] shadow-200 outline outline-2 outline-[#FDFDFD]"
          )}
          onClick={() => onChange(i)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
