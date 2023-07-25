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
    <label className="flex w-full flex-col gap-2 text-sm 3xl:text-xl">
      <span className="font-semibold text-text-400">{label}</span>
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
