import React, { useState } from "react";
import * as d3 from "d3";
import { twMerge } from "tailwind-merge";

interface ChartProps {
  data: {
    year: number;
    value: number;
  }[];
  width: number;
  height: number;
  margin: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  dollars?: boolean;
  mainBg: string;
  secondBg: string;
}

const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 1,
});

export const Chart: React.FC<ChartProps> = ({
  data,
  width,
  height,
  margin,
  dollars = false,
  mainBg,
  secondBg,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(data.length - 3);

  // const areaData = [...data];
  // data = data.slice(1, data.length - 1);

  const startYear = data[0]?.year as number;
  const endYear = data[data.length - 1]?.year as number;
  const years = data.map(({ year }) => year);
  // const fakeData = structuredClone(data);
  // fakeData[0].year += 0.3;
  // fakeData[1].year += 0.1;
  // fakeData[2].year -= 0.1;
  // fakeData[3].year -= 0.3;

  const xScale = d3
    .scaleLinear([0 + 40, width - 40])
    .domain([startYear, endYear]);

  const yScale = d3.scaleLinear(d3.extent(data.map((d) => d.value)) as any, [
    height - margin.bottom,
    margin.top,
  ]);

  const bisect = d3.bisector<(typeof data)[number], unknown>(
    (d) => d.year
  ).right;

  const line = d3
    .line<(typeof data)[number]>()
    .x((d) => xScale(d.year))
    .y((d) => yScale(d.value))
    .curve(d3.curveMonotoneX);

  // const getDArea = () => {
  //   const startYear = areaData.at(0)?.year as number;
  //   const endYear = areaData.at(-1)?.year as number;

  //   const areaScale = d3.scaleLinear([0, width]).domain([startYear, endYear]);
  //   const areaYScale = d3.scaleLinear(
  //     d3.extent(areaData.map((d) => d.value)) as any,
  //     [height - margin.bottom, margin.top]
  //   );

  //   console.log(areaData);

  //   const area = d3
  //     .area<(typeof areaData)[number]>()
  //     .x((d) => areaScale(d.year))
  //     .y0(height)
  //     .y1((d) => areaYScale(d.value))
  //     .curve(d3.curveMonotoneX);

  //   return area(areaData)!;
  // };

  // const dArea = getDArea();

  const dLine = line(data)!;

  const handleMouseMove = function (this: any, e: React.MouseEvent) {
    const x0 = xScale.invert(d3.pointer(e, this)[0]);
    const index = bisect(data, x0, 0, data.length - 1);

    setActiveIndex(index);
  };

  return (
    <div className="relative flex items-center justify-end pr-20 pt-20">
      <div className="relative">
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="relative z-10 rounded-[36px] bg-opacity-30 backdrop-blur-xl"
          style={{
            backgroundColor: secondBg,
          }}
          onMouseMove={handleMouseMove}
        >
          <path fill="none" stroke="#fff" strokeWidth="2" d={dLine} />
          {/* <path fill="url(#MyGradient)" d={dArea} /> */}
          {/* <path fill="red" d={dArea} /> */}

          {data.map((d, i) => (
            <g
              key={i}
              className={twMerge("hidden", i === activeIndex && "block")}
            >
              <line
                stroke="#fff"
                strokeWidth={1}
                strokeDasharray="4"
                x1={xScale(d.year)}
                x2={xScale(d.year)}
                y1={margin.top}
                y2={margin.top + height - margin.bottom}
              />
              <circle
                cx={xScale(d.year)}
                cy={yScale(d.value)}
                r="7"
                fill="#1B1B1B"
                stroke="#FFF"
                strokeWidth={3}
              />
            </g>
          ))}

          <defs>
            <linearGradient id="MyGradient">
              <stop offset="0%" stopColor="rgba(254, 161, 86, 0.26)" />
              <stop offset="100%" stopColor="rgba(255, 198, 50, 0.00)" />
            </linearGradient>
          </defs>
        </svg>

        <div
          className="absolute z-20 block -translate-x-1/2 rounded-md bg-white bg-opacity-40 px-[6px] py-1 text-center text-[9px] font-semibold text-[#1B1B1B] backdrop-blur-xl"
          style={{
            left: xScale(data[activeIndex].year),
            top: yScale(data[activeIndex].value) - 35,
          }}
        >
          {dollars
            ? USDollar.format(data[activeIndex].value)
            : data[activeIndex].value}
        </div>

        <div
          className="absolute bottom-0 left-0 z-20 flex -translate-y-6 items-center justify-between px-6"
          style={{
            width,
          }}
        >
          {years.map((year) => (
            <span key={year} className="text-sm text-text-400">
              {year}
            </span>
          ))}
        </div>
      </div>

      <div
        className="absolute right-7 top-7 rotate-12 rounded-[36px]"
        style={{
          background: mainBg,
          width,
          height,
        }}
      />
    </div>
  );
};
