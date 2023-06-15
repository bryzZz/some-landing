import React, { ComponentProps } from "react";
import Select, { Props, components } from "react-select";

import "./style.css";

interface PointsStoreSelectProps extends Omit<Props, "classNamePrefix"> {
  Icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

export const PointsStoreSelect: React.FC<PointsStoreSelectProps> = ({
  Icon,
  ...props
}) => {
  const ValueContainer = ({
    children,
    ...props
  }: ComponentProps<typeof components.ValueContainer>) => {
    return (
      components.ValueContainer && (
        <components.ValueContainer {...props}>
          {Icon && <Icon className="absolute left-2" />}
          {children}
        </components.ValueContainer>
      )
    );
  };

  return (
    <Select
      classNamePrefix="PointsStoreSelect"
      components={{ ValueContainer }}
      {...props}
    />
  );
};
