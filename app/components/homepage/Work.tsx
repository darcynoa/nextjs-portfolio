"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  const work = useRef(null);
  const carousel = useRef<HTMLAnchorElement | null>(null);
  const workImage = useRef(null);
  const workLink = useRef<HTMLAnchorElement | null>(null);
  const workHeader = useRef(null);
  const blurbRow = useRef(null);
  const circleMotif = useRef(null);
  const workLinkUnderline = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        work.current,
        {
          opacity: 0,
          display: "none",
        },
        {
          opacity: 1,
          display: "flex",
          delay: 6,
          duration: 0.7,
          ease: "power3.inOut",
        }
      );

      const desktop = gsap.matchMedia();
      desktop.add("(min-width: 1024px)", () => {
        gsap.set(workHeader.current, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        });

        const workHoverTimeline = gsap
          .timeline()
          .to(
            workImage.current,
            {
              position: "absolute",
              width: "40%",
              height: "80%",
              borderRadius: 0,
              top: "9.5%",
              right: 0,
              duration: 0.7,
              ease: "power3.inOut",
            },
            "start"
          )
          .to(
            [carousel.current, blurbRow.current],
            {
              y: 100,
              duration: 0.7,
              ease: "power3.inOut",
            },
            "start"
          )
          .to(
            workHeader.current,
            {
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
              duration: 0.7,
              ease: "power3.inOut",
            },
            "start"
          )
          .to(
            circleMotif.current,
            {
              y: -100,
              duration: 0.7,
              ease: "power3.inOut",
            },
            "start"
          )
          .to(
            workLinkUnderline.current,
            {
              width: "100%",
              duration: 0.7,
              ease: "power3.inOut",
            },
            "start"
          );

        workHoverTimeline.pause();

        carousel.current!.addEventListener("mouseenter", () => {
          workHoverTimeline.play();
        });

        carousel.current!.addEventListener("mouseleave", () => {
          workHoverTimeline.reverse();
        });

        const workLinkTimeline = gsap.timeline().to(
          workLinkUnderline.current,
          {
            width: "100%",
            duration: 0.7,
            ease: "expo.inOut",
          },
          "start"
        );

        workLinkTimeline.pause();

        workLink.current!.addEventListener("mouseenter", () => {
          workLinkTimeline.play();
        });

        workLink.current!.addEventListener("mouseleave", () => {
          workLinkTimeline.reverse();
        });
      });
    },
    { scope: work }
  );

  return (
    <section
      ref={work}
      className="relative min-h-screen flex flex-col justify-center items-center"
    >
      {/* Progress bar */}
      <div className="w-fit flex lg:flex-col lg:absolute lg:top-[28`%] lg:right-[5rem] justify-between items-center gap-[1.6rem] pb-[6rem]">
        <div className="w-[0.6rem] md:w-[0.8rem] aspect-square rounded-full bg-white"></div>
        <div className="w-[0.6rem] md:w-[0.8rem] aspect-square rounded-full bg-white"></div>
        <div className="w-[0.6rem] md:w-[0.8rem] aspect-square rounded-full bg-white"></div>
      </div>
      <div
        ref={circleMotif}
        className="hidden lg:block w-[48.5rem] aspect-square bg-accent rounded-full absolute top-[27%] left-[35%]"
      ></div>
      {/* Animated carousel */}
      <div className="w-[90%] flex flex-col-reverse lg:flex-col">
        <h1
          ref={workHeader}
          className="title-secondary -mt-[1.6rem] md:-mt-[2.4rem] lg:translate-y-[300%] lg:text-center z-10"
        >
          Constellation Cat Cafe
        </h1>
        <Link
          ref={carousel}
          href="#test"
          className="w-[100%] aspect-[4/2] rounded-[2.1rem] self-center bg-[url('/images/homepage/ccc-bg.png')] bg-no-repeat bg-cover cursor-pointer relative lg:w-[75%]"
        >
          <Image
            ref={workImage}
            src="/images/homepage/ccc-hero.jpg"
            alt="The kitties are so cute there :)"
            width={2560}
            height={1707}
            className="object-cover aspect-[4/2] rounded-[2rem]"
          />
        </Link>
      </div>
      <div
        ref={blurbRow}
        className="flex justify-between items-center w-[90%] lg:w-[67%]"
      >
        <p className="font-sans text-[1.6rem] lg:text-[2rem] tracking-[1.5px] leading-tight pt-[2rem] w-[40ch] md:w-[50%]">
          A website redesign that caters to the vibe of a playful and cute cat
          cafe
        </p>
        <Link
          ref={workLink}
          className="uppercase text-[1.6rem] font-sans invisible md:visible"
          href={"#"}
        >
          View Project
          <hr ref={workLinkUnderline} className="border-accent w-[0%]" />
        </Link>
      </div>
    </section>
  );
}
