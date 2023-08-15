import React from "react";
import { twMerge } from "tailwind-merge";
import useSWR from "swr";

import { useMediaQuery } from "hooks";

import Person from "assets/icons/person.svg";
import { WebMasterResponse } from "types";

const currencyFormat = new Intl.NumberFormat("ru-RU");

// const fetcher = (url: string) =>
//   fetch(url, {
//     headers: { "API-Key": "6081e0847f5541e78e866d96c5627f87" },
//   }).then((res) => res.json());

export const TopWebMastersTable: React.FC = () => {
  const { data: todayData } = useSWR<WebMasterResponse>(
    `https://leads-bonus.ru/api.top?date=today&count=5`
  );

  const { data: monthData } = useSWR<WebMasterResponse>(
    `https://leads-bonus.ru/api.top?date=month&count=1000`
  );

  // const { data: d2 } = useSWR<WebMasterResponse>(
  //   `http://api-leadshub.affise.com/2.1/currencies`,
  //   fetcher
  // );

  // const { data: d } = useSWR(
  //   `http://api-leadshub.affise.com/3.0/stats/getbyhour?filter[date_from]=2023-08-15&filter[date_to]=2023-08-15&filter[partner]=${data?.top[2].id}&orderType=asc&limit=24`,
  //   fetcher
  // );

  // const { data: d } = useSWR(
  //   `http://api-leadshub.affise.com/3.0/stats/custom?slice[]=day&filter[date_from]=2023-08-15&filter[date_to]=2023-08-15&filter[currency][0]=USD&filter[partner]=${data?.top[2].id}&api-key=6081e0847f5541e78e866d96c5627f87`
  //   // fetcher
  // );

  // const { data: d } = useSWR(
  //   `http://api-leadshub.affise.com/3.0/stats/custom?slice[]=day&filter[date_from]=2023-08-04&filter[date_to]=2023-08-15&filter[currency][0]=USD&filter[partner]=10890&api-key=6081e0847f5541e78e866d96c5627f87`
  //   // fetcher
  // );

  // console.log(
  //   d?.stats &&
  //     d.stats.reduce((acc: number, cur: any) => {
  //       return acc + cur.actions.total.revenue;
  //     }, 0)
  // );

  const data = todayData?.top.map(({ id, bonuses: todayBonuses, name }) => {
    const monthBonuses =
      monthData?.top.find((data) => data.id === id)?.bonuses ?? "0";

    return { id, todayBonuses, monthBonuses, name };
  });

  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <table className="w-full table-fixed border-separate border-spacing-y-2">
      <thead>
        <tr className="bg-[#F4F4F4] text-sm font-bold text-[#B3B3B3] 3xl:text-xl">
          {matches && <th className="w-14" />}
          <th
            className={twMerge(
              "rounded py-3 text-left md:rounded-br-none md:rounded-tr-none",
              !matches && "pl-[60px]"
            )}
          >
            Имя
          </th>
          {matches && (
            <>
              <th className="py-3 text-left">За день</th>
              <th className="rounded-br rounded-tr py-3 text-left">За месяц</th>
            </>
          )}
        </tr>
      </thead>

      <tbody>
        {data?.map(({ id, name, todayBonuses, monthBonuses }) => (
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
                <td className="py-3">
                  <span className="text-primary-100">₽</span>{" "}
                  {currencyFormat.format(Number(todayBonuses))}
                </td>
                <td className="rounded-br rounded-tr py-3">
                  <span className="text-primary-100">₽</span>{" "}
                  {currencyFormat.format(Number(monthBonuses))}
                </td>
              </>
            ) : (
              <td className="flex flex-col gap-3 p-4">
                <div className="flex items-center gap-4">
                  <img className="h-8 w-8 object-contain" src={Person} />
                  {name || "Leadshuber"}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-5">
                  <div>
                    <span className="text-[#B3B3B3]">За день: </span>
                    <span className="text-primary-100">₽</span>{" "}
                    {currencyFormat.format(Number(todayBonuses))}
                  </div>
                  <div>
                    <span className="text-[#B3B3B3]">За месяц: </span>
                    <span className="text-primary-100">₽</span>{" "}
                    {currencyFormat.format(Number(monthBonuses))}
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
