import React, { useState } from "react";
import "./SubHeader.css";
import "./SubHeaderScript";

const SubHeader = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <header className="">
        <div className="  bg-[white] border-b h-[80px] border-[#22222212] flex  items-center  ">
          <div className=" respmenu flex w-[33%] justify-evenly   ">
            <div className="text-[#ee55f1] font-medium cursor-pointer ">
              UniSwap
            </div>
            <button onClick={() => setToggle(!toggle)}>
              <i className="menubarv fa-solid fa-bars "></i>
            </button>
            <div
              className={` w-[100%] flex justify-center  absolute top-[160px]  left-0 z-[50]  h-[140px] mt-[30px]  ${
                toggle ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col items-center bg-green-500 w-[100%]  ">
                <li className=" p-[5px] bg-[black]  text-[20px] font-[verdana] text-[white] w-[100%]  mt-[5px] text-center">
                  Trade
                </li>
                <li className=" p-[5px] bg-[black]  text-[20px] font-[verdana] text-[white] w-[100%]  mt-[5px] text-center">
                  Explore
                </li>
                <li className=" p-[5px] bg-[black]  text-[20px] font-[verdana] text-[white] w-[100%]  mt-[5px] text-center">
                  Pool
                </li>
              </ul>
            </div>
            <div className=" navmenu w-[50%]">
              <ul className="flex justify-around font-medium cursor-pointer  text-[#7d7d7d]">
                <li>Trade</li>
                <li>Explore</li>
                <li>Pool</li>
              </ul>
            </div>
          </div>
          <div className=" search w-[33%]">
            <input
              className="w-[90%] h-[40px] rounded-full pl-10 pr-10 border border-[#22222212]  active:border-blue-500 font-medium"
              placeholder="Search tokens"
            />
          </div>
          <div className="  flex  items-center   justify-evenly font-medium text-[black] w-[33%]">
            <button className=" gg pr-[10px] pl-[10px] h-[40px] border border-[#22222212] rounded-full">
              Get the app
            </button>
            <i className=" world1 cursor-pointer fa-solid fa-globe"></i>
            <button className=" connect bg-[#ffefff] text-[#fc72ff] pr-[10px] pl-[10px]  rounded-full">
              Connect
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SubHeader;
