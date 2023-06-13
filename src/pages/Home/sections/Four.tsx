import React, { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

import { TabPanel } from "components";
import { ReactComponent as Person } from "assets/icons/person.svg";

interface Top {
  label: string;
  head: string[];
  rows: { value: string | number; Icon?: FC }[][];
}

const tops: Top[] = [
  {
    label: "Топ веб-мастеров",
    head: ["Имя", "За день", "За месяц"],
    rows: [
      [
        { value: "Никто Павлов", Icon: Person },
        { value: 5000 },
        { value: 50000 },
      ],
      [
        { value: "Никто Павлов", Icon: Person },
        { value: 5000 },
        { value: 50000 },
      ],
      [
        { value: "Никто Павлов", Icon: Person },
        { value: 5000 },
        { value: 50000 },
      ],
      [
        { value: "Никто Павлов", Icon: Person },
        { value: 5000 },
        { value: 50000 },
      ],
      [
        { value: "Никто Павлов", Icon: Person },
        { value: 5000 },
        { value: 50000 },
      ],
    ],
  },
  {
    label: "Топ офферов",
    head: ["Имя", "За день", "За месяц"],
    rows: [
      [{ value: "Оффер 1" }, { value: 5000 }, { value: 50000 }],
      [{ value: "Оффер 1" }, { value: 5000 }, { value: 50000 }],
      [{ value: "Оффер 1" }, { value: 5000 }, { value: 50000 }],
      [{ value: "Оффер 1" }, { value: 5000 }, { value: 50000 }],
      [{ value: "Оффер 1" }, { value: 5000 }, { value: 50000 }],
    ],
  },
];

const USDollar = new Intl.NumberFormat("ru-RU", {
  minimumSignificantDigits: 6,
});

export const Four: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <section className="small-container z-10 mb-32 flex flex-col items-center">
      <div className="mb-11 w-[500px] rounded-[35px] border-2 text-[15px] font-bold text-text-400">
        {tops.map(({ label }, i) => (
          <button
            className={twMerge(
              "w-1/2 px-11 py-4",
              tabValue === i &&
                "rounded-[35px] bg-[#FDFDFD] shadow-[0_4px_21px_3px_rgba(28,28,28,0.07)] outline outline-2 outline-[#FDFDFD]"
            )}
            onClick={() => setTabValue(i)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="w-full">
        {tops.map(({ head, rows }, i) => (
          <TabPanel value={i} tabValue={tabValue} key={i}>
            <table className="w-full table-fixed border-separate border-spacing-y-2">
              <thead>
                <tr className="bg-[#F4F4F4] text-[14px] font-bold text-[#B3B3B3]">
                  {head.map((value, i, arr) => (
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
                {rows.map((row, i) => (
                  <tr
                    className="mb-2 rounded bg-[#F9F9F9] text-[14px] font-bold text-text-300"
                    key={i}
                  >
                    {row.map(({ value, Icon }, i, arr) => (
                      <td
                        className={twMerge(
                          "py-3 pl-3",
                          Icon && "flex items-center gap-4",
                          i === 0 && "rounded-bl rounded-tl",
                          i === arr.length - 1 && "rounded-br rounded-tr"
                        )}
                        key={i}
                      >
                        {Icon && <Icon />}
                        {typeof value === "number" ? (
                          <span>
                            <span className="text-[#F7971D]">$</span>{" "}
                            {USDollar.format(value)}
                          </span>
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </TabPanel>
        ))}
      </div>
    </section>
  );
};
