import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Telegram } from "assets/icons/telegram-2.svg";
import { ReactComponent as VK } from "assets/icons/vk-2.svg";
import { ReactComponent as Skype } from "assets/icons/skype.svg";
import { ReactComponent as Mail } from "assets/icons/mail.svg";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { BASE_PATH } from "constants/index";
import { usePublicOfferModal, useCookieInfoModal } from "store/useModals";

const navItems = [
  { label: "FAQ", path: "FAQ/" },
  { label: "Магазин", path: "points-store/" },
  { label: "Бонусы", path: "bonuses/" },
  { label: "Контакты", path: "contacts/" },
  { label: "404", path: "not-found/" },
  { label: "Ведутся работы", path: "work/" },
];

export const Footer: React.FC = () => {
  const setPublicOfferIsOpen = usePublicOfferModal((state) => state.setIsOpen);
  const setCookieIsOpen = useCookieInfoModal((state) => state.setIsOpen);

  return (
    <footer className="bg-[#ECF2F6]">
      <div className="base-container pb-8 pt-10">
        <div className="mb-6 flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between md:gap-16">
          <div className="flex flex-col items-center md:block">
            <Link to={BASE_PATH} className="mb-5 block">
              <Logo />
            </Link>

            <div className="hidden flex-col gap-[10px] text-base font-semibold text-text-300 md:flex">
              <Link
                to="tg://resolve?domain=leads_chat"
                className="flex items-center gap-4"
              >
                <Telegram width={14} height={14} />
                @leads_chat
              </Link>
              <Link
                to="mailto:info@leadshub.ru"
                className="flex items-center gap-4"
              >
                <Mail width={14} height={14} />
                info@leadshub.pro
              </Link>
              <Link
                to="https://leadshub.ru/skype:live:.cid.fcd149935426653"
                className="flex items-center gap-4"
              >
                <Skype width={14} height={14} />
                info_chat
              </Link>
            </div>

            <div className="flex items-center gap-5 md:hidden">
              <Link
                to="tg://resolve?domain=leads_chat"
                className="flex items-center gap-2 font-semibold"
              >
                <Telegram />
                Telegram
              </Link>
              <Link
                to="https://vk.com/leadshub"
                className="flex items-center gap-2 font-semibold"
              >
                <VK />
                Vkontakte
              </Link>
            </div>
          </div>

          <hr className="h-[1px] w-full bg-[#E0E0E0] md:hidden" />

          <div>
            <h3 className="mb-5 hidden text-xl font-bold md:block 3xl:text-3xl">
              Быстрые ссылки
            </h3>
            <nav className="flex w-full flex-wrap items-center justify-center gap-6 md:justify-between">
              {navItems.map(({ label, path }, i) => (
                <Link
                  key={i}
                  to={path}
                  className="text-400 group text-xs font-bold uppercase 3xl:text-base"
                >
                  {label}
                  <div className="h-[2px] w-0 rounded-md bg-text-400 transition-all group-hover:w-full" />
                </Link>
              ))}
              <button
                onClick={() => setCookieIsOpen(true)}
                className="text-400 group text-xs font-bold uppercase 3xl:text-base"
              >
                Информация о cookie
                <div className="h-[2px] w-0 rounded-md bg-text-400 transition-all group-hover:w-full" />
              </button>
              <button
                onClick={() => setPublicOfferIsOpen(true)}
                className="text-400 group text-xs font-bold uppercase 3xl:text-base"
              >
                Публичная оферта
                <div className="h-[2px] w-0 rounded-md bg-text-400 transition-all group-hover:w-full" />
              </button>
            </nav>
          </div>
        </div>

        <hr className="mb-6 hidden bg-[#E0E0E0] md:block" />

        <div className="flex items-center justify-center text-sm text-[#888888] md:justify-between">
          <p className="text-center font-semibold md:text-left">
            © 2019-2023, Leadshub. Все права сохранены.
          </p>
          <div className="hidden justify-end gap-7 text-right md:flex">
            <p className="text-base font-bold">Оставайся с нами:</p>
            <Link
              to="tg://resolve?domain=leads_chat"
              className="flex items-center gap-2 text-base font-semibold"
            >
              <Telegram />
              Telegram
            </Link>
            <Link
              to="https://vk.com/leadshub"
              className="flex items-center gap-2 text-base font-semibold"
            >
              <VK />
              Vkontakte
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
