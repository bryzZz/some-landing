import React, { ComponentProps, forwardRef } from "react";
import Select, { components } from "react-select";

import { ReactComponent as ArrowDown } from "assets/icons/iconamoon_arrow-down-2-fill.svg";

import "./style.css";

const options = [
  { value: "telegram", label: "Telegram" },
  { value: "mail", label: "E-Mail" },
];

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

interface CommunicationSelectProps extends ComponentProps<"input"> {
  error?: string;
}

export const CommunicationSelect = forwardRef<
  HTMLInputElement,
  CommunicationSelectProps
>(({ error, ...props }, ref) => {
  return (
    <label className="flex w-full flex-col text-sm 3xl:text-xl">
      <span className="mb-2 font-semibold text-text-400">Способ связи</span>
      <div className="flex items-stretch">
        <Select
          classNamePrefix="CommunicationSelect"
          components={{ DropdownIndicator }}
          options={options}
          defaultValue={options[0]}
          isSearchable={false}
        />
        <input
          className="w-full flex-1 rounded-br rounded-tr border border-l-0 border-[D8D6DE] px-[14px] pb-4 pt-[15px] outline-none"
          type="text"
          placeholder="@leadshub"
          ref={ref}
          {...props}
        />
      </div>
      <span className="h-4 text-xs text-red-600">{error}</span>
    </label>
  );
});
