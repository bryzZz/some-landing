import React from "react";
import * as Popover from "@radix-ui/react-popover";

import { ReactComponent as Arrow } from "assets/icons/select-arrow.svg";

interface OffersGeoProps {
  countries: string[];
}

export const OffersGeo: React.FC<OffersGeoProps> = ({ countries }) => {
  if (countries.length > 3) return <PopoverOffersGeo countries={countries} />;

  return <DefaultOffersGeo countries={countries} />;
};

const DefaultOffersGeo: React.FC<OffersGeoProps> = ({ countries }) => {
  return (
    <div className="flex select-none items-center gap-[6px]">
      {countries.map((country, i) => (
        <img
          key={i}
          src={`https://flagcdn.com/48x36/${country.toLowerCase()}.png`}
          className="h-[16px] w-[21px]"
        />
      ))}
    </div>
  );
};
const PopoverOffersGeo: React.FC<OffersGeoProps> = ({ countries }) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className="group flex cursor-pointer items-center gap-1">
          <DefaultOffersGeo countries={countries.slice(0, 3)} />
          <Arrow className="transition-transform group-data-[state=open]:-rotate-90" />
        </div>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="z-20 w-[260px] rounded bg-white p-5 shadow-200 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade"
          sideOffset={5}
        >
          <div className="flex select-none flex-wrap items-center gap-[6px]">
            {countries.slice(3).map((country, i) => (
              <img
                key={i}
                src={`https://flagcdn.com/48x36/${country.toLowerCase()}.png`}
                className="h-[16px] w-[21px]"
              />
            ))}
          </div>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
