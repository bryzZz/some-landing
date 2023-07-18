import React from "react";

import { ReactComponent as Check } from "assets/icons/check.svg";

import "./style.css";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <label className="group flex cursor-pointer select-none items-center gap-3 text-base text-text-400">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="checkbox-input absolute opacity-0"
      />
      <div className="flex h-[22px] w-[22px] items-center justify-center rounded-md border border-[#D3D4DD] p-1 transition-all group-hover:border-[#A9A8B0]">
        <Check className="hidden" />
      </div>
      {label}
    </label>
  );
};
