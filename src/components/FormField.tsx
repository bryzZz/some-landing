import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface FormFieldProps extends ComponentProps<"input"> {
  label: string;
  error?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <label className="flex w-full flex-col justify-start text-sm">
        <span className="mb-2 font-semibold text-text-400">{label}</span>
        <input
          className={twMerge(
            "rounded border border-[#D8D6DE] px-[14px] pb-4 pt-[15px] outline-none",
            className
          )}
          type="text"
          {...props}
          ref={ref}
        />
        <span className="text-xs text-red-600">{error}</span>
      </label>
    );
  }
);
