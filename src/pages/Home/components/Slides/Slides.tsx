import React, { useEffect, useReducer } from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Scene } from "react-scrollmagic";

import { useMediaQuery } from "hooks";

import SlidesBg from "assets/images/slides-bg.png";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Chart } from "components";
import { usePrevious } from "hooks/usePrevious";
import { useTranslation } from "react-i18next";

const data = [
  {
    year: 2020,
    value: 3151232,
  },
  {
    year: 2021,
    value: 3436896,
  },
  {
    year: 2022,
    value: 3612460,
  },
  {
    year: 2023,
    value: 6912683,
  },
];

const dataOffers = [
  {
    year: 2020,
    value: 127,
  },
  {
    year: 2021,
    value: 240,
  },
  {
    year: 2022,
    value: 463,
  },
  {
    year: 2023,
    value: 1549,
  },
];

const dataAds = [
  {
    year: 2020,
    value: 47,
  },
  {
    year: 2021,
    value: 87,
  },
  {
    year: 2022,
    value: 182,
  },
  {
    year: 2023,
    value: 264,
  },
];

const dataPartners = [
  {
    year: 2020,
    value: 2283,
  },
  {
    year: 2021,
    value: 6378,
  },
  {
    year: 2022,
    value: 9389,
  },
  {
    year: 2023,
    value: 11420,
  },
];

const getChartBounds = (matchesAlmostMd: boolean, matchesXl: boolean) => {
  let height = 248;
  let width = 272;

  if (matchesAlmostMd) {
    height = 288;
    width = 312;
  }

  if (matchesXl) {
    height = 315;
    width = 341;
  }

  return { width, height };
};

export const Slides: React.FC = () => {
  const { t } = useTranslation();

  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesAlmostMd = useMediaQuery("(min-width: 820px)");
  const matchesXl = useMediaQuery("(min-width: 1024px)");
  const previousMatches = usePrevious(matchesMd);
  const [_, forceUpdate] = useReducer((p) => p + 1, 0);

  const { width, height } = getChartBounds(matchesAlmostMd, matchesXl);

  const margin = {
    bottom: 120,
    top: 72,
    left: 20,
    right: 20,
  };

  const slidesText = t("home:slides.slidesText", {
    returnObjects: true,
  }) as string[];

  useEffect(() => {
    if (previousMatches !== matchesMd) {
      forceUpdate();
    }
  }, [matchesMd, previousMatches]);

  return (
    <section
      id="bubbles-1"
      className="relative mb-16 bg-auto bg-bottom bg-no-repeat min-[820px]:mb-24 lg:mb-28"
      style={{ backgroundImage: `url(${SlidesBg})` }}
    >
      <Scene duration={1500} triggerElement="#bubbles-1" triggerHook="onEnter">
        {(progress: number) => (
          <>
            <div
              className="absolute left-[10vw] h-16 w-16 rounded-full bg-[#FFDC60]"
              style={{
                top: 200 + progress * -200,
              }}
            />
            <div
              className="absolute left-[5vw] h-12 w-12 rounded-full bg-[#FAB8C4]"
              style={{
                top: 500 + progress * -400,
              }}
            />
            <div
              className="absolute right-[5vw] h-11 w-11 rounded-full bg-[#F7971D]"
              style={{
                top: 600 + progress * -400,
              }}
            />
          </>
        )}
      </Scene>

      <div className="small-container">
        <div className="max-w-2xl 3xl:max-w-[720px]">
          <Fade cascade direction="up" duration={500} damping={0.3} triggerOnce>
            <h2 className="heading-2 mb-5">
              {t("home:slides.title")}
              <span className="ml-[1px] inline-block h-[7px] w-[7px] rounded-full bg-primary-100" />
            </h2>
            <p className="sub-heading-2">{t("home:slides.subTitle")}</p>
          </Fade>
        </div>

        <Swiper
          autoplay={{
            delay: 5000,
          }}
          direction={matchesAlmostMd ? "vertical" : "horizontal"}
          autoHeight={matchesAlmostMd}
          slidesPerView={1}
          pagination={{ clickable: true }}
          height={matchesAlmostMd ? 500 : undefined}
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          className="slides"
          breakpoints={{
            2560: {
              height: 600,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex justify-center gap-8 min-[820px]:justify-between min-[820px]:pl-10 lg:pl-24 xl:gap-28">
              <div className="w-full flex-1 text-center min-[820px]:text-left">
                <Fade
                  cascade
                  direction="up"
                  duration={500}
                  damping={0.3}
                  triggerOnce
                >
                  <h3 className="mb-2 pt-[20%] text-[90px] leading-none text-text-400 lg:mb-6 lg:text-[115px] xl:text-[130px] 3xl:text-[150px]">
                    <span className="text-primary-100">$</span>20m+
                  </h3>
                  <p className="sub-heading-3 min-[820px]:max-w-xs">
                    {slidesText[0]}
                  </p>
                </Fade>
              </div>
              <div className="hidden flex-1 min-[820px]:block">
                <Zoom triggerOnce>
                  <Chart
                    data={data}
                    width={width}
                    height={height}
                    margin={margin}
                    dollars
                    mainBg="linear-gradient(221deg, #FFD953 0%, #FFD953 6.67%, #FFD752 13.33%, #FED551 20.00%, #FED150 26.67%, #FDCC4E 33.33%, #FCC74C 40.00%, #FBC14A 46.67%, #FABA48 53.33%, #F9B446 60.00%, #F8AF44 66.67%, #F7AA42 73.33%, #F6A641 80.00%, #F6A440 86.67%, #F6A240 93.33%, #F5A23F 100%)"
                    secondBg="rgba(255, 217, 83, 0.3)"
                  />
                </Zoom>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center gap-8 min-[820px]:justify-between min-[820px]:pl-10 lg:pl-24 xl:gap-28">
              <div className="w-full flex-1 text-center min-[820px]:text-left">
                <Fade
                  cascade
                  direction="up"
                  duration={500}
                  damping={0.3}
                  triggerOnce
                >
                  <h3 className="mb-2 pt-[20%] text-[90px] leading-none text-text-400 sm:text-[115px] lg:mb-6 lg:text-[130px] 3xl:text-[150px]">
                    300+
                  </h3>
                  <p className="sub-heading-3 min-[820px]:max-w-xs">
                    {slidesText[1]}
                  </p>
                </Fade>
              </div>
              <div className="hidden flex-1 min-[820px]:block">
                <Zoom triggerOnce>
                  <Chart
                    data={dataAds}
                    width={width}
                    height={height}
                    margin={margin}
                    mainBg="linear-gradient(241deg, #39C2FD 0%, #39C2FD 8.31%, #39C0FD 16.62%, #3ABEFD 24.93%, #3BBBFD 33.24%, #3CB7FD 41.55%, #3EB2FE 49.86%, #3FACFE 58.18%, #41A7FE 66.49%, #42A1FE 74.8%, #449CFF 83.11%, #4598FF 91.42%, #4695FF 99.73%, #4792FF 108.04%, #4791FF 116.35%, #4791FF 124.66%)"
                    secondBg="rgba(58, 193, 253, 0.3)"
                  />
                </Zoom>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center gap-8 min-[820px]:justify-between min-[820px]:pl-10 lg:pl-24 xl:gap-28">
              <div className="w-full flex-1 text-center min-[820px]:text-left">
                <Fade
                  cascade
                  direction="up"
                  duration={500}
                  damping={0.3}
                  triggerOnce
                >
                  <h3 className="mb-2 pt-[20%] text-[90px] leading-none text-text-400 sm:text-[115px] lg:mb-6 lg:text-[130px] 3xl:text-[150px]">
                    600+
                  </h3>
                  <p className="sub-heading-3 min-[820px]:max-w-xs">
                    {slidesText[2]}
                  </p>
                </Fade>
              </div>
              <div className="hidden flex-1 min-[820px]:block">
                <Zoom triggerOnce>
                  <Chart
                    data={dataOffers}
                    width={width}
                    height={height}
                    margin={margin}
                    mainBg="linear-gradient(258deg, #FF9D8F 0%, #FF9C8F 8.38%, #FF9B8C 16.76%, #FE9887 25.13%, #FD9381 33.51%, #FC8E78 41.89%, #FB876F 50.27%, #F98064 58.65%, #F87958 67.02%, #F6714D 75.4%, #F56B43 83.78%, #F4653B 92.16%, #F36134 100.53%, #F35E30 108.91%, #F25C2D 117.29%, #F25C2C 125.67%)"
                    secondBg="rgba(255, 157, 143, 0.3)"
                  />
                </Zoom>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center gap-8 min-[820px]:justify-between min-[820px]:pl-10 lg:pl-24 xl:gap-28">
              <div className="w-full flex-1 text-center min-[820px]:text-left">
                <Fade
                  cascade
                  direction="up"
                  duration={500}
                  damping={0.3}
                  triggerOnce
                >
                  <h3 className="mb-2 whitespace-nowrap pt-[20%] text-[70px] leading-none text-text-400 sm:text-[80px] lg:mb-6 lg:text-[110px] 3xl:text-[130px]">
                    10 000+
                  </h3>
                  <p className="sub-heading-3 min-[820px]:max-w-xs">
                    {slidesText[3]}
                  </p>
                </Fade>
              </div>
              <div className="hidden flex-1 min-[820px]:block">
                <Zoom triggerOnce>
                  <Chart
                    data={dataPartners}
                    width={width}
                    height={height}
                    margin={margin}
                    mainBg="linear-gradient(258deg, #FF747C 30.21%, #FF737C 38.69%, #FF717D 47.17%, #FF6D7D 55.65%, #FF677E 64.13%, #FF5F7F 72.61%, #FF5680 81.09%, #FF4C81 89.57%, #FF4183 98.05%, #FF3784 106.53%, #FF2E85 115.01%, #FF2686 123.49%, #FF2086 131.97%, #FF1C87 140.45%, #FF1A87 148.93%, #FF1987 157.41%)"
                    secondBg="rgba(255, 116, 124, 0.3)"
                  />
                </Zoom>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
