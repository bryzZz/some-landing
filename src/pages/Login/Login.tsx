import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Checkbox, FormField } from "components";
import { BASE_PATH } from "constants/index";

import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { useTranslation } from "react-i18next";

interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const Login: React.FC = () => {
  const { t } = useTranslation();

  const { register, handleSubmit } = useForm<LoginFormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="mx-4 flex w-full flex-col items-center rounded-3xl bg-text-100 p-10 shadow-400 3xl:p-12">
      <Link to={BASE_PATH} className="mb-9 block">
        <Logo />
      </Link>
      <h4 className="heading-4 mb-9">{t("login:title")}</h4>

      <form
        className="mb-7 flex w-full flex-col gap-[10px]"
        onSubmit={onSubmit}
      >
        <FormField
          label={t("login:email")}
          placeholder="yourmail@test.com"
          type="email"
          {...register("email", { required: true })}
        />

        <FormField
          label={t("login:password")}
          placeholder={t("login:password")}
          type="password"
          {...register("password", { required: true })}
        />

        <Checkbox
          {...register("rememberMe")}
          label={t("login:rememberMe")}
          variant="secondary"
        />

        <button className="btn-secondary" type="submit">
          {t("login:login")}
        </button>
      </form>

      <p className="text-sm text-[#000] 3xl:text-lg">
        {t("login:donthaveaccount")}{" "}
        <Link
          className="text-[#088DF4] underline"
          to={`${BASE_PATH}unauthorized/registration`}
        >
          {t("login:createAccount")}
        </Link>
      </p>
    </div>
  );
};
