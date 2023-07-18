import React from "react";

import "./style.css";

interface RadioProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  name,
  checked,
  onChange,
}) => {
  return (
    <label className="group flex cursor-pointer select-none items-center gap-3 text-base text-text-400">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="radio-input absolute opacity-0"
      />
      <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-primary-100 p-1">
        <div className="h-full w-full scale-0 rounded-full bg-primary-100 transition-all" />
      </div>
      {label}
    </label>
  );
};
