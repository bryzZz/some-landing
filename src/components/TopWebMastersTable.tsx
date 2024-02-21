import React from "react";
import { twMerge } from "tailwind-merge";
import useSWR from "swr";

import { useMediaQuery } from "hooks";

import Person from "assets/icons/person.svg";
import { WebMasterResponse } from "types";
import { useTranslation } from "react-i18next";

const currencyFormat = new Intl.NumberFormat("ru-RU");

export const TopWebMastersTable: React.FC = () => {
  const { t } = useTranslation();

  const { data } = useSWR<WebMasterResponse>("/tops/web/actually5web.json", {
    revalidateOnMount: true,
  });

  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <table className="w-full table-fixed border-separate border-spacing-y-2">
      <thead>
        <tr className="bg-[#F4F4F4] text-sm font-bold text-[#B3B3B3] 3xl:text-base">
          {matches && <th className="w-14" />}
          <th
            className={twMerge(
              "rounded py-3 text-left md:rounded-br-none md:rounded-tr-none",
              !matches && "pl-[60px]"
            )}
          >
            {t("home:topTables.topWebMasters.name")}
          </th>
          {matches && (
            <>
              <th className="py-3 text-left">
                {t("home:topTables.topWebMasters.day")}
              </th>
              <th className="rounded-br rounded-tr py-3 text-left">
                {t("home:topTables.topWebMasters.month")}
              </th>
            </>
          )}
        </tr>
      </thead>

      <tbody>
        {data &&
          Object.entries(data)
            .sort((a, b) => Number(b[1].d) - Number(a[1].d))
            .map(([id, { d, m, name }]) => (
              <tr
                className="sub-heading-4 mb-2 rounded bg-[#F9F9F9] font-bold"
                key={id}
              >
                {matches ? (
                  <>
                    <td className="w-14 rounded-bl rounded-tl pl-[14px]">
                      <img
                        className="h-8 w-8 object-contain 3xl:h-10 3xl:w-10"
                        src={Person}
                      />
                    </td>
                    <td className="py-3">{name || "Leadshuber"}</td>
                    <td className="whitespace-nowrap py-3">
                      <span className="text-primary-100">$</span>{" "}
                      {currencyFormat.format(Math.ceil(Number(d) / 100))}
                    </td>
                    <td className="whitespace-nowrap rounded-br rounded-tr py-3">
                      <span className="text-primary-100">$</span>{" "}
                      {currencyFormat.format(Math.ceil(Number(m) / 100))}
                    </td>
                  </>
                ) : (
                  <td className="flex flex-col gap-3 p-4">
                    <div className="flex items-center gap-4">
                      <img className="h-8 w-8 object-contain" src={Person} />
                      {name || "Leadshuber"}
                    </div>
                    <div className="flex items-center justify-between gap-5">
                      <div className="whitespace-nowrap">
                        <span className="text-[#B3B3B3]">
                          {t("home:topTables.topWebMasters.day")}:{" "}
                        </span>
                        <span className="text-primary-100">$</span>{" "}
                        {currencyFormat.format(Math.ceil(Number(d) / 100))}
                      </div>
                      <div className="whitespace-nowrap">
                        <span className="text-[#B3B3B3]">
                          {t("home:topTables.topWebMasters.month")}:{" "}
                        </span>
                        <span className="text-primary-100">$</span>{" "}
                        {currencyFormat.format(Math.ceil(Number(m) / 100))}
                      </div>
                    </div>
                  </td>
                )}
              </tr>
            ))}
      </tbody>
    </table>
  );
};
