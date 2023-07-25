import { ComponentProps, forwardRef } from "react";

interface FormFieldProps extends ComponentProps<"input"> {
  label: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, ...props }, ref) => {
    return (
      <label className="flex w-full flex-col gap-2 text-sm 3xl:text-xl">
        <span className="font-semibold text-text-400">{label}</span>
        <input
          className="rounded border border-[#D8D6DE] px-[14px] pb-4 pt-[15px] outline-none"
          type="text"
          {...props}
          ref={ref}
        />
      </label>
    );
  }
);
