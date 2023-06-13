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
        "whitespace-nowrap rounded-[35px] border-2 text-[15px] font-bold text-text-400",
        className
      )}
    >
      {tabs.map((label, i) => (
        <button
          className={twMerge(
            "w-1/2 px-11 py-4",
            value === i &&
              "rounded-[35px] bg-[#FDFDFD] shadow-[0_4px_21px_3px_rgba(28,28,28,0.07)] outline outline-2 outline-[#FDFDFD]"
          )}
          onClick={() => onChange(i)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
