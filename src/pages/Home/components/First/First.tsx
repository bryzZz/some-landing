import React, { useEffect, useRef, useState } from "react";
import { Scene } from "react-scrollmagic";

import { FirstSlide } from "./FirstSlide";
import { SecondSlide } from "./SecondSlide";
import { twMerge } from "tailwind-merge";

export const First: React.FC = () => {
  const [slide, setSlide] = useState(0);
  const comp = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide(1);
    }, 10000);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    const el = comp.current;

    if (!el) return;

    let startX = 0;
    let curX = 0;

    const handleMouseDown = (e: MouseEvent) => {
      startX = e.screenX;
    };
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.changedTouches[0].screenX;
    };
    const handleMouseMove = (e: MouseEvent) => {
      curX = e.screenX;

      if (startX) {
        if (startX - curX > 100) {
          setSlide(1);
        }
        if (curX - startX > 100) {
          setSlide(0);
        }
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      curX = e.changedTouches[0].screenX;

      if (startX) {
        if (startX - curX > 100) {
          setSlide(1);
        }
        if (curX - startX > 100) {
          setSlide(0);
        }
      }
    };

    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("touchmove", handleTouchMove);

    return () => {
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section
      id="#bubbles-5"
      className="base-container mb-28 flex justify-between gap-24 lg:mb-32"
    >
      <Scene duration={1500} triggerElement="#bubbles-5" triggerHook="onEnter">
        {(progress: number) => (
          <div
            className="absolute left-[50vw] h-12 w-12 rounded-full bg-white"
            style={{
              top: 150 + progress * -300,
            }}
          />
        )}
      </Scene>

      <div className="relative select-none pb-14 md:pb-8" ref={comp}>
        <FirstSlide show={slide === 0} />
        <SecondSlide show={slide === 1} />

        <div className="absolute bottom-0 left-[50%] flex translate-x-[-50%] items-center gap-7">
          {new Array(2).fill(0).map((_, i) => (
            <div
              className={twMerge(
                "h-[10px] w-[10px] cursor-pointer rounded-full bg-[#B8C4D2]",
                slide === i &&
                  "bg-primary-100 outline outline-2 outline-offset-4 outline-primary-100"
              )}
              onClick={() => setSlide(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
