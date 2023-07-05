import Select, { Props } from "react-select";

import "./style.css";

interface FormMultiSelect extends Props {
  label: string;
}

export const FormMultiSelect: React.FC<FormMultiSelect> = ({
  label,
  ...props
}) => {
  return (
    <label className="flex w-full flex-col gap-2">
      <span className="text-sm font-semibold text-text-400">{label}</span>
      <Select
        classNamePrefix="FormMultiSelect"
        isSearchable={true}
        isMulti
        isClearable={false}
        {...props}
      />
    </label>
  );
};
