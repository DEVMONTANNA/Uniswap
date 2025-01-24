import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <div className="bg-[#ffffff] border-b border-[#22222212] firsthead  p-[20px] flex, justify-center, text-center items-center  ">
          <h6 className="font-[Basel, sans-serif font-medium text-[#7d7d7d] text-[15px]">
            UK disclaimer: This web application is provided as a tool for users
            to interact with the Uniswap Protocol on their own initiative, with
            no endorsement or recommend...
            <a className=" text-[#ee55f1]" href="https://wallet.uniswap.org/ ">
              Read more
            </a>
          </h6>
        </div>
      </header>
    </div>
  );
};

export default Header;
