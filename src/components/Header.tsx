import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

// import { LanguageSelect } from "components";
import { BASE_PATH } from "constants/index";

import { ReactComponent as VK } from "assets/icons/vk.svg";
import { ReactComponent as Telegram } from "assets/icons/telegram.svg";
import { ReactComponent as VKMobile } from "assets/icons/vk-2.svg";
import { ReactComponent as TelegramMobile } from "assets/icons/telegram-2.svg";
import { ReactComponent as DoorEnter } from "assets/icons/door-enter.svg";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { ReactComponent as Open } from "assets/icons/header-open.svg";
import { ReactComponent as Close } from "assets/icons/header-close.svg";

const navItems = [
  // { label: "Преимущества", path: `${BASE_PATH}#cards` },
  { label: "Блог", path: "blog/" },
  { label: "Бонусы", path: "bonuses/" },
  { label: "Магазин", path: "points-store/" },
  // { label: "Отзывы", path: `${BASE_PATH}#bubbles-4` },
  { label: "FAQ", path: "FAQ/" },
  { label: "Контакты", path: "contacts/" },
];

export const Header: React.FC = () => {
  const location = useLocation();

  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }, []);

  useEffect(() => {
    const handler = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 80 && isSticky === false) {
        return setIsSticky(true);
      }
      if (currentScroll < 80 && isSticky === true) {
        return setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [isSticky]);

  useEffect(() => {
    close();
  }, [close, location]);

  return (
    <>
      <header
        className={twMerge(
          "fixed left-0 right-0 top-0 z-40 transition-all",
          isSticky &&
            "shadow-[0px_1px_2px_0px_rgba(0, 0, 0, 0.05)] bg-white bg-opacity-70 backdrop-blur-xl"
        )}
      >
        <div className="header-container hidden items-center py-5 lg:flex">
          <Link
            to={BASE_PATH}
            className="mr-[90px] md:mr-[30px] xl:mr-[40px] 2xl:mr-[92px]"
          >
            <Logo />
          </Link>

          <nav className="mr-auto flex items-center gap-4 xl:gap-9">
            {navItems.map(({ label, path }, i) => (
              <Link
                key={i}
                to={path}
                className={twMerge(
                  "group text-[14px] font-semibold text-text-400 transition xl:text-base",
                  isSticky && "hover:text-primary-500"
                )}
              >
                {label}
                <div
                  className={twMerge(
                    "h-[2px] w-0 rounded-md bg-text-400 transition-all group-hover:w-full",
                    isSticky && "group-hover:bg-primary-500"
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <div className="mr-6 hidden gap-2 xl:flex">
              <Link
                to="https://vk.com/leadshub"
                className="p-[10px] text-[#ACACAC] transition hover:text-[#0076FE]"
              >
                <VK width="20px" height="20px" />
              </Link>
              <Link
                to="tg://resolve?domain=leads_chat"
                className="p-[10px] text-[#ACACAC] transition hover:text-[#2EAAE8]"
              >
                <Telegram width="20px" height="20px" />
              </Link>
            </div>

            {/* <LanguageSelect /> */}

            <div className="flex items-center gap-2">
              <Link
                to="https://leadshub.affise.com/v2/sign/in"
                className="flex items-center gap-1 px-6 py-4 text-[13px] font-extrabold xl:text-base"
              >
                <DoorEnter className="text-primary-100" />
                Войти
              </Link>
              <Link to="unauthorized/registration" className="btn-primary">
                Регистрация
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-6 py-5 lg:hidden">
          <Link to={BASE_PATH}>
            <Logo />
          </Link>

          <button className="p-1" onClick={open}>
            <Open />
          </button>
        </div>
      </header>

      <div
        className={twMerge(
          "fixed inset-0 z-40 flex -translate-x-full flex-col justify-between bg-white bg-opacity-70 px-6 pb-5 pt-4 backdrop-blur-xl transition-transform lg:hidden",
          isOpen && "translate-x-0"
        )}
      >
        <div className="flex items-center justify-end">
          {/* <LanguageSelect /> */}
          <button className="p-1" onClick={close}>
            <Close />
          </button>
        </div>

        <nav className="flex flex-col items-center gap-4">
          {navItems.map(({ label, path }, i) => (
            <Link
              key={i}
              to={path}
              className="group text-2xl font-semibold text-text-400 transition hover:text-primary-500"
            >
              {label}
              <div className="h-[2px] w-0 rounded-md bg-primary-500 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center text-[#888888]">
          <p className="mb-5 text-center text-[17px] font-bold">
            Оставайся с нами:
          </p>
          <div className="flex gap-5 text-base font-semibold">
            <Link
              to="tg://resolve?domain=leads_chat"
              className="flex items-center gap-2"
            >
              <TelegramMobile className="flex-shrink-0 scale-[1.75]" />
              Telegram
            </Link>
            <Link
              to="https://vk.com/leadshub"
              className="flex items-center gap-2"
            >
              <VKMobile className="flex-shrink-0 scale-150" />
              Vkontakte
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Link
            to="https://leadshub.affise.com/v2/sign/in"
            className="flex items-center gap-1 px-6 py-4 text-base font-extrabold"
          >
            <DoorEnter className="text-primary-100" />
            Войти
          </Link>
          <Link
            to="unauthorized/registration"
            className="btn-primary text-[14px]"
          >
            Регистрация
          </Link>
        </div>
      </div>
    </>
  );
};
