import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as VK } from "assets/icons/vk.svg";
import { ReactComponent as Telegram } from "assets/icons/telegram.svg";
import { ReactComponent as USAFlag } from "assets/icons/usa-flag.svg";
import { ReactComponent as DoorEnter } from "assets/icons/door-enter.svg";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { BASE_PATH } from "constants/index";

const navItems = [
  { label: "Преимущества", path: "a" },
  { label: "Кейсы", path: "b" },
  { label: "Бонусы", path: "bonuses/" },
  { label: "Магазин", path: "points-store/" },
  { label: "Отзывы", path: "f" },
];

export const Header: React.FC = () => {
  return (
    <header className="header-container pt-8">
      <div className="flex items-center">
        <Link to={BASE_PATH} className="mr-24">
          <Logo />
        </Link>

        <nav className="mr-auto flex items-center gap-4 lg:gap-9">
          {navItems.map(({ label, path }, i) => (
            <Link key={i} to={path} className="font-semibold text-text-400">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <div className="mr-6 flex gap-2">
            <Link to={"/"} className="p-[10px]">
              <VK width="20px" height="20px" />
            </Link>
            <Link to={"/"} className="p-[10px]">
              <Telegram width="20px" height="20px" />
            </Link>
          </div>
          <button className="mr-2 flex items-center gap-1 rounded bg-[#F4F4F4] p-[10px] font-extrabold text-[#9A9A9A]">
            <USAFlag className="h-5 w-5" />
            EN
          </button>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-6 py-4 font-extrabold">
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
