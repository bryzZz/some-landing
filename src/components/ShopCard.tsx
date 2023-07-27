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
        "flex aspect-[5/6] h-full w-full flex-col items-center rounded-xl bg-text-100 px-2 pb-2 pt-4 text-center shadow-100 md:pb-6 md:pt-8 lg:rounded-3xl lg:px-4 lg:pb-10 lg:pt-12",
        details && "transition hover:shadow-300",
        className
      )}
    >
      <img
        className="mb-7 h-full max-h-44 object-cover lg:max-h-64 3xl:max-h-96"
        src={data.img}
      />
      <h5 className="mb-3 text-[10px] font-black uppercase text-[#B5B5B5] md:text-xs lg:text-sm 3xl:text-xl">
        {data.supTitle}
      </h5>
      <h4 className="md:heading-4 mb-auto whitespace-pre-line text-[11px] font-bold 3xl:text-2xl">
        {data.title}
      </h4>

      {details && (
        <button
          className="mt-5 rounded-[4px] bg-[#F3F3F3] px-[26px] py-[14px] text-sm font-bold leading-4 text-text-400 transition hover:bg-[#DDD] 3xl:text-xl"
          onClick={onDetailsClick}
        >
          Подробнее
        </button>
      )}
    </div>
  );
};
