import React, { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

import { TabPanel, Tabs } from "components";
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

const labels = tops.map(({ label }) => label);

const USDollar = new Intl.NumberFormat("ru-RU", {
  minimumSignificantDigits: 6,
});

export const TopTables: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <section className="small-container z-10 mb-32 flex flex-col items-center">
      <Tabs tabs={labels} value={tabValue} onChange={setTabValue} />

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
                    className="sub-heading-4 mb-2 rounded bg-[#F9F9F9] font-bold"
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
                            <span className="text-primary-100">$</span>{" "}
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
