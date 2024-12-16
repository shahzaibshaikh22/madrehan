import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const HeroSection = () => {
  let ref1 = useRef()
  let ref2 = useRef()
  let ref3 = useRef()
  let ref4 = useRef()
  useEffect(() => {
    
    const heroTl = gsap.timeline();
    gsap.fromTo(ref1.current, {y:"100px",delay:.1},{y:"0",delay:.1})
    gsap.fromTo(ref2.current, {y:"100px",delay:.2},{y:"0",delay:.2})
    gsap.fromTo(ref3.current, {y:"100px",delay:.3},{y:"0",delay:.3})
    gsap.fromTo(ref4.current, {y:"100px",delay:.4},{y:"0",delay:.4})
  }, []);



  return (
    <div className="w-full relative md:pt-24 pt-32 px-4 h-screen overflow-hidden bg-black">
      <div className="w-full h-full max-w-[1240px] mx-auto flex md:flex-row flex-col items-center">
      <div className="flex flex-1 h-full flex-col justify-center md:gap-8 gap-4 text-white">
        <h1 ref={ref1} className="text-4xl md:text-6xl font-semibold">
          Accelerate Business <br /> <span className="text-color">Growth</span>.
        </h1>
        <p ref={ref2} className="max-w-xl md:text-2xl text-md text-gray-300">
        MADCOM DIGITAL is a one-stop solution for designing, marketing, and developing business ideas in the digital arena.
        </p>
        <p ref={ref3} className="max-w-xl md:text-2xl text-md text-gray-300">
        We transform businesses, help build strong teams, and give life to creative technological ideas.
        </p>
        <div className="flex gap-2">
        <button ref={ref4} className="text-md ltspace text-color">
          FIND OUT NOW --
        </button>
        </div>
      </div>
      <div className="flex-1">
        <img src="./images/hero.svg" alt="" />
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
