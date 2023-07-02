import React, { ComponentProps } from "react";
import Select, { components } from "react-select";

import { ReactComponent as ArrowDown } from "assets/icons/iconamoon_arrow-down-2-fill.svg";

import "./style.css";

const DropdownIndicator: React.FC<
  ComponentProps<typeof components.DropdownIndicator>
> = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <ArrowDown />
      </components.DropdownIndicator>
    )
  );
};

export const CommunicationSelect: React.FC = () => {
  return (
    <label className="flex w-full flex-col gap-2">
      <span className="text-[14px] font-semibold text-text-400">
        Способ связи
      </span>
      <div className="flex items-stretch">
        <Select
          classNamePrefix="CommunicationSelect"
          components={{ DropdownIndicator }}
          options={[
            { value: "telegram", label: "Telegram" },
            { value: "mail", label: "E-Mail" },
          ]}
          defaultValue={{ value: "telegram", label: "Telegram" }}
          isSearchable={false}
        />
        <input
          className="flex-1 rounded-br rounded-tr border border-l-0 border-[D8D6DE] px-[14px] pb-4 pt-[15px] outline-none"
          type="text"
          placeholder="@leadshub"
        />
      </div>
    </label>
  );
};
