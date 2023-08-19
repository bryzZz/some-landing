import { forwardRef } from "react";
import { FormField, FormFieldProps } from "components";

export const PasswordField = forwardRef<HTMLInputElement, FormFieldProps>(
  (props, ref) => {
    return <FormField ref={ref as any} {...props} />;
  }
);
