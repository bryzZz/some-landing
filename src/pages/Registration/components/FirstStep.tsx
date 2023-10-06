import React from "react";
import { UseFormReturn, FormProvider, Controller } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

import { Checkbox, CommunicationSelect, FormField } from "components";
import { PasswordField } from "./PasswordField";

interface FirstStepProps {
  form: UseFormReturn<RegistrationFirstStepFormValues, any, undefined>;
  onSubmit: (data: RegistrationFirstStepFormValues) => void;
}

export interface RegistrationFirstStepFormValues {
  name: string;
  mail: string;
  pass: string;
  passConfirmation: string;
  contactType: string;
  contactField: string;
  privacyConfirmation: boolean;
  newsletterConfirmation: boolean;
  cheatingConfirmation: boolean;
  captcha: boolean;
}

export const FirstStep: React.FC<FirstStepProps> = ({
  form,
  onSubmit: topSubmit,
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    control,
  } = form;

  const onSubmit = handleSubmit((data) => {
    if (data.pass !== data.passConfirmation) {
      return setError("passConfirmation", {
        type: "custom",
        message: "Пароли не совпадают",
      });
    }

    topSubmit(data);
  });

  const validateEmail = (value: string | undefined) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (value && !validRegex.test(value)) {
      return "Пожалуйста, введите существующий почтовый адрес";
    }

    return true;
  };

  const validatePassword = (value: string | undefined) => {
    if (value && value.length < 8) {
      return false;
    }

    if (value && !value.match(/[a-z]/g)) {
      return false;
    }

    if (value && !value.match(/[A-Z]/g)) {
      return false;
    }

    if (value && !value.match(/[0-9]/g)) {
      return false;
    }

    if (value && !value.match(/[@$!%*?&#]/g)) {
      return false;
    }

    return true;
  };

  return (
    <FormProvider {...form}>
      <form className="mb-6 w-full" onSubmit={onSubmit}>
        <div className="mb-7 flex w-full flex-col gap-[10px]">
          <FormField
            label="Имя"
            placeholder="leadshuber"
            {...register("name", { required: "Это обязательное поле" })}
            error={errors.name?.message}
          />

          <FormField
            label="E-mail"
            placeholder="yourmail@test.com"
            type="email"
            {...register("mail", {
              required: "Это обязательное поле",
              validate: validateEmail,
            })}
            error={errors.mail?.message}
          />

          <div className="grid grid-cols-2 gap-[10px]">
            <Controller
              name="pass"
              rules={{
                required: "Это обязательное поле",
                validate: validatePassword,
              }}
              render={({ field: { value, onChange } }) => (
                <PasswordField
                  label="Пароль"
                  placeholder="Пароль"
                  type="password"
                  value={value}
                  onChange={onChange}
                  error={errors.pass?.message}
                  // className="mt-auto"
                />
              )}
            />

            <FormField
              label="Повторите пароль"
              placeholder="Пароль еще раз"
              type="password"
              {...register("passConfirmation", {
                required: "Это обязательное поле",
              })}
              error={errors.passConfirmation?.message}
            />
          </div>

          <CommunicationSelect
            control={control}
            {...register("contactField", {
              required: "Это обязательное поле",
            })}
            error={errors.contactField?.message}
          />

          <Checkbox
            label="Я соглашаюсь на обработку персональных данных на условиях политики конфиденциальности."
            variant="secondary"
            {...register("privacyConfirmation", {
              required: "Это обязательное поле",
            })}
            error={errors.privacyConfirmation?.message}
          />
          <Checkbox
            label="Я соглашаюсь получать e-mail-рассылки о новых офферах, акциях и бонусах."
            variant="secondary"
            {...register("newsletterConfirmation", {
              required: "Это обязательное поле",
            })}
            error={errors.newsletterConfirmation?.message}
          />
          <Checkbox
            label="Я соглашаюсь с тем, что при обнаружении любых накруток и мошеннических действий (фрод и т.д.), весь трафик обнуляется и аккаунт банится"
            variant="secondary"
            {...register("cheatingConfirmation", {
              required: "Это обязательное поле",
            })}
            error={errors.cheatingConfirmation?.message}
          />

          <Controller
            control={control}
            name="captcha"
            render={({ field }) => (
              <ReCAPTCHA
                sitekey="6Ler1GUoAAAAAJP5sKXgZuZUqXzXt69qQmtRQuqr"
                onChange={(token) => field.onChange(Boolean(token))}
              />
            )}
          />
        </div>

        <button className="btn-secondary w-full" type="submit">
          Далее
        </button>
      </form>
    </FormProvider>
  );
};
