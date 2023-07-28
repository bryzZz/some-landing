import React, { useState } from "react";
import * as d3 from "d3";
import { eachYearOfInterval, endOfYear, format } from "date-fns";
import { twMerge } from "tailwind-merge";

interface ChartProps {
  data: {
    date: Date;
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
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(data.length - 2);

  const sortedData = data.sort((a, b) => (a.date > b.date ? 1 : -1));
  const bisectData = sortedData.slice(1, -1);

  const startDay = sortedData.at(0)?.date as Date;
  const endDay = sortedData.at(-1)?.date as Date;
  const years = eachYearOfInterval({ start: startDay, end: endDay });

  const xScale = d3.scaleTime([0, width]).domain([startDay, endDay]);
  const yearsScale = d3
    .scaleTime([margin.left, width - margin.right])
    .domain([startDay, endDay]);

  const yScale = d3.scaleLinear(
    d3.extent(sortedData.map((d) => d.value)) as any,
    [height - margin.bottom, margin.top]
  );

  const bisect = d3.bisector<(typeof data)[number], unknown>(
    (d) => d.date
  ).left;

  const line = d3
    .line<(typeof data)[number]>()
    .x((d) => xScale(d.date))
    .y((d) => yScale(d.value))
    .curve(d3.curveMonotoneX);

  const area = d3
    .area<(typeof data)[number]>()
    .x((d) => xScale(d.date))
    .y0(height)
    .y1((d) => yScale(d.value))
    .curve(d3.curveMonotoneX);

  const dLine = line(sortedData)!;
  const dArea = area(sortedData)!;

  const handleMouseMove = function (this: any, e: React.MouseEvent) {
    const x0 = xScale.invert(d3.pointer(e, this)[0]);
    const index = bisect(bisectData, x0, 1);

    setActiveIndex(index);
  };

  return (
    <div className="relative flex items-center justify-end pr-20 pt-20">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="relative z-10 rounded-[36px] bg-[#FFD953] bg-opacity-30 backdrop-blur-xl"
        onMouseMove={handleMouseMove}
      >
        {years.map((year) => (
          <g
            key={year.getFullYear()}
            transform={`translate(${yearsScale(year)},0)`}
          >
            <text
              x={(yearsScale(endOfYear(year)) - yearsScale(year)) / 2}
              y={height - 30}
              fill="currentColor"
              className="text-sm text-text-400"
            >
              {format(year, "yyyy")}
            </text>
          </g>
        ))}

        <path fill="none" stroke="#fff" strokeWidth="2" d={dLine} />
        <path fill="url(#MyGradient)" d={dArea} />

        {data.map((d, i) => (
          <g
            key={i}
            className={twMerge("hidden", i === activeIndex && "block")}
          >
            <line
              stroke="#fff"
              strokeWidth={1}
              stroke-dasharray="4"
              x1={xScale(d.date)}
              x2={xScale(d.date)}
              y1={margin.top}
              y2={margin.top + height - margin.bottom}
            />
            <circle
              cx={xScale(d.date)}
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
            <stop offset="0%" stop-color="rgba(254, 161, 86, 0.26)" />
            <stop offset="100%" stop-color="rgba(255, 198, 50, 0.00)" />
          </linearGradient>
        </defs>
      </svg>

      {data.map((d, i) => (
        <div
          key={i}
          className={twMerge(
            "absolute z-20 hidden -translate-x-1/2 rounded-md bg-white bg-opacity-40 px-[6px] py-1 text-center text-[9px] font-semibold text-[#1B1B1B] backdrop-blur-xl",
            i === activeIndex && "block"
          )}
          style={{
            left: xScale(d.date),
            top: yScale(d.value) + margin.top - 30,
          }}
        >
          {USDollar.format(d.value)}
        </div>
      ))}

      <div
        className="absolute right-7 top-7 rotate-12 rounded-[36px]"
        style={{
          background:
            "linear-gradient(221deg, #FFD953 0%, #FFD953 6.67%, #FFD752 13.33%, #FED551 20.00%, #FED150 26.67%, #FDCC4E 33.33%, #FCC74C 40.00%, #FBC14A 46.67%, #FABA48 53.33%, #F9B446 60.00%, #F8AF44 66.67%, #F7AA42 73.33%, #F6A641 80.00%, #F6A440 86.67%, #F6A240 93.33%, #F5A23F 100%)",
          width,
          height,
        }}
      />
    </div>
  );
};
