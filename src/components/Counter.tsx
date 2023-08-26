import React from "react";

import { ReactComponent as Minus } from "assets/icons/minus.svg";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import { twMerge } from "tailwind-merge";

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  error?: string;
}

export const Counter: React.FC<CounterProps> = ({ value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-1">
      <div
        className={twMerge(
          "flex items-center gap-3 rounded border border-[#D9D9D9] px-[13px] py-3 transition-colors sm:gap-5",
          error && "border-red-600"
        )}
      >
        <button
          className="rounded-full p-1 hover:bg-[#EEEEEE]"
          onClick={() => onChange(Math.max(0, value - 1))}
          type="button"
        >
          <Minus />
        </button>
        <span className="w-5 text-center">{value}</span>
        <button
          className="rounded-full p-1 hover:bg-[#EEEEEE]"
          onClick={() => onChange(Math.min(99, value + 1))}
          type="button"
        >
          <Plus />
        </button>
      </div>

      {/* <p className="sub-heading-4 text-red-600">{error}</p> */}
    </div>
  );
};
