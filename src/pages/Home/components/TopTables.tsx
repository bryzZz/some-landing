import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Scene } from "react-scrollmagic";

import { TabPanel, Tabs, TopWebMastersTable, TopOffersTable } from "components";

import TopOffer1 from "assets/images/top-offer-1.png";
import TopOffer2 from "assets/images/top-offer-2.png";
import TopOffer3 from "assets/images/top-offer-3.png";
import TopOffer4 from "assets/images/top-offer-4.png";
import TopOffer5 from "assets/images/top-offer-5.png";
import Person from "assets/icons/person.svg";
import { ReactComponent as FlagRu } from "assets/icons/flag_ru-4x3.svg";
import { ReactComponent as FlagDe } from "assets/icons/flag_de-4x3.svg";
import { ReactComponent as FlagPt } from "assets/icons/flag_pt-4x3.svg";

const webMasters = [
  { image: Person, name: "Никто Павлов", perDay: 5000, perMonth: 50000 },
  { image: Person, name: "Никто Павлов", perDay: 5000, perMonth: 50000 },
  { image: Person, name: "Никто Павлов", perDay: 5000, perMonth: 50000 },
  { image: Person, name: "Никто Павлов", perDay: 5000, perMonth: 50000 },
  { image: Person, name: "Никто Павлов", perDay: 5000, perMonth: 50000 },
];

const offers = [
  {
    id: "#1463",
    image: TopOffer1,
    name: "SuperSlots - [ASO] [US]",
    geo: [FlagRu, FlagDe, FlagPt],
    epc: 31,
  },
  {
    id: "#1463",
    image: TopOffer2,
    name: "Sl********",
    isPrivate: true,
    geo: [FlagRu, FlagDe, FlagPt],
    epc: 31,
  },
  {
    id: "#1463",
    image: TopOffer3,
    name: "SuperSlots - [ASO] [US]",
    geo: [FlagRu, FlagDe, FlagPt],
    epc: 31,
  },
  {
    id: "#1463",
    image: TopOffer4,
    name: "Sl********",
    isPrivate: true,
    geo: [FlagRu, FlagDe, FlagPt],
    epc: 31,
  },
  {
    id: "#1463",
    image: TopOffer5,
    name: "SuperSlots - [ASO] [US]",
    geo: [FlagRu, FlagDe, FlagPt],
    epc: 31,
  },
];

const labels = ["Топ веб-мастеров", "Топ офферов"];

export const TopTables: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <section id="bubbles-2" className="relative z-10 mb-32">
      <Scene duration={1500} triggerElement="#bubbles-2" triggerHook="onEnter">
        {(progress: number) => (
          <>
            <div
              className="absolute left-[5vw] h-5 w-5 rounded-full bg-[#7471FF] opacity-20"
              style={{
                top: 400 + progress * -200,
              }}
            />
            <div
              className="absolute left-[10vw] h-20 w-20 rounded-full bg-[#7471FF]"
              style={{
                top: 700 + progress * -300,
              }}
            />
          </>
        )}
      </Scene>

      <div className="small-container flex flex-col items-center">
        <Fade cascade duration={500} damping={0.3} triggerOnce>
          <Tabs
            className="mb-6 md:mb-10"
            tabs={labels}
            value={tabValue}
            onChange={setTabValue}
          />

          <div className="w-full">
            <TabPanel value={0} tabValue={tabValue}>
              <TopWebMastersTable items={webMasters} />
            </TabPanel>
            <TabPanel value={1} tabValue={tabValue}>
              <TopOffersTable items={offers} />
            </TabPanel>
          </div>
        </Fade>
      </div>
    </section>
  );
};
