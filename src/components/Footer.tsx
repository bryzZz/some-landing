import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Telegram } from "assets/icons/telegram-2.svg";
import { ReactComponent as VK } from "assets/icons/vk-2.svg";

const navItems = [
  { label: "FAQ", path: "FAQ/" },
  { label: "Магазин", path: "b" },
  { label: "Бонусы", path: "c" },
  { label: "Публичная оферта", path: "d" },
  { label: "Информация о cookie", path: "f" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#ECF2F6]">
      <div className="mx-[15.625vw] px-4 pb-8 pt-9">
        <div className="text-400 ml-auto w-1/2">
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

          <div className="flex justify-end gap-7 text-right text-[14px] text-[#888888]">
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
