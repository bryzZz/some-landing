import { useMediaQuery } from "hooks";
import React from "react";

interface TopWebMastersTableProps {
  items: Array<{
    image: string;
    name: string;
    perDay: number;
    perMonth: number;
  }>;
}

const USDollar = new Intl.NumberFormat("ru-RU", {
  minimumSignificantDigits: 6,
});

export const TopWebMastersTable: React.FC<TopWebMastersTableProps> = ({
  items,
}) => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <table className="w-full table-fixed border-separate border-spacing-y-2">
      <thead>
        <tr className="bg-[#F4F4F4] text-sm font-bold text-[#B3B3B3] 3xl:text-xl">
          <th className="rounded py-3 pl-8 text-left md:rounded-br-none md:rounded-tr-none">
            Имя
          </th>
          {matches && (
            <>
              <th className="py-3 pl-8 text-left">За день</th>
              <th className="rounded-br rounded-tr py-3 pl-8 text-left">
                За месяц
              </th>
            </>
          )}
        </tr>
      </thead>

      <tbody>
        {items.map(({ image, name, perDay, perMonth }, i) => (
          <tr
            className="sub-heading-4 mb-2 rounded bg-[#F9F9F9] font-bold"
            key={i}
          >
            {matches ? (
              <>
                <td className="rounded-bl rounded-tl py-3 pl-3">
                  <div className="flex items-center gap-4">
                    <img
                      className="h-7 w-7 object-contain 3xl:h-10 3xl:w-10"
                      src={image}
                    />
                    {name}
                  </div>
                </td>
                <td className="py-3 pl-3">
                  <span className="text-primary-100">$</span>{" "}
                  {USDollar.format(perDay)}
                </td>
                <td className="rounded-br rounded-tr py-3 pl-3">
                  <span className="text-primary-100">$</span>{" "}
                  {USDollar.format(perMonth)}
                </td>
              </>
            ) : (
              <td className="flex flex-col gap-3 p-4">
                <div className="flex items-center gap-4">
                  <img className="h-7 w-7 object-contain" src={image} />
                  {name}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-5">
                  <div>
                    <span className="text-[#B3B3B3]">За день: </span>
                    <span className="text-primary-100">$</span>{" "}
                    {USDollar.format(perDay)}
                  </div>
                  <div>
                    <span className="text-[#B3B3B3]">За месяц: </span>
                    <span className="text-primary-100">$</span>{" "}
                    {USDollar.format(perMonth)}
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
