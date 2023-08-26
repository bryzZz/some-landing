import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";

interface PinCodeInputProps {
  className?: string;
}

export const PinCodeInput: React.FC<PinCodeInputProps> = ({ className }) => {
  const refs = useRef<HTMLInputElement[]>(new Array(6).fill(null));

  const handleChange = (value: string, index: number) => {
    if (value.length && index < 5) {
      refs.current?.[index + 1].focus();
    }
  };

  const handleKeyDown = (key: string, index: number) => {
    if (
      key === "Backspace" &&
      index > 0 &&
      refs.current?.[index].value === ""
    ) {
      refs.current?.[index - 1].focus();
    }
  };

  return (
    <div className={twMerge("flex gap-[10px]", className)}>
      {new Array(6).fill(0).map((_, i) => (
        <input
          key={i}
          ref={(instance) => ((refs.current as any)[i] = instance)}
          className="w-[33px] border-b border-text-400 pb-2 text-center text-[30px] leading-9 text-text-400 outline-none"
          maxLength={1}
          onChange={(e) => handleChange(e.target.value, i)}
          onKeyDown={(e) => handleKeyDown(e.key, i)}
        />
      ))}
    </div>
  );
};
