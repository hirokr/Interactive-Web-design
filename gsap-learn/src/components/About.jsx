"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import AnimatedTitle from "./AnimatedTitle";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mt-36 mb-8 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Well Come to Zentry
        </h2>
        <AnimatedTitle
          title=" Disc<b>o</b>ver the world's <br /> L<b>A</b>rgest shared adventure"
          containerClass="mt-5 !text-black text-center"
        />
        <div className="about-subtext">
          <p>The Game of Games begins-yout life, now an epic MMORPG</p>
          <p>Zentry units player from countless games and platforms</p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute top-0 left-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
