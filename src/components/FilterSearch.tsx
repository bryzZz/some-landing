import React from "react";

import { ReactComponent as Search } from "assets/icons/search.svg";

export const FilterSearch: React.FC = () => {
  return (
    <label className="flex items-center gap-[7px] rounded-md border border-[#F1F1F1] bg-text-100 px-3 text-center shadow-100">
      <Search width={18} height={18} />
      <input
        className="pb-[8px] pt-[7px] text-[14px] leading-[17px] text-text-400 outline-none placeholder:text-[#C8C8C8]"
        type="text"
        placeholder="Поиск"
      />
    </label>
  );
};
