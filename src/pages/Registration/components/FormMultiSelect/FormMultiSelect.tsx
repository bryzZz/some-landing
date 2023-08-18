import Select, { Props } from "react-select";

import "./style.css";
import { forwardRef, ElementRef } from "react";

interface FormMultiSelectProps extends Props {
  label: string;
  error?: string;
}

export const FormMultiSelect = forwardRef<
  ElementRef<Select>,
  FormMultiSelectProps
>(({ label, error, ...props }, ref) => {
  return (
    <label className="flex w-full flex-col text-sm 3xl:text-xl">
      <span className="mb-2 font-semibold text-text-400">{label}</span>
      <Select
        classNamePrefix="FormMultiSelect"
        isMulti
        isClearable={false}
        {...props}
        ref={ref}
      />
      <span className="h-4 text-xs text-red-600">{error}</span>
    </label>
  );
});
