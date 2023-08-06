import React from "react";
import { UseFormReturn } from "react-hook-form";

import { CommunicationSelect, FormField } from "components";

interface FirstStepProps {
  form: UseFormReturn<RegistrationFirstStepFormValues, any, undefined>;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}

export interface RegistrationFirstStepFormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  communicationType: string;
}

export const FirstStep: React.FC<FirstStepProps> = ({ form, onSubmit }) => {
  const { register } = form;

  return (
    <form className="mb-6 w-full" onSubmit={onSubmit}>
      <div className="mb-7 flex w-full flex-col gap-[10px]">
        <FormField
          label="Имя"
          placeholder="leadshuber"
          {...register("name", { required: true })}
        />

        <FormField
          label="E-mail"
          placeholder="yourmail@test.com"
          type="email"
          {...register("email", { required: true })}
        />

        <div className="grid grid-cols-2 items-center gap-[10px]">
          <FormField
            label="Пароль"
            placeholder="Пароль"
            type="password"
            {...register("password", { required: true })}
          />

          <FormField
            label="Повторите пароль"
            placeholder="Пароль еще раз"
            type="password"
            {...register("passwordConfirmation", { required: true })}
          />
        </div>

        <CommunicationSelect
          {...register("communicationType", { required: true })}
        />
      </div>

      <button className="btn-secondary w-full" type="submit">
        Далее
      </button>
    </form>
  );
};
