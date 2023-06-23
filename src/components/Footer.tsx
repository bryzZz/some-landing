import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Telegram } from "assets/icons/telegram-2.svg";
import { ReactComponent as VK } from "assets/icons/vk-2.svg";
import { ReactComponent as Skype } from "assets/icons/skype.svg";
import { ReactComponent as Mail } from "assets/icons/mail.svg";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { BASE_PATH } from "constants/index";

const navItems = [
  { label: "FAQ", path: "FAQ/" },
  { label: "Магазин", path: "points-store/" },
  { label: "Бонусы", path: "bonuses/" },
  { label: "Публичная оферта", path: "d" },
  { label: "Информация о cookie", path: "f" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#ECF2F6]">
      <div className="base-container pb-8 pt-10">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <Link to={BASE_PATH} className="mb-5 block">
              <Logo />
            </Link>
            <div className="flex flex-col gap-[10px]">
              <Link
                to="/"
                className="flex items-center gap-4 font-semibold text-text-300"
              >
                <Telegram width={14} height={14} />
                @leads_chat
              </Link>
              <Link
                to="/"
                className="flex items-center gap-4 font-semibold text-text-300"
              >
                <Mail width={14} height={14} />
                info@leadshub.pro
              </Link>
              <Link
                to="/"
                className="flex items-center gap-4 font-semibold text-text-300"
              >
                <Skype width={14} height={14} />
                info_chat
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-xl font-bold">Быстрые ссылки</h3>
            <nav className="mb-28 flex w-full items-center justify-between gap-6">
              {navItems.map(({ label, path }, i) => (
                <Link
                  key={i}
                  to={path}
                  className="text-400 text-xs font-bold uppercase"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <hr className="mb-6 bg-[#E0E0E0]" />

        <div className="flex items-center justify-between text-[14px] text-[#888888]">
          <p className="font-semibold">
            © 2019-2023, Leadshub. Все права сохранены.
          </p>
          <div className="flex justify-end gap-7 text-right">
            <p className="font-bold">Оставайся с нами:</p>
            <Link to={"/"} className="flex items-center gap-2 font-semibold">
              <Telegram />
              Telegram
            </Link>
            <Link to={"/"} className="flex items-center gap-2 font-semibold">
              <VK />
              Vkontakte
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
