import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

import { TopTable as TopTableType } from "types";

interface TopTableProps {
  top: TopTableType;
}

const USDollar = new Intl.NumberFormat("ru-RU", {
  minimumSignificantDigits: 6,
});

export const TopTable: React.FC<TopTableProps> = ({ top }) => {
  const renderWithImage = (image: string, value: string) => {
    return (
      <div className="flex items-center gap-4">
        <img src={image} /> {value}
      </div>
    );
  };

  const renderWithCurrency = (value: number) => {
    return (
      <span>
        <span className="text-primary-100">$</span> {USDollar.format(value)}
      </span>
    );
  };

  const renderWithIcons = (icons: FC[]) => {
    return (
      <div className="flex items-center gap-[6px]">
        {icons.map((Icon) => (
          <Icon />
        ))}
      </div>
    );
  };

  const renderCell = (cell: TopTableType["rows"][number][number]) => {
    if (cell.image) {
      return renderWithImage(cell.image, cell.value as string);
    }

    if (typeof cell.value === "number") {
      return renderWithCurrency(cell.value);
    }

    if (cell.icons) {
      return renderWithIcons(cell.icons);
    }

    return cell.value;
  };

  return (
    <table className="w-full table-fixed border-separate border-spacing-y-2">
      <thead>
        <tr className="bg-[#F4F4F4] text-[14px] font-bold text-[#B3B3B3]">
          {top.head.map((value, i, arr) => (
            <th
              key={i}
              className={twMerge(
                "py-3 pl-8 text-left",
                i === 0 && "rounded-bl rounded-tl",
                i === arr.length - 1 && "rounded-br rounded-tr"
              )}
            >
              {value}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {top.rows.map((row, i) => (
          <tr
            className="sub-heading-4 mb-2 rounded bg-[#F9F9F9] font-bold"
            key={i}
          >
            {row.map((cell, i, arr) => (
              <td
                className={twMerge(
                  "py-3 pl-3",
                  i === 0 && "rounded-bl rounded-tl",
                  i === arr.length - 1 && "rounded-br rounded-tr"
                )}
                key={i}
              >
                {renderCell(cell)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
