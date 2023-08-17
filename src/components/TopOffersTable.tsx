import React from "react";
import { twMerge } from "tailwind-merge";
import useSWR from "swr";

import { useMediaQuery } from "hooks";
import { OffersResponse } from "types";

export const TopOffersTable: React.FC = () => {
  const { data } = useSWR<OffersResponse>(
    "http://5.63.155.73/tops/offers/actually5offers.json"
  );

  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <table className="w-full table-fixed border-separate border-spacing-y-2">
      <thead>
        <tr className="bg-[#F4F4F4] text-sm font-bold text-[#B3B3B3] 3xl:text-xl">
          {matches && <th className="w-14" />}
          <th
            className={twMerge(
              "w-24 rounded-bl rounded-tl py-3 text-left",
              !matches && "pl-[60px]"
            )}
          >
            ID
          </th>
          <th className="w-2/4 py-3 text-left">Название</th>
          {matches && (
            <>
              <th className="py-3 text-left">Гео</th>
              <th className="rounded-br rounded-tr py-3 text-left">Epc</th>
            </>
          )}
        </tr>
      </thead>

      <tbody>
        {data &&
          Object.entries(data)
            .sort((a, b) => a[1].r2d - b[1].r2d)
            .map(([id, { logo, title, privacy, countries, r2d }]) => (
              <tr
                className="sub-heading-4 mb-2 rounded bg-[#F9F9F9] font-bold"
                key={id}
              >
                {matches ? (
                  <>
                    <td className="w-14 rounded-bl rounded-tl pl-[14px]">
                      <img
                        className="h-8 w-8 object-contain 3xl:h-10 3xl:w-10"
                        src={logo}
                      />
                    </td>
                    <td className="w-24 py-3">#{id}</td>
                    <td className="w-2/4 rounded-br rounded-tr py-3">
                      {title}
                      {privacy === "private" && (
                        <span className="text-[#B8C4D2]"> Private</span>
                      )}
                    </td>
                    <td className="flex flex-wrap items-center gap-[6px] py-3">
                      {countries.map((country) => (
                        <img
                          src={`https://flagcdn.com/48x36/${country.toLowerCase()}.png`}
                          className="h-[16px] w-[21px]"
                        />
                      ))}
                    </td>
                    <td className="rounded-br rounded-tr py-3">{r2d}%</td>
                  </>
                ) : (
                  <>
                    <td className="rounded-bl rounded-tl p-3">
                      <div className="mb-2 flex items-center gap-4">
                        <img className="h-8 w-8 object-contain" src={logo} />#
                        {id}
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <span className="text-[#B3B3B3]">Гео: </span>
                        <div className="flex flex-wrap items-center gap-[6px]">
                          {countries.map((country) => (
                            <img
                              src={`https://flagcdn.com/48x36/${country.toLowerCase()}.png`}
                              className="h-[16px] w-[21px]"
                            />
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="rounded-br rounded-tr py-3">
                      <div className="mb-2">
                        {title}
                        {privacy === "private" && (
                          <span className="text-[#B8C4D2]"> Private</span>
                        )}
                      </div>
                      <div>
                        <span className="text-[#B3B3B3]">Epc </span>
                        {r2d}%
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
      </tbody>
    </table>
  );
};
