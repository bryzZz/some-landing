import Select, { Props } from "react-select";

import "./style.css";

interface FormSelectProps extends Props {
  label: string;
  error?: string;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <label className="flex w-full flex-col text-sm 3xl:text-xl">
      <span className="mb-2 font-semibold text-text-400">{label}</span>
      <Select classNamePrefix="FormSelect" isClearable={false} {...props} />
      <span className="h-4 text-xs text-red-600">{error}</span>
    </label>
  );
};
