import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { BASE_PATH } from "constants/index";
import { CommunicationSelect } from "components";

export const Registration: React.FC = () => {
  return (
    <div className="flex flex-col items-center rounded-3xl bg-text-100 p-10 shadow-400">
      <Link to={BASE_PATH} className="mb-9 block">
        <Logo />
      </Link>
      <h4 className="heading-4 mb-9">
        Регистрация. Шаг 1<span className="text-sm text-[#CBCBCB]">/2</span>
      </h4>

      <form className="mb-6 w-full">
        <div className="mb-7 flex w-full flex-col gap-[10px]">
          <label className="flex w-full flex-col gap-2">
            <span className="text-[14px] font-semibold text-text-400">Имя</span>
            <input
              className="rounded border border-[D8D6DE] px-[14px] pb-4 pt-[15px] outline-none"
              type="text"
              placeholder="leadshuber"
            />
          </label>
          <label className="flex w-full flex-col gap-2">
            <span className="text-[14px] font-semibold text-text-400">
              E-mail
            </span>
            <input
              className="rounded border border-[D8D6DE] px-[14px] pb-4 pt-[15px] outline-none"
              type="email"
              placeholder="yourmail@test.com"
            />
          </label>
          <div className="grid grid-cols-2 items-center gap-[10px]">
            <label className="flex w-full flex-col gap-2">
              <span className="text-[14px] font-semibold text-text-400">
                Пароль
              </span>
              <input
                className="rounded border border-[D8D6DE] px-[14px] pb-4 pt-[15px] outline-none"
                type="password"
                placeholder="Пароль"
              />
            </label>
            <label className="flex w-full flex-col gap-2">
              <span className="text-[14px] font-semibold text-text-400">
                Повторите пароль
              </span>
              <input
                className="rounded border border-[D8D6DE] px-[14px] pb-4 pt-[15px] outline-none"
                type="password"
                placeholder="Пароль еще раз"
              />
            </label>
          </div>
          <CommunicationSelect />
        </div>

        <button className="btn-secondary w-full" type="submit">
          Далее
        </button>
      </form>

      <p className="text-[14px] text-[#000] ">
        У вас уже есть аккаунт?{" "}
        <Link className="text-[#088DF4] underline" to="login">
          Войти
        </Link>
      </p>
    </div>
  );
};
