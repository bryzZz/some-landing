import React, { useLayoutEffect, useRef } from "react";

import { Link } from "react-router-dom";
import gsap from "gsap";

import { ReactComponent as Shild } from "assets/icons/shild.svg";
import BG from "assets/images/slides/first/BG.png";

import Img1 from "assets/images/slides/second/Proggress_bar_by_Devoart_Transparent.png";
import Img2 from "assets/images/slides/first/Mask group (4).png";
import Img3 from "assets/images/slides/second/3 951.png";
import Img4 from "assets/images/slides/second/untitled3.png";
import Img5 from "assets/images/slides/second/cash.png";
import Img6 from "assets/images/slides/second/01 Online Shopping 4.png";

interface SecondSlideProps {
  show: boolean;
}

export const SecondSlide: React.FC<SecondSlideProps> = ({ show }) => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // const tl = gsap.timeline({
      // scrollTrigger: {
      //   trigger: ".First__bg",
      // },
      // });

      if (show) {
        gsap.from(".heading-1", {
          ease: "power1",
          opacity: 0,
          xPercent: -10,
          duration: 1,
        });
        gsap.from(".sub-heading-1", {
          ease: "power1",
          opacity: 0,
          xPercent: -5,
          duration: 1,
        });
        gsap.from(".btn-primary", {
          ease: "power1",
          opacity: 0,
          x: "-5%",
          duration: 1,
        });

        gsap.to(".img1", { opacity: 1, duration: 0 });
        gsap.to(".img1", {
          ease: "power1",
          duration: 1,
          left: "17.318%",
          top: "8.588%",
          width: "89.571%",
          height: "70.457%",
        });
        gsap.to(".img2", { opacity: 1, duration: 0 });
        gsap.to(".img2", {
          ease: "power1",
          duration: 1,
          left: "-10.966%",
          top: "28.289%",
          width: "53.196%",
          height: "29.001%",
        });

        gsap.to(".img3, .img4, .img5, .img6", {
          delay: 0.8,
          ease: "power1",
          duration: 1,
          opacity: 1,
          scale: 1,
          stagger: 0.3,
        });

        gsap.to(".img3", {
          duration: 2,
          y: 20,
          repeat: -1,
          ease: "power1.inOut",
          yoyo: true,
        });
        gsap.to(".img4", {
          duration: 3,
          y: -20,
          repeat: -1,
          ease: "power1.inOut",
          yoyo: true,
        });
        gsap.to(".img5", {
          duration: 3,
          y: 30,
          repeat: -1,
          ease: "power1.inOut",
          yoyo: true,
        });
        gsap.to(".img6", {
          duration: 3,
          y: -10,
          repeat: -1,
          ease: "power1.inOut",
          yoyo: true,
        });
      } else {
        gsap.to(".content", {
          ease: "power1",
          opacity: 0,
          duration: 1,
        });
      }
    }, comp);

    return () => ctx.revert();
  }, [show]);

  return (
    <div
      ref={comp}
      className="absolute left-0 top-0 flex flex-col-reverse items-center gap-12 md:grid md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] md:gap-3"
    >
      <div className="content text-center md:text-left">
        <div className="mb-4 inline-flex items-center gap-2 rounded-[35px] border border-[#EFEFEF] bg-text-100 pb-[9px] pl-[14px] pr-[23px] pt-[10px] backdrop-blur-sm">
          <Shild className="drop-shadow-[0px_2px_7px_rgba(255,143,0,0.50)]" />
          <span className="text-sm font-semibold text-text-300 lg:text-base">
            Надежный партнер
          </span>
        </div>
        <h1 className="heading-1 mb-5 md:max-w-[730px] 3xl:max-w-[819px]">
          Получайте прибыль от качественного трафика
        </h1>
        <p className="sub-heading-1 mb-10 max-w-[618px]">
          Персональные офферы, собственные инструменты, инсайд информация и
          связки для топов.
        </p>
        <Link to="/unauthorized/registration" className="btn-primary py-4">
          Регистрация
        </Link>
      </div>

      <div className="relative ml-[5%] mr-[16%] md:ml-0">
        <img className="bg opacity-0" draggable={false} src={BG} />

        <img
          className="img1 absolute left-[55.346%] top-[33.942%] h-[26.182%] w-[34.395%] opacity-0"
          draggable={false}
          src={Img1}
        />
        <img
          className="img2 absolute left-[55.506%] top-[61.593%] h-[16.486%] w-[34.227%] opacity-0"
          draggable={false}
          src={Img2}
        />
        <img
          className="img3 absolute left-[17.318%] top-[-6.639%] h-[22.292%] w-[20.183%] scale-[0.6] opacity-0"
          draggable={false}
          src={Img3}
        />
        <img
          className="img4 absolute left-[65%] top-[-11%] h-[26.044%] w-[19.533%] scale-[0.6] opacity-0"
          draggable={false}
          src={Img4}
        />
        <img
          className="img5 absolute left-[94.066%] top-[8.588%] h-[27.847%] w-[24.682%] scale-[0.6] opacity-0"
          draggable={false}
          src={Img5}
        />
        <img
          className="img6 absolute left-[49.208%] top-[61.850%] h-[34.388%] w-[25.791%] scale-[0.6] opacity-0"
          draggable={false}
          src={Img6}
        />
      </div>
    </div>
  );
};
