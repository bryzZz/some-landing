import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";

import { ReactComponent as Arrow } from "assets/icons/select-arrow.svg";

import "reactjs-popup/dist/index.css";
import "./style.css";
import { twMerge } from "tailwind-merge";

type Range = { min: number; max: number };

interface PriceFilterProps {
  className?: string;
  boundsRange: Range;
  onChange: React.Dispatch<React.SetStateAction<Range>>;
}

export const PriceFilter: React.FC<PriceFilterProps> = ({
  className,
  boundsRange,
  onChange,
}) => {
  const [range, setRange] = useState({ min: 0, max: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(+e.target.value) || +e.target.value > boundsRange.max) return;

    setRange((p) => {
      const value =
        e.target.value[0] === "0"
          ? e.target.value.slice(1)
          : e.target.value || 0;
      const newValue = { ...p, [e.target.name]: Number(value) };

      return newValue;
    });
  };

  useEffect(() => {
    setRange(boundsRange);
  }, [boundsRange]);

  const handleConfirm = () => {
    onChange(range);
  };

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
      keepTooltipInside
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
              value={range.min}
              name="min"
              onChange={handleChange}
            />
          </label>
          <label className="flex  flex-col gap-[6px] text-sm text-[#9D9DA5]">
            До
            <input
              className="rounded border-2 border-transparent bg-[#F1F1F5] px-3 pb-[10px] pt-[9px] text-sm text-text-400 outline-none transition-colors focus:border-primary-100 focus:bg-white"
              type="text"
              pattern="\d*"
              value={range.max}
              name="max"
              onChange={handleChange}
            />
          </label>
        </div>

        <button className="btn-primary w-full" onClick={handleConfirm}>
          Применить
        </button>
      </div>
    </Popup>
  );
};
