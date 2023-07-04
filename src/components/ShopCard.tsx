import React from "react";
import { twMerge } from "tailwind-merge";

type ShopCardData = {
  img: string;
  supTitle: string;
  title: string;
};

interface ShopCardProps {
  data: ShopCardData;
  details?: boolean;
  className?: string;
  onDetailsClick?: () => void;
}

export const ShopCard: React.FC<ShopCardProps> = ({
  data,
  className,
  details = false,
  onDetailsClick,
}) => {
  return (
    <div
      className={twMerge(
        "flex w-full flex-col items-center rounded-xl bg-text-100 px-2 pb-6 pt-8 text-center shadow-100 lg:rounded-3xl lg:px-4 lg:pb-10 lg:pt-12",
        details && "transition hover:shadow-300",
        className
      )}
    >
      <div className="mb-7">
        <img className="h-full w-full object-cover" src={data.img} />
      </div>
      <h5 className="mb-3 text-[12px] font-black uppercase text-[#B5B5B5] lg:text-[14px]">
        {data.supTitle}
      </h5>
      <h4 className="heading-4 whitespace-pre-line">{data.title}</h4>

      {details && (
        <button
          className="mt-5 rounded-[4px] bg-[#F3F3F3] px-[26px] py-[14px] text-[14px] font-bold leading-4 text-text-400 transition hover:bg-[#DDD]"
          onClick={onDetailsClick}
        >
          Подробнее
        </button>
      )}
    </div>
  );
};
