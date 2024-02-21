import React from "react";
import Popup from "reactjs-popup";

import { Checkbox } from "components";

import { ReactComponent as Arrow } from "assets/icons/select-arrow.svg";

import "reactjs-popup/dist/index.css";
import "./style.css";
import { useTranslation } from "react-i18next";

interface CategoryFilterProps {
  categories: { label: string; checked: boolean }[];
  onCategoryClick: (label: string) => void;
  newCategoryCount?: number;
  position?: string;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  onCategoryClick,
  newCategoryCount,
  position,
}) => {
  const { t } = useTranslation();

  return (
    <Popup
      trigger={
        <button className="group relative flex items-baseline gap-2 rounded-lg px-3 py-2 text-sm text-text-400 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)] 3xl:text-base">
          {t("bonuses:category")}
          <Arrow className="text-[#B9B9C1] group-hover:text-text-400" />
          {newCategoryCount && (
            <div className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary-100 text-[10px] font-bold text-white 3xl:text-sm">
              {newCategoryCount}
            </div>
          )}
        </button>
      }
      position={position as any}
      offsetY={8}
      className="Category-popup"
    >
      <div className="flex flex-col gap-3">
        {categories.map(({ label, checked }, i) => (
          <Checkbox
            key={i}
            checked={checked}
            onChange={() => onCategoryClick(label)}
            label={label}
            containerClassName="capitalize"
          />
        ))}
      </div>
    </Popup>
  );
};
