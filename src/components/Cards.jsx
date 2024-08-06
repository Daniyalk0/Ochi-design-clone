import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-300 flex gap-5 items-center px-32 tablet:flex-col tablet:p-10">
      <div className="cardcontainer w-1/2 h-[50vh] tablet:w-[90vw] tablet:h-[100vh]">
        <div className="card relative w-full h-full  bg-[#004D43] rounded-xl flex justify-center items-center ">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-8 bottom-8 px-5 py-1 border-[1px] border-[#CDEA68] text-[#CDEA68] rounded-3xl">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] flex gap-5 tablet:h-[100vh] tablet:w-[100%]">
        <div className="card w-full h-full  bg-[#2a3e3b] rounded-xl flex justify-center items-center relative">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-8 bottom-8 px-5 py-1 border-[1px] border-[#CDEA68] text-[#CDEA68] rounded-3xl">
            &copy;2019-2022
          </button>
        </div>
        <div className="card w-full h-full  bg-zinc-800 rounded-xl flex justify-center items-center relative">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
            className="w-[50%]"
          />
          <button className="absolute left-8 bottom-8 px-5 py-1 border-[1px] border-[#CDEA68] text-[#CDEA68] rounded-3xl">
            &copy;2019-2022
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
