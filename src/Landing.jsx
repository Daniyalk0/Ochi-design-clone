import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

function Landing() {
  const [speed, setSpeed] = useState('');

  useEffect(() => {
    const handleSpeed = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth > 768) {
        setSpeed(-0.3);
      } else if (innerWidth <= 768) {
        setSpeed(2);
      }
    };

    handleSpeed(); // Call the function once to set the initial speed

    window.addEventListener("resize", handleSpeed); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleSpeed); // Clean up the event listener on component unmount
    };
  }, []);
  return (
    <div
      className="bg-zinc-900 h-screen w-full pt-2 mobile_l:pt-[40px]"
      data-scroll
      data-scroll-speed={speed}
      data-scroll-section
    >
      <div className="textStructure mt-[13vw]  px-20 tablet:px-6">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((text, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex ">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[7.5vw] h-[5.3vw] bg-red-500 relative top-[1.1vw] mr-[1vw] rounded-md"
                ></motion.div>
              )}
              <h1 className="font-custom text-[9vw] leading-[6.6vw] ">
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-[80px] flex justify-between items-center py-5 px-20 tablet:flex-col tablet:items-start tablet:px-6 tablet:gap-10 ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((text, index) => (
          <p
            className="text-md font-light leading-none tracking-tight"
            key={index}
          >
            {text}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 tablet:px-4 py-2 rounded-full border-[1px] border-zinc-600 font-light text-sm uppercase text-md">
            Start the Project
          </div>
          <div className="w-10 h-10 rounded-full border-[1px] border-zinc-600 flex items-center justify-center rotate-[45deg] tablet:hidden">
            <FaLongArrowAltUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
