import React, { useState } from "react";

import { TabPanel, Tabs, TopTable } from "components";
import { TopTable as TopTableType } from "types";

import TopOffer1 from "assets/images/top-offer-1.png";
import TopOffer2 from "assets/images/top-offer-2.png";
import TopOffer3 from "assets/images/top-offer-3.png";
import TopOffer4 from "assets/images/top-offer-4.png";
import TopOffer5 from "assets/images/top-offer-5.png";
import Person from "assets/icons/person.svg";
import { ReactComponent as FlagRu } from "assets/icons/flag_ru-4x3.svg";
import { ReactComponent as FlagDe } from "assets/icons/flag_de-4x3.svg";
import { ReactComponent as FlagPt } from "assets/icons/flag_pt-4x3.svg";

const tops: TopTableType[] = [
  {
    label: "Топ веб-мастеров",
    head: ["Имя", "За день", "За месяц"],
    rows: [
      [
        { value: "Никто Павлов", image: Person },
        { value: 5000 },
        { value: 50000 },
      ],
      [
        { value: "Никто Павлов", image: Person },
        { value: 5000 },
        { value: 50000 },
      ],
      [
        { value: "Никто Павлов", image: Person },
        { value: 5000 },
        { value: 50000 },
      ],
      [
        { value: "Никто Павлов", image: Person },
        { value: 5000 },
        { value: 50000 },
      ],
      [
        { value: "Никто Павлов", image: Person },
        { value: 5000 },
        { value: 50000 },
      ],
    ],
  },
  {
    label: "Топ офферов",
    head: ["Название", "Гео", "Epc"],
    rows: [
      [
        { value: "Экодар гибридные мини-деревья", image: TopOffer1 },
        { icons: [FlagRu, FlagDe, FlagPt] },
        { value: "31%" },
      ],
      [
        { value: "Экодар гибридные мини-деревья", image: TopOffer2 },
        { icons: [FlagRu, FlagDe, FlagPt] },
        { value: "31%" },
      ],
      [
        { value: "Экодар гибридные мини-деревья", image: TopOffer3 },
        { icons: [FlagRu, FlagDe, FlagPt] },
        { value: "31%" },
      ],
      [
        { value: "Экодар гибридные мини-деревья", image: TopOffer4 },
        { icons: [FlagRu, FlagDe, FlagPt] },
        { value: "31%" },
      ],
      [
        { value: "Экодар гибридные мини-деревья", image: TopOffer5 },
        { icons: [FlagRu, FlagDe, FlagPt] },
        { value: "31%" },
      ],
    ],
  },
];

const labels = tops.map(({ label }) => label);

export const TopTables: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <section className="small-container z-10 mb-32 flex flex-col items-center">
      <Tabs
        className="mb-10"
        tabs={labels}
        value={tabValue}
        onChange={setTabValue}
      />

      <div className="w-full">
        {tops.map((top, i) => (
          <TabPanel value={i} tabValue={tabValue} key={i}>
            <TopTable top={top} />
          </TabPanel>
        ))}
      </div>
    </section>
  );
};
