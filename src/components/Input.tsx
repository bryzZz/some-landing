import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentProps<"input"> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <label className="sub-heading-3 mb-[22px] flex flex-col gap-2 font-semibold text-text-400">
        {label}
        <input
          ref={ref}
          className={twMerge(
            "w-full rounded border border-[#D8D6DE] px-[14px] pb-4 pt-[15px] outline-none transition-colors placeholder:text-[#C8C8C8]",
            error && "border-red-600"
          )}
          type="text"
          {...props}
        />
        <p className="sub-heading-4 text-red-600">{error}</p>
      </label>
    );
  }
);
