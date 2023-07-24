import React from "react";
import Popup from "reactjs-popup";

import { ReactComponent as Arrow } from "assets/icons/select-arrow.svg";

import "reactjs-popup/dist/index.css";
import "./style.css";
import { twMerge } from "tailwind-merge";

interface PriceFilterProps {
  className?: string;
  min: number;
  max: number;
}

export const PriceFilter: React.FC<PriceFilterProps> = ({
  min,
  max,
  className,
}) => {
  return (
    <Popup
      trigger={
        <button
          className={twMerge(
            "group relative flex items-baseline gap-2 rounded-lg px-3 py-2 text-sm text-text-400 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)] 3xl:text-xl",
            className
          )}
        >
          Цена, Балл
          <Arrow className="text-[#B9B9C1] group-hover:text-text-400" />
        </button>
      }
      position="bottom left"
      offsetY={8}
      className="Category-popup"
    >
      <div>
        <div className="mb-5 grid grid-cols-2 gap-2">
          <label className="flex flex-col gap-[6px] text-sm text-[#9D9DA5]">
            От
            <input
              className="rounded border-2 border-transparent bg-[#F1F1F5] px-3 pb-[10px] pt-[9px] text-sm text-text-400 outline-none transition-colors focus:border-primary-100 focus:bg-white"
              type="text"
              pattern="\d*"
              defaultValue={min}
            />
          </label>
          <label className="flex  flex-col gap-[6px] text-sm text-[#9D9DA5]">
            До
            <input
              className="rounded border-2 border-transparent bg-[#F1F1F5] px-3 pb-[10px] pt-[9px] text-sm text-text-400 outline-none transition-colors focus:border-primary-100 focus:bg-white"
              type="text"
              pattern="\d*"
              defaultValue={max}
            />
          </label>
        </div>

        <button className="btn-primary w-full">Применить</button>
      </div>
    </Popup>
  );
};
