import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Checkbox, FormField } from "components";
import { BASE_PATH } from "constants/index";

import { ReactComponent as Logo } from "assets/icons/logo.svg";

interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="mx-4 flex w-full flex-col items-center rounded-3xl bg-text-100 p-10 shadow-400 3xl:p-14">
      <Link to={BASE_PATH} className="mb-9 block">
        <Logo />
      </Link>
      <h4 className="heading-4 mb-9">Войти</h4>

      <form
        className="mb-7 flex w-full flex-col gap-[10px]"
        onSubmit={onSubmit}
      >
        <FormField
          label="E-mail"
          placeholder="yourmail@test.com"
          type="email"
          {...register("email", { required: true })}
        />

        <FormField
          label="Пароль"
          placeholder="Пароль"
          type="password"
          {...register("password", { required: true })}
        />

        <Checkbox
          {...register("rememberMe")}
          label="Запомнить меня"
          variant="secondary"
        />

        <button className="btn-secondary" type="submit">
          Войти
        </button>
      </form>

      <p className="text-sm text-[#000] 3xl:text-xl">
        У Вас еще нет аккаунта?{" "}
        <Link
          className="text-[#088DF4] underline"
          to={`${BASE_PATH}unauthorized/registration`}
        >
          Создайте аккаунт
        </Link>
      </p>
    </div>
  );
};
