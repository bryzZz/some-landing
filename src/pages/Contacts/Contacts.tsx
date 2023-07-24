import React, { useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { TabPanel } from "components";

import Person from "assets/icons/person.svg";
import { ReactComponent as Telegram } from "assets/icons/telegram-2.svg";
import { ReactComponent as Mail } from "assets/icons/mail.svg";
import ContactsImage from "assets/images/contacts-image.jpg";
import { Fade } from "react-awesome-reveal";

const contacts = [
  {
    label: "Сотрудничество",
    items: [
      {
        avatar: Person,
        name: "Снежана",
        role: "Advertise manager",
        telegram: "as",
        mail: "asd",
      },
      {
        avatar: Person,
        name: "Дмитрий",
        role: "SEO",
        telegram: "as",
        mail: "asd",
      },
    ],
  },
  {
    label: "Остальные",
    items: [
      {
        avatar: Person,
        name: "Снежана3",
        role: "Advertise manager",
        telegram: "as",
        mail: "asd",
      },
      {
        avatar: Person,
        name: "Дмитрий3",
        role: "SEO",
        telegram: "as",
        mail: "asd",
      },
    ],
  },
  {
    label: "Поддержка веб-мастеров",
    items: [
      {
        avatar: Person,
        name: "Снежана2",
        role: "Advertise manager",
        telegram: "as",
        mail: "asd",
      },
      {
        avatar: Person,
        name: "Дмитрий2",
        role: "SEO",
        telegram: "as",
        mail: "asd",
      },
    ],
  },
];

const labels = contacts.map(({ label }) => label);

const bottomContacts = [
  {
    title: "Поддержка в Telegram:",
    link: "@leadshub_support",
    Icon: Telegram,
  },
  {
    title: "вопросы и предложения:",
    link: "info@leadshub.pro",
    Icon: Mail,
  },
  {
    title: "Ваши резюме:",
    link: "hr@leadshub.pro",
    Icon: Mail,
  },
];

export const Contacts: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <section className="base-container">
      <Fade cascade direction="up" duration={500} damping={0.3} triggerOnce>
        <h1 className="heading-1 mb-28 text-center lg:mb-40">Контакты</h1>

        <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
          {labels.map((label, i) => (
            <button
              key={i}
              className={twMerge(
                "rounded-lg bg-text-100 px-4 py-[11px] text-sm font-bold text-text-400 shadow-200 transition-all md:text-base 3xl:text-xl",
                i === tabValue && "bg-primary-100 text-text-100 shadow-100"
              )}
              onClick={() => setTabValue(i)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mb-24">
          {contacts.map(({ items }, i) => (
            <TabPanel value={i} tabValue={tabValue} key={i}>
              <div className="flex flex-col items-stretch justify-center gap-[30px] sm:flex-row">
                {items.map(({ avatar, name, role, telegram, mail }, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-text-100 p-[22px] pb-[30px] shadow-100 3xl:p-11 3xl:pb-14"
                  >
                    <div className="mb-6 flex flex-col items-center gap-[18px] sm:flex-row">
                      <img
                        src={avatar}
                        className="w-full max-w-[5.25rem] object-contain sm:max-w-[3.5rem] 3xl:max-w-[5.75rem]"
                      />
                      <div className="text-center sm:text-left">
                        <p className="sm:heading-4 p-[1px] text-lg font-bold text-text-400">
                          {name}
                        </p>
                        <p className="sub-heading-4">{role}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-stretch gap-1 font-semibold 3xl:text-xl">
                      <Link
                        to={telegram}
                        className="flex w-full items-center justify-center gap-2 rounded-bl-lg rounded-tl-lg bg-[#F8F8F8] p-4 transition hover:bg-[#EEEEEE] 3xl:p-6"
                      >
                        <Telegram width={30} height={30} />
                        Telegram
                      </Link>
                      <Link
                        to={mail}
                        className="flex w-full items-center justify-center gap-2 rounded-br-lg rounded-tr-lg bg-[#F8F8F8] p-4 transition hover:bg-[#EEEEEE] 3xl:p-6"
                      >
                        <Mail />
                        E-mail
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </div>

        <div
          className="mx-auto mb-24 flex w-full max-w-[975px] flex-col items-center justify-between gap-10 rounded-2xl border border-[#D1D1D1] bg-cover bg-center bg-no-repeat px-11 py-9 shadow-100 md:flex-row md:gap-0 lg:mb-36 3xl:max-w-[1440px]"
          style={{ backgroundImage: `url(${ContactsImage})` }}
        >
          {bottomContacts.map(({ title, Icon, link }) => (
            <div className="text-center">
              <h5 className="mb-1 text-sm font-bold uppercase text-[#000] 3xl:text-xl">
                {title}
              </h5>
              <a className="flex cursor-pointer items-center justify-center gap-1 text-base text-[#525260] 3xl:text-xl">
                <Icon width={30} height={30} />
                {link}
              </a>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};
