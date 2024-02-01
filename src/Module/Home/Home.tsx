import React, { useState } from "react";
import { motion as m } from "framer-motion";
import ReactTyped from "react-typed";
import { fadeAnimation, slideAnimation } from "../../Assets/motion";
import Image from "../../Assets/Images/image";
function Home() {
  const strArray = ["Developer", "Engineer", "Learner"];

  return (
    <div  id="AboutMe" className={`w-full min-h-screen bg-[#030014] flex items-center justify-around  text-white`}>
      <m.div
        {...slideAnimation("left")}
        className={`w-[38rem] min-h-screen bg-[#030014] m-10 flex items-start justify-center flex-col text-white`}
      >
       
        <p
          className={`font-extrabold text-white space-x-4 text-[4rem]    rounded-lg transition-all duration-75 ease-in   `}
        >
          {" "}
          I&apos;m
          <ReactTyped
            strings={strArray}
            typeSpeed={150}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-200"
            loop
            backSpeed={80}
            cursorChar="|"
            showCursor={true}
          />{" "}
        </p>
        <p className="w-[32rem] text-[1.5rem] font-medium leading-[32px] pt-[4px] pb-[3.2rem] text-white">
          I&apos;m a Software Engineer Skilled in Crafting Websites, Mobile
          Apps, and Software Systems. See My Projects and Abilities Here!.
        </p>
        
      </m.div>
      <m.div  {...slideAnimation("right")}
        className={`w-[40rem] h-screen  bg-[#030014]  flex items-center justify-center  p-20`}>
        <img src={Image?.mainIcon} alt="" />
      </m.div>
    </div>
  );
}

export default Home;
