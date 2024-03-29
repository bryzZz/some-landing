import React, { ComponentProps } from "react";
import Select, { components } from "react-select";

import { ReactComponent as USAFlag } from "assets/icons/usa-flag.svg";
import { ReactComponent as RuFlag } from "assets/icons/flag_ru-4x3.svg";
// import { ReactComponent as DeFlag } from "assets/icons/flag_de-4x3.svg";

import "./style.css";
import { useTranslation } from "react-i18next";

const options = [
  { value: "ru", label: "RU", Icon: RuFlag },
  { value: "en", label: "EN", Icon: USAFlag },
];

const Option: React.FC<ComponentProps<typeof components.Option>> = (props) => {
  const {
    data: { label, Icon },
  } = props as any;

  return (
    components.Option && (
      <components.Option {...props}>
        {Icon && <Icon width={19} height={19} />}
        {label}
      </components.Option>
    )
  );
};

const SingleValue: React.FC<ComponentProps<typeof components.SingleValue>> = (
  props
) => {
  const {
    data: { label, Icon },
  } = props as any;

  return (
    components.SingleValue && (
      <components.SingleValue {...props}>
        {Icon && <Icon width={19} height={19} />}
        {label}
      </components.SingleValue>
    )
  );
};

export const LanguageSelect: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <Select
      classNamePrefix="LanguageSelect"
      options={options}
      defaultValue={options[0]}
      isSearchable={false}
      components={{ Option, SingleValue }}
      value={options.find((c) => c.value === i18n.language)}
      onChange={(value) => {
        i18n.changeLanguage((value as any).value);
      }}
    />
  );
};
