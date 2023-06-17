import React, { useState } from "react";

import { TabPanel } from "components";

import Person from "assets/icons/person.svg";
import { ReactComponent as Telegram } from "assets/icons/telegram-2.svg";
import { ReactComponent as Mail } from "assets/icons/mail.svg";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

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
    label: "Поддержка веб-мастеров",
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
];

const labels = contacts.map(({ label }) => label);

export const Contacts: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <section className="base-container">
      <h1 className="heading-1 mb-40 text-center">Контакты</h1>

      <div className="mb-16 flex items-center justify-center gap-4">
        {labels.map((label, i) => (
          <button
            key={i}
            className={twMerge(
              "rounded-lg bg-text-100 px-4 py-[11px] font-bold text-text-400 shadow-200 transition-all",
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
            <div className="flex items-center justify-center gap-[30px]">
              {items.map(({ avatar, name, role, telegram, mail }, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-text-100 p-[22px] pb-[30px] shadow-100"
                >
                  <div className="mb-6 flex items-center gap-[18px]">
                    <img src={avatar} className="w-14 object-contain" />
                    <div>
                      <p className="heading-4 p-[1px]">{name}</p>
                      <p className="sub-heading-4">{role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <Link
                      to={telegram}
                      className="flex items-center gap-2 rounded-bl-lg rounded-tl-lg bg-[#F8F8F8] p-4 font-semibold"
                    >
                      <Telegram />
                      Telegram
                    </Link>
                    <Link
                      to={mail}
                      className="flex items-center gap-2 rounded-br-lg rounded-tr-lg bg-[#F8F8F8] p-4 font-semibold"
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
    </section>
  );
};
