import { ComponentProps, forwardRef } from "react";

import { ReactComponent as Check } from "assets/icons/check.svg";

import "./style.css";
import { twMerge } from "tailwind-merge";

interface CheckboxProps extends ComponentProps<"input"> {
  label: string;
  variant?: "primary" | "secondary";
  containerClassName?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { label, variant = "primary", containerClassName, error, ...props },
    ref
  ) => {
    return (
      <div>
        <label
          className={twMerge(
            "group flex cursor-pointer select-none items-center gap-3 text-base text-text-400",
            variant === "secondary" &&
              "gap-[6px] text-xs font-semibold text-[#B0B0B0]",
            containerClassName
          )}
        >
          <input
            ref={ref}
            type="checkbox"
            {...props}
            className="checkbox-input absolute opacity-0"
          />
          <div
            className={twMerge(
              "flex items-center justify-center border border-[#D3D4DD] p-1 transition-all group-hover:border-[#A9A8B0]",
              variant,
              variant === "primary" && "h-[22px] w-[22px] rounded-md",
              variant === "secondary" &&
                "h-[14px] w-[14px] rounded-[2px] p-[2px]"
            )}
          >
            <Check className="hidden" />
          </div>
          {label}
        </label>

        <span className="text-xs text-red-600">{error}</span>
      </div>
    );
  }
);
