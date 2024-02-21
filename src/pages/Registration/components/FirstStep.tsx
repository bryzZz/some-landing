import React from "react";
import { UseFormReturn, FormProvider, Controller } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

import { Checkbox, CommunicationSelect, FormField } from "components";
import { PasswordField } from "./PasswordField";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
        message: t("registration:passwordsError"),
      });
    }

    topSubmit(data);
  });

  const validateEmail = (value: string | undefined) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (value && !validRegex.test(value)) {
      return t("registration:mailError");
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
            label={t("registration:name")}
            placeholder="leadshuber"
            {...register("name", { required: t("registration:requiredField") })}
            error={errors.name?.message}
          />

          <FormField
            label={t("registration:email")}
            placeholder="yourmail@test.com"
            type="email"
            {...register("mail", {
              required: t("registration:requiredField"),
              validate: validateEmail,
            })}
            error={errors.mail?.message}
          />

          <div className="grid grid-cols-2 gap-[10px]">
            <Controller
              name="pass"
              rules={{
                required: t("registration:requiredField"),
                validate: validatePassword,
              }}
              render={({ field: { value, onChange } }) => (
                <PasswordField
                  label={t("registration:password")}
                  placeholder={t("registration:password")}
                  type="password"
                  value={value}
                  onChange={onChange}
                  error={errors.pass?.message}
                  // className="mt-auto"
                />
              )}
            />

            <FormField
              label={t("registration:repeatPassword")}
              placeholder={t("registration:repeatPassword")}
              type="password"
              {...register("passConfirmation", {
                required: t("registration:requiredField"),
              })}
              error={errors.passConfirmation?.message}
            />
          </div>

          <CommunicationSelect
            control={control}
            {...register("contactField", {
              required: t("registration:requiredField"),
            })}
            error={errors.contactField?.message}
          />

          <Checkbox
            label={t("registration:privacyConfirmation")}
            variant="secondary"
            {...register("privacyConfirmation", {
              required: t("registration:requiredField"),
            })}
            error={errors.privacyConfirmation?.message}
          />
          <Checkbox
            label={t("registration:newsletterConfirmation")}
            variant="secondary"
            {...register("newsletterConfirmation", {
              required: t("registration:requiredField"),
            })}
            error={errors.newsletterConfirmation?.message}
          />
          <Checkbox
            label={t("registration:cheatingConfirmation")}
            variant="secondary"
            {...register("cheatingConfirmation", {
              required: t("registration:requiredField"),
            })}
            error={errors.cheatingConfirmation?.message}
          />

          <Controller
            control={control}
            name="captcha"
            rules={{
              required: t("registration:requiredField"),
            }}
            render={({ field }) => (
              <div>
                <ReCAPTCHA
                  sitekey="6Ler1GUoAAAAAJP5sKXgZuZUqXzXt69qQmtRQuqr"
                  onChange={(token) => field.onChange(Boolean(token))}
                />
                <span className="text-xs text-red-600">
                  {errors.captcha?.message}
                </span>
              </div>
            )}
          />
        </div>

        <button className="btn-secondary w-full" type="submit">
          {t("registration:next")}
        </button>
      </form>
    </FormProvider>
  );
};
