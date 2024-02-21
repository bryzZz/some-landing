import React from "react";
import { twMerge } from "tailwind-merge";
import useSWR from "swr";

import { useMediaQuery } from "hooks";
import { OffersResponse } from "types";
import { OffersGeo } from "./OffersGeo";

import Private from "assets/icons/private-offer.png";
import { useTranslation } from "react-i18next";

export const TopOffersTable: React.FC = () => {
  const { t } = useTranslation();

  const { data } = useSWR<OffersResponse>("/tops/offers/actually5offers.json", {
    revalidateOnMount: true,
  });

  const mdMatches = useMediaQuery("(min-width: 768px)");
  const smMatches = useMediaQuery("(min-width: 350px)");

  return (
    <table className="w-full table-fixed border-separate border-spacing-y-2">
      <thead>
        <tr className="bg-[#F4F4F4] text-sm font-bold text-[#B3B3B3] 3xl:text-base">
          {mdMatches && <th className="w-[70px]" />}
          <th
            className={twMerge(
              "w-24 rounded-bl rounded-tl py-3 text-left",
              !mdMatches && "pl-[60px]"
            )}
          >
            ID
          </th>
          <th className="w-2/4 py-3 text-left">
            {t("home:topTables.topOffers.name")}
          </th>
          {mdMatches && (
            <>
              <th className="py-3 text-left">
                {t("home:topTables.topOffers.geo")}
              </th>
              <th className="rounded-br rounded-tr py-3 text-left">R2D</th>
            </>
          )}
        </tr>
      </thead>

      <tbody>
        {data &&
          Object.entries(data)
            .sort((a, b) => b[1].r2d - a[1].r2d)
            .map(([id, { logo, title, privacy, countries, r2d }]) => {
              title = title ?? "************";
              countries = countries ?? [];
              logo = logo ?? Private;

              return (
                <tr
                  className="sub-heading-4 mb-2 rounded bg-[#F9F9F9] font-bold"
                  key={id}
                >
                  {mdMatches ? (
                    <>
                      <td className="w-14 rounded-bl rounded-tl pl-[14px]">
                        <img
                          className="h-8 w-8 object-contain 3xl:h-10 3xl:w-10"
                          src={privacy === "private" ? Private : logo}
                        />
                      </td>
                      <td className="w-24 py-3">#{id}</td>
                      <td className="w-2/4 rounded-br rounded-tr py-3 pr-8">
                        {privacy === "private" ? title.slice(0, 12) : title}
                        {privacy === "private" && (
                          <span className="text-[#B8C4D2]"> Private</span>
                        )}
                      </td>
                      <td className="py-3">
                        <OffersGeo countries={countries} />
                      </td>
                      <td className="rounded-br rounded-tr py-3">{r2d}%</td>
                    </>
                  ) : (
                    <>
                      <td className="rounded-bl rounded-tl p-3">
                        <div className="mb-2 flex items-center gap-4">
                          <img
                            className="h-8 w-8 object-contain"
                            src={privacy === "private" ? Private : logo}
                          />
                          #{id}
                        </div>
                        <div className="flex items-center gap-[6px]">
                          <span className="text-[#B3B3B3]">
                            {t("home:topTables.topOffers.geo")}:{" "}
                          </span>
                          <OffersGeo countries={countries} />
                        </div>
                      </td>
                      <td className="rounded-br rounded-tr py-3">
                        <div className="mb-2 pr-1">
                          {privacy === "private"
                            ? title.slice(0, smMatches ? 12 : 8)
                            : title}
                          {privacy === "private" && (
                            <span className="text-[#B8C4D2]"> Private</span>
                          )}
                        </div>
                        <div>
                          <span className="text-[#B3B3B3]">R2D </span>
                          {r2d}%
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              );
            })}
      </tbody>
    </table>
  );
};
