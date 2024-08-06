import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20 tablet:py-10">
      <div className="w-full px-20 tablet:px-8 border-b-[1px] border-[#ffffff71] pb-20 tablet:pb-10">
        <h1 className="text-5xl tracking-tight tablet:w-full tablet:text-3xl">Featured projects</h1>
      </div>
      <div className="px-20 tablet:px-5">
        <div className="cards w-full flex gap-10 tablet:gap-5 mt-[10vw] tablet:flex-col">
          <motion.div
            onHoverStart={() => {
              handleHover(0);
            }}
            onHoverEnd={() => {
              handleHoverEnd(0);
            }}
            className="cardcontainer w-1/2 tablet:w-full relative hover:scale-[0.95] transition-all duration-500 ease-in-out"
          >
            <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2  text-[#CDEA68] z-[9] text-7xl font-[NeueMontreal-Regular.ttf] leading-none tracking-tighter flex overflow-hidden">
              {" "}
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="bg-green-600 w-full h-full tablet:h-[50%] rounded-xl overflow-hidden">
              <img
                className="w-full h-full  bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => {
              handleHover(1);
            }}
            onHoverEnd={() => {
              handleHoverEnd(1);
            }}
            className="cardcontainer w-1/2  relative tablet:w-full  hover:scale-[0.95] transition-all duration-500 ease-in-out"
          >
            <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2  text-[#CDEA68] z-[9] text-7xl font-[NeueMontreal-Regular.ttf] leading-none tracking-tighter flex overflow-hidden">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="bg-green-600 w-full h-full rounded-xl overflow-hidden tablet:h-[50%] ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
