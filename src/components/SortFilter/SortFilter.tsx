import React from "react";
import Popup from "reactjs-popup";

import { ReactComponent as Arrow } from "assets/icons/select-arrow.svg";
import { ReactComponent as UpDownArrows } from "assets/icons/up-down-arrows.svg";

import "reactjs-popup/dist/index.css";
import "./style.css";
import { Radio } from "components";

interface SortFilterProps {
  options: string[];
  selectedOption: string;
  onChange: (label: string) => void;
}

export const SortFilter: React.FC<SortFilterProps> = ({
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <Popup
      trigger={
        <button className="group flex items-baseline gap-2 rounded-lg px-3 py-2 text-sm text-text-400 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)] 3xl:text-xl">
          <UpDownArrows />
          По возрастанию цены
          <Arrow className="text-[#B9B9C1] group-hover:text-text-400" />
        </button>
      }
      position="bottom center"
      offsetY={8}
      className="SortFilter-popup"
    >
      <div className="flex flex-col gap-3">
        {options.map((label) => {
          console.log(selectedOption === label);

          return (
            <Radio
              key={label}
              name="price"
              checked={selectedOption === label}
              label={label}
              onChange={() => onChange(label)}
            />
          );
        })}
      </div>
    </Popup>
  );
};
