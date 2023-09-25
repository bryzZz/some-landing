import React, { useLayoutEffect, useRef } from "react";

import { Link } from "react-router-dom";
import gsap from "gsap";

import { ReactComponent as Shild } from "assets/icons/shild.svg";

import BG from "assets/images/slides/first/BG.png";
import Img1 from "assets/images/slides/first/Mask group.png";
import Img2 from "assets/images/slides/first/Mask group (1).png";
import Img3 from "assets/images/slides/first/Mask group (2).png";
import Img4 from "assets/images/slides/first/Mask group (3).png";
import Img5 from "assets/images/slides/first/Mask group (4).png";
import Img6 from "assets/images/slides/first/Icosahedron.png";
import Img7 from "assets/images/slides/first/untitled3.png";
import Img8 from "assets/images/slides/first/Other 01 19.png";
import Img9 from "assets/images/slides/first/Other 01 20.png";
import Img10 from "assets/images/slides/first/Other 01 18.png";
import Img11 from "assets/images/slides/first/Frame 1000001186.png";
import Img12 from "assets/images/slides/first/Frame 1000001188.png";
import { randomInteger } from "utils";

interface FirstSlideProps {
  show: boolean;
}

export const FirstSlide: React.FC<FirstSlideProps> = ({ show }) => {
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

        const tl = gsap.timeline();

        tl.from(".first-images > .first", {
          ease: "power1",
          delay: 1,
          duration: 0.5,
          scale: 1.7,
          opacity: 0,
          xPercent: -30,
          yPercent: -30,
          rotate: -15,
          transformOrigin: "0 0",
          stagger: 0.2,
        });

        tl.from(
          ".bg",
          {
            ease: "power1.out",
            duration: 0.6,
            clipPath: "inset(50% 0 50% 0)",
          },
          "-=0.2"
        );

        tl.from(
          ".img6, .img7",
          {
            ease: "power1",
            duration: 0.3,
            scale: 0.5,
            opacity: 0,
            stagger: 0.1,
          },
          "-=0.4"
        );

        tl.from(
          ".img8, .img9, .img10",
          {
            ease: "power1",
            duration: 0.5,
            scale: 0.5,
            opacity: 0,
            stagger: 0.2,
          },
          "-=0.2"
        );

        tl.from(
          ".img11, .img12",
          {
            ease: "power1",
            duration: 0.3,
            scale: 0.5,
            opacity: 0,
            stagger: 0.1,
          },
          "-=0.2"
        );

        gsap.to(".img6", {
          duration: 2,
          y: 20,
          repeat: -1,
          ease: "power1.inOut",
          yoyo: true,
        });
        gsap.to(".img7", {
          duration: 3,
          y: -20,
          repeat: -1,
          ease: "power1.inOut",
          yoyo: true,
        });
        gsap.to(".img8, .img9, .img10", {
          duration: 3,
          y: 30,
          repeat: -1,
          ease: "power1.inOut",
          yoyo: true,
        });
        gsap.to(".img11", {
          duration: 3,
          y: -10,
          repeat: -1,
          ease: "power1.inOut",
          yoyo: true,
        });
        gsap.to(".img12", {
          duration: 2,
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

        gsap.to(".bg, .first-images > .first", {
          ease: "power1",
          opacity: 0,
          duration: 1,
        });

        const tl = gsap.timeline();

        tl.to(
          ".img6, .img7",
          {
            ease: "power1",
            duration: 0.3,
            scale: 0.5,
            opacity: 0,
            stagger: 0.1,
          },
          "-=0.4"
        );

        tl.to(
          ".img8, .img9, .img10",
          {
            ease: "power1",
            duration: 0.5,
            scale: 0.5,
            opacity: 0,
            stagger: 0.1,
          },
          "-=0.2"
        );

        tl.to(
          ".img11, .img12",
          {
            ease: "power1",
            duration: 0.3,
            scale: 0.5,
            opacity: 0,
            stagger: 0.1,
          },
          "-=0.2"
        );
      }
    }, comp);

    return () => ctx.revert();
  }, [show]);

  // const hd = 6.4449;
  // const wd = 8.5932;
  // const initialX = 422.85;
  // const initialY = 398.62;
  // const width = 221.63;
  // const height = 221.63;

  // const xPercent = (initialX / wd).toFixed(3);
  // const yPercent = (initialY / hd).toFixed(3);
  // const wPercent = (width / wd).toFixed(3);
  // const hPercent = (height / hd).toFixed(3);

  // console.log(
  //   `left-[${xPercent}%] top-[${yPercent}%] w-[${wPercent}%] h-[${hPercent}%]`
  // );

  // console.log(
  //   `left: "${xPercent}%",
  //   top: "${yPercent}%",
  //   width: "${wPercent}%",
  //   height: "${hPercent}%",`
  // );

  return (
    <div
      ref={comp}
      className="flex flex-col-reverse items-center gap-12 md:grid md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] md:gap-3"
    >
      <div className="content text-center md:text-left">
        <div className="mb-4 inline-flex items-center gap-2 rounded-[35px] border border-[#EFEFEF] bg-text-100 pb-[9px] pl-[14px] pr-[23px] pt-[10px] backdrop-blur-sm">
          <Shild className="drop-shadow-[0px_2px_7px_rgba(255,143,0,0.50)]" />
          <span className="text-sm font-semibold text-text-300 lg:text-base">
            Надежный партнер
          </span>
        </div>
        <h1 className="heading-1 mb-5 md:max-w-[730px] 3xl:max-w-[819px]">
          Монетизируйте трафик по лучшим условиям
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
        <img
          className="bg [clip-path:inset(0%_0%_0%_0%)]"
          draggable={false}
          src={BG}
        />

        <div className="first-images">
          <img
            className="first absolute left-[12.647%] top-[21.123%] w-[76.5%]"
            draggable={false}
            src={Img1}
          />
          <img
            className="first absolute left-[12.692%] top-[33.399%] h-[45.309%] w-[19.68%]"
            draggable={false}
            src={Img2}
          />
          <img
            className="first absolute left-[34.169%] top-[33.399%] h-[45.309%] w-[19.485%]"
            draggable={false}
            src={Img3}
          />
          <img
            className="first absolute left-[55.346%] top-[33.942%] h-[26.182%] w-[34.395%]"
            draggable={false}
            src={Img4}
          />
          <img
            className="first absolute left-[55.506%] top-[61.593%] h-[16.486%] w-[34.227%]"
            draggable={false}
            src={Img5}
          />

          <img
            className="img6 absolute left-[8.352%] top-[-2.048%] h-[15.206%] w-[11.404%]"
            draggable={false}
            src={Img6}
          />
          <img
            className="img7 absolute left-[50.013%] top-[-12.289%] h-[20.636%] w-[15.477%]"
            draggable={false}
            src={Img7}
          />
          <img
            className="img8 absolute left-[81.433%] top-[-1.668%] h-[22.447%] w-[42.475%]"
            draggable={false}
            src={Img8}
          />
          <img
            className="img9 absolute left-[81.433%] top-[20.779%] h-[15.344%] w-[42.475%]"
            draggable={false}
            src={Img9}
          />
          <img
            className="img10 absolute left-[81.433%] top-[36.123%] h-[8.809%] w-[42.475%]"
            draggable={false}
            src={Img10}
          />
          <img
            className="img11 absolute left-[87.135%] top-[72.119%] h-[20.792%] w-[15.594%]"
            draggable={false}
            src={Img11}
          />
          <img
            className="img12 absolute left-[1.021%] top-[74.291%] h-[16.602%] w-[12.452%]"
            draggable={false}
            src={Img12}
          />
        </div>
      </div>
    </div>
  );
};
