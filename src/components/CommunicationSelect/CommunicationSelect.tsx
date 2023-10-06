import React, { ComponentProps, forwardRef } from "react";
import Select, { components } from "react-select";
import { Control, Controller, useWatch } from "react-hook-form";

import { ReactComponent as ArrowDown } from "assets/icons/iconamoon_arrow-down-2-fill.svg";

import "./style.css";
import { RegistrationFirstStepFormValues } from "pages/Registration/components";

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
  control: Control<RegistrationFirstStepFormValues>;
  error?: string;
}

export const CommunicationSelect = forwardRef<
  HTMLInputElement,
  CommunicationSelectProps
>(({ error, control, ...props }, ref) => {
  const contactType = useWatch({ control, name: "contactType" });

  return (
    <label className="flex w-full flex-col text-sm">
      <span className="mb-2 font-semibold text-text-400">Способ связи</span>
      <div className="flex items-stretch">
        <Controller
          name="contactType"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Select
              classNamePrefix="CommunicationSelect"
              components={{ DropdownIndicator }}
              options={options}
              isSearchable={false}
              value={options.find((c) => c.value === value)}
              onChange={(val) => onChange((val as any).value)}
            />
          )}
        />

        <input
          className="w-full flex-1 rounded-br rounded-tr border border-l-0 border-[D8D6DE] px-[14px] pb-4 pt-[15px] outline-none"
          type="text"
          placeholder={contactType === "telegram" ? "@leadshub" : "abc@mail.ru"}
          ref={ref}
          {...props}
        />
      </div>
      <span className="text-xs text-red-600">{error}</span>
    </label>
  );
});
