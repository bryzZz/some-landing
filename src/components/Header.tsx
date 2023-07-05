import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as VK } from "assets/icons/vk.svg";
import { ReactComponent as Telegram } from "assets/icons/telegram.svg";
import { ReactComponent as DoorEnter } from "assets/icons/door-enter.svg";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { BASE_PATH } from "constants/index";
import { twMerge } from "tailwind-merge";
import { LanguageSelect } from "./LanguageSelect/LanguageSelect";

const navItems = [
  { label: "Преимущества", path: "a" },
  { label: "Кейсы", path: "b" },
  { label: "Бонусы", path: "bonuses/" },
  { label: "Магазин", path: "points-store/" },
  { label: "Отзывы", path: "f" },
];

export const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

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

  return (
    <header
      className={twMerge(
        "fixed top-0 z-50 w-full transition-all",
        isSticky &&
          "shadow-[0px_1px_2px_0px_rgba(0, 0, 0, 0.05)] bg-text-100 bg-opacity-70 backdrop-blur-xl"
      )}
    >
      <div className="header-container flex items-center py-5">
        <Link to={BASE_PATH} className="mr-[90px] md:mr-[30px] xl:mr-[40px]">
          <Logo />
        </Link>

        <nav className="mr-auto flex items-center gap-4 xl:gap-9">
          {navItems.map(({ label, path }, i) => (
            <Link
              key={i}
              to={path}
              className={twMerge(
                "group text-[14px] font-semibold text-text-400 transition xl:text-base",
                isSticky && "text-primary-500"
              )}
            >
              {label}
              <div
                className={twMerge(
                  "h-[2px] w-0 rounded-md bg-text-400 transition-all group-hover:w-full",
                  isSticky && "bg-primary-500"
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <div className="mr-6 hidden gap-2 xl:flex">
            <Link
              to={"/"}
              className="p-[10px] text-[#ACACAC] transition hover:text-[#0076FE]"
            >
              <VK width="20px" height="20px" />
            </Link>
            <Link
              to={"/"}
              className="p-[10px] text-[#ACACAC] transition hover:text-[#2EAAE8]"
            >
              <Telegram width="20px" height="20px" />
            </Link>
          </div>

          <LanguageSelect />

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-6 py-4 text-[13px] font-extrabold xl:text-base">
              <DoorEnter />
              Войти
            </button>
            <button className="btn-primary">Регистрация</button>
          </div>
        </div>
      </div>
    </header>
  );
};
