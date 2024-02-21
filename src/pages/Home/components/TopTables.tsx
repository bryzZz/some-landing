import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Scene } from "react-scrollmagic";

import { TabPanel, Tabs, TopWebMastersTable, TopOffersTable } from "components";
import { useTranslation } from "react-i18next";

export const TopTables: React.FC = () => {
  const { t } = useTranslation();

  const [tabValue, setTabValue] = useState(0);

  const labels = t("home:topTables.labels", {
    returnObjects: true,
  }) as string[];

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
              className="absolute left-[10vw] hidden h-20 w-20 rounded-full bg-[#7471FF] md:block"
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
              <TopWebMastersTable />
            </TabPanel>
            <TabPanel value={1} tabValue={tabValue}>
              <TopOffersTable />
            </TabPanel>
          </div>
        </Fade>
      </div>
    </section>
  );
};
