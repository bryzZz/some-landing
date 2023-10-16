import React from "react";
import { twMerge } from "tailwind-merge";

import { TabPanel } from "components";

import Person from "assets/icons/person.svg";
import { ReactComponent as Telegram } from "assets/icons/telegram-2.svg";
import { ReactComponent as Mail } from "assets/icons/mail.svg";
import ContactsImage from "assets/images/contacts-image.jpg";
import ContactsImageSm from "assets/images/contacts-image-sm.jpg";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "hooks";
import { useSearchParamsState } from "hooks/useSearchParamsState";

const contacts = [
  {
    label: "Сотрудничество",
    items: [
      {
        avatar: Person,
        name: "Виктория",
        role: "Project Manager",
        telegram: "https://t.me/viktoria_leads",
        mail: "info@leadshub.pro",
      },
    ],
  },
  {
    label: "Остальные",
    items: [
      {
        avatar: Person,
        name: "Данила",
        role: "Advertise manager",
        telegram: "https://t.me/Danila_leadshub",
        mail: "advertise@leadshub.pro",
      },
      {
        avatar: Person,
        name: "Дмитрий",
        role: "СЕО",
        telegram: "https://t.me/dimasmanager",
        mail: "dmitry@leadshub.pro",
      },
    ],
  },
  {
    label: "Поддержка веб-мастеров",
    items: [
      {
        avatar: Person,
        name: "Антон",
        role: "Head of Affiliate Manager",
        telegram: "https://t.me/Anton_leadshub",
        mail: "anton@leadshub.pro",
      },
      {
        avatar: Person,
        name: "Юлия",
        role: "Affiliate Manager",
        telegram: "https://t.me/Yuliya_leads",
        mail: "yuliya@leadshub.pro",
      },
      {
        avatar: Person,
        name: "Дмитрий",
        role: "Affiliate Manager",
        telegram: "https://t.me/Dima_leadshub",
        mail: "dima@leadshub.pro",
      },
    ],
  },
];

const labels = contacts.map(({ label }) => label);

const bottomContacts = [
  {
    title: "Поддержка в Telegram:",
    label: "@leadshub_support",
    link: "https://t.me/leadshub_support",
    Icon: Telegram,
  },
  {
    title: "вопросы и предложения:",
    label: "info@leadshub.pro",
    link: "mailto:info@leadshub.pro",
    Icon: Mail,
  },
  {
    title: "Ваши резюме:",
    label: "hr@leadshub.pro",
    link: "mailto:hr@leadshub.pro",
    Icon: Mail,
  },
];

export const Contacts: React.FC = () => {
  const [tabValue, setTabValue] = useSearchParamsState("tabValue", "2");

  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <section className="base-container">
      <Fade cascade direction="up" duration={500} damping={0.3} triggerOnce>
        <h1 className="heading-1 mb-28 text-center lg:mb-40">Контакты</h1>

        <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
          {labels.map((label, i) => (
            <button
              key={i}
              className={twMerge(
                "rounded-lg bg-text-100 px-4 py-2 text-sm font-bold text-text-400 shadow-200 transition-all md:text-base 3xl:text-lg",
                i === Number(tabValue) &&
                  "bg-primary-100 text-text-100 shadow-100",
                i === 1 && "md:order-3"
              )}
              onClick={() => setTabValue(String(i))}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mb-24">
          {contacts.map(({ items }, i) => (
            <TabPanel value={String(i)} tabValue={tabValue} key={i}>
              <div className="grid grid-cols-1 justify-center gap-[30px] sm:grid-cols-[repeat(auto-fit,minmax(250px,300px))] 2xl:grid-cols-[repeat(auto-fit,minmax(250px,350px))]">
                {items.map(({ avatar, name, role, telegram, mail }, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-text-100 p-[22px] pb-[30px] shadow-100 3xl:p-9 3xl:pb-11"
                  >
                    <div className="mb-6 flex flex-col items-center gap-3 sm:flex-row md:gap-[18px]">
                      <img
                        src={avatar}
                        className="w-full max-w-[5.25rem] object-contain sm:max-w-[3.5rem] 3xl:max-w-[5.45rem]"
                      />
                      <div className="text-center sm:text-left">
                        <p className="sm:heading-4 p-[1px] text-lg font-bold text-text-400">
                          {name}
                        </p>
                        <p className="sub-heading-4">{role}</p>
                      </div>
                    </div>

                    <div
                      className={twMerge(
                        "grid grid-cols-1 gap-1 font-semibold 3xl:text-lg",
                        mail && "grid-cols-2"
                      )}
                    >
                      <a
                        href={telegram}
                        target="_blank"
                        className={twMerge(
                          "flex w-full items-center justify-center gap-2 rounded-bl-lg rounded-tl-lg bg-[#F8F8F8] py-3 pl-[14px] pr-4 transition hover:bg-[#EEEEEE] 3xl:p-5",
                          !mail && "rounded-br-lg rounded-tr-lg"
                        )}
                      >
                        <Telegram className="shrink-0" width={20} height={20} />
                        Telegram
                      </a>
                      {mail && (
                        <a
                          href={`mailto:${mail}`}
                          target="_blank"
                          className="flex w-full items-center justify-center gap-2 rounded-br-lg rounded-tr-lg bg-[#F8F8F8] py-3 pl-[14px] pr-4 transition hover:bg-[#EEEEEE] 3xl:p-5"
                        >
                          <Mail className="shrink-0" />
                          E-mail
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </div>

        <div
          className="mx-auto mb-24 flex w-full max-w-[975px] flex-col items-center justify-between gap-10 rounded-2xl border border-[#D1D1D1] bg-cover bg-center bg-no-repeat px-11 py-9 shadow-100 lg:mb-36 lg:flex-row lg:gap-0 3xl:max-w-[1152px]"
          style={{
            backgroundImage: `url(${
              matches ? ContactsImage : ContactsImageSm
            })`,
          }}
        >
          {bottomContacts.map(({ title, Icon, label, link }) => (
            <div className="text-center">
              <h5 className="mb-1 text-sm font-bold uppercase text-[#000] 3xl:text-lg">
                {title}
              </h5>
              <a
                href={link}
                target="_blank"
                className="flex cursor-pointer items-center justify-center gap-1 text-base text-[#525260] 3xl:text-lg"
              >
                <Icon width={30} height={30} />
                {label}
              </a>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};
