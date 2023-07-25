import Select, { Props } from "react-select";

import "./style.css";

interface FormSelectProps extends Props {
  label: string;
}

export const FormSelect: React.FC<FormSelectProps> = ({ label, ...props }) => {
  return (
    <label className="flex w-full flex-col gap-2 text-sm 3xl:text-xl">
      <span className="font-semibold text-text-400">{label}</span>
      <Select classNamePrefix="FormSelect" isClearable={false} {...props} />
    </label>
  );
};
