"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const nav = useRef(null);
  const navElement = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".nav-element",
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        delay: 6,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <nav
      ref={nav}
      className="fixed w-screen flex justify-between px-[2rem] lg:px-[6rem] pt-[5rem] lg:pt-[8rem]"
    >
      <Image
        className="nav-element"
        src="./icons/portfolio-logo.svg"
        alt="Portfolio Logo"
        width={38}
        height={25}
      />
      <ul
        ref={navElement}
        className="flex gap-[3rem] font-sans uppercase text-[1.6rem] lg:text-[2rem] tracking-[0.15rem] lg:tracking-[0.2rem]"
      >
        {navLinks.map((link) => (
          <li className="nav-element text-center" key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
