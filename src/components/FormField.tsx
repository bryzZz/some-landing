import { ComponentProps, forwardRef } from "react";

export interface FormFieldProps extends ComponentProps<"input"> {
  label: string;
  error?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <label className="flex w-full flex-col text-sm 3xl:text-xl">
        <span className="mb-2 font-semibold text-text-400">{label}</span>
        <input
          className="rounded border border-[#D8D6DE] px-[14px] pb-4 pt-[15px] outline-none"
          type="text"
          {...props}
          ref={ref}
        />
        <span className="h-4 text-xs text-red-600">{error}</span>
      </label>
    );
  }
);
