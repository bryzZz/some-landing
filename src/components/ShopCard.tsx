import React from "react";
import { twMerge } from "tailwind-merge";
import { Product } from "types";

interface ShopCardProps {
  data: Product;
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
        "flex min-h-full w-full flex-col items-center rounded-xl bg-text-100 px-2 py-4 text-center shadow-100 md:pb-6 md:pt-8 lg:rounded-3xl lg:px-4 lg:pb-10 lg:pt-12",
        details && "transition hover:shadow-300",
        className
      )}
    >
      <img
        className="mb-7 h-44 object-contain lg:h-64 3xl:h-96"
        src={data.img}
      />
      <h5 className="mb-1 text-xs font-black uppercase text-[#B5B5B5] md:mb-3 lg:text-sm 3xl:text-xl">
        {data.price} БАЛЛОВ
      </h5>
      <h4 className="md:heading-4 mx-3 mb-auto whitespace-pre-line text-sm font-bold 3xl:text-2xl">
        {data.name}
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
