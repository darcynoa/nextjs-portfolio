"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const hero = useRef(null);
  const image = useRef(null);
  const circle = useRef(null);
  const header = useRef(null);
  const blurb = useRef(null);

  useGSAP(
    () => {
      gsap.set(circle.current, {
        y: "85%",
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      });

      gsap.set(image.current, {
        clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 0% 100%)",
      });

      gsap.set([header.current, blurb.current], {
        opacity: 0,
        y: "7rem",
      });

      let tl = gsap
        .timeline()
        .to(circle.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          y: 0,
          delay: 0.2,
          duration: 4,
        })
        .to(image.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          delay: 0.2,
          ease: "expo.in",
        })
        .to(header.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power1.inOut",
        })
        .to(blurb.current, {
          y: 0,
          opacity: 1,
          delay: -0.8,
          duration: 1,
          ease: "power1.inOut",
        });
    },
    { scope: hero }
  );

  return (
    <section ref={hero}>
      <div className="relative ml-[0%] 2xl:ml-[20%] flex flex-col justify-center items-center pt-[10rem] md:pt-[6rem] lg:pt-[0rem]">
        <div
          ref={circle}
          className="absolute bottom-[1%] right-[5%] md:right-[15%] lg:right-[27%] w-[84%] md:w-[70%] lg:w-[44%] aspect-square bg-accent rounded-full -z-10"
        ></div>
        <Image
          ref={image}
          src="/images/homepage/hero-image-circle-background.png"
          alt="The hero image of my portfolio"
          width={673}
          height={820}
          className="w-[90%] md:w-[70%] lg:w-[47%] z-10"
        />
      </div>
      <div className="relative pl-[2rem] lg:pl-[21.2rem] z-10 mb-[4.5rem] flex flex-col gap-[10rem] -mt-[4rem] md:-mt-[14rem] 2xl:-mt-[28rem]">
        <h1
          ref={header}
          className="font-sans font-bold text-[5rem] md:text-[7rem] 2xl:text-[12rem] uppercase tracking-[1.5px] leading-tight"
        >
          Dope web experiences
        </h1>
        <p
          ref={blurb}
          className="font-sans text-[1.6rem] lg:text-[2rem] tracking-[1.5px] leading-tight w-[80%] md:w-[60%] lg:w-[60rem] translate-y-28"
        >
          It&apos;s my passion to create smooth and visually appealing web
          experiences, check some of them out below!
        </p>
      </div>
    </section>
  );
}
