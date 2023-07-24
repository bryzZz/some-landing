import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface TabsProps {
  tabs: string[];
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  value,
  onChange,
  className,
}) => {
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderLeft, setSliderLeft] = useState(0);

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current[value];

      setSliderLeft(currentTab?.offsetLeft ?? 0);
      setSliderWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [value]);

  return (
    <div
      className={twMerge(
        `heading-6 relative grid auto-cols-fr grid-flow-col rounded-[35px] border-2`,
        className
      )}
    >
      {tabs.map((label, i) => (
        <button
          key={i}
          ref={(el) => (tabsRef.current[i] = el)}
          className="z-20 px-2 py-3 text-sm font-bold text-text-400 md:px-11 md:py-4 md:text-[15px] 3xl:text-xl"
          onClick={() => onChange(i)}
        >
          {label}
        </button>
      ))}
      <span
        className="absolute -bottom-[2px] -top-[2px] block rounded-[35px] bg-[#FDFDFD] shadow-200 transition-all duration-300"
        style={{ left: sliderLeft - 2, width: sliderWidth + 4 }}
      />
    </div>
  );
};
