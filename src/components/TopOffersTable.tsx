import { useMediaQuery } from "hooks";
import React, { FC } from "react";
import useSWR from "swr";
import { twMerge } from "tailwind-merge";

interface TopOffersTableProps {
  items: Array<{
    id: string;
    image: string;
    name: string;
    isPrivate?: boolean;
    geo: FC[];
    epc: number;
  }>;
}

export const TopOffersTable: React.FC<TopOffersTableProps> = ({ items }) => {
  const { data: todayData } = useSWR(
    "http://5.63.155.73/tops/web/actually5web.json"
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
        {items.map(({ id, image, name, isPrivate = false, geo, epc }, i) => (
          <tr
            className="sub-heading-4 mb-2 rounded bg-[#F9F9F9] font-bold"
            key={i}
          >
            {matches ? (
              <>
                <td className="w-14 rounded-bl rounded-tl pl-[14px]">
                  <img
                    className="h-8 w-8 object-contain 3xl:h-10 3xl:w-10"
                    src={image}
                  />
                </td>
                <td className="w-24 py-3">{id}</td>
                <td className="w-2/4 rounded-br rounded-tr py-3">
                  {name}{" "}
                  {isPrivate && <span className="text-[#B8C4D2]">Private</span>}
                </td>
                <td className="flex items-center gap-[6px] py-3">
                  {geo.map((Icon, i) => (
                    <Icon key={i} />
                  ))}
                </td>
                <td className="rounded-br rounded-tr py-3">{epc}%</td>
              </>
            ) : (
              <>
                <td className="rounded-bl rounded-tl p-3">
                  <div className="mb-2 flex items-center gap-4">
                    <img className="h-8 w-8 object-contain" src={image} />
                    {id}
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <span className="text-[#B3B3B3]">Гео: </span>
                    {geo.map((Icon, i) => (
                      <Icon key={i} />
                    ))}
                  </div>
                </td>
                <td className="rounded-br rounded-tr py-3">
                  <div className="mb-2">
                    {name}
                    {isPrivate && (
                      <span className="text-[#B8C4D2]"> Private</span>
                    )}
                  </div>
                  <div>
                    <span className="text-[#B3B3B3]">Epc </span>
                    {epc}%
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
