import React from "react";

function About() {
  return (
    <div className="w-full bg-[#CDEA68] py-20 rounded-t-3xl text-black px-20 tablet:px-10" data-scroll data-scroll-speed='.-15' data-scroll-section>
      <h1 className="font-[src/assets/NeueMontreal-Regular.ttf] text-[4vw]   leading-[4.5vw] tracking-tight ">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full border-t-[0.1vw] border-[#738828bd]  mt-20 pt-10 flex gap-5 tablet:flex-col">
        <div className="w-1/2 tablet:w-full ">
          <h1 className="text-[5vmax]">Our Approach: </h1>
          <button className="flex 
           gap-[3vw] items-center px-8 mt-10 py-4 bg-zinc-900 rounded-full text-white uppercase tablet:mt-[-0.1vw] tablet:py-[2vw] tablet:text-[2vw] ">
            Read More
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 bg-[#798b39] h-[70vh] rounded-2xl tablet:w-full"></div>
      </div>
    </div>
  );
}

export default About;
