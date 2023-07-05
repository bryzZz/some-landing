import Select, { Props } from "react-select";

import "./style.css";

interface FormSelectProps extends Props {
  label: string;
}

export const FormSelect: React.FC<FormSelectProps> = ({ label, ...props }) => {
  return (
    <label className="flex w-full flex-col gap-2">
      <span className="text-sm font-semibold text-text-400">{label}</span>
      <Select classNamePrefix="FormSelect" isClearable={false} {...props} />
    </label>
  );
};
