import { ComponentProps, forwardRef } from "react";

interface FormTextAreaProps extends ComponentProps<"textarea"> {
  label: string;
}

export const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({ label, ...props }, ref) => {
    return (
      <label className="flex w-full flex-col gap-2 text-sm text-text-400">
        <span className="font-semibold">{label}</span>
        <textarea
          className="resize-none rounded border border-[#D8D6DE] px-[14px] pb-4 pt-[15px] outline-none"
          ref={ref}
          rows={4}
          {...props}
        />
      </label>
    );
  }
);
