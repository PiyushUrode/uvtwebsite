import  {  memo } from "react";
import "../index.css";

import Button from "../MainComponent/Button";
import Token1 from "../assets/Image/Tokenimg.png";


const S4Tokenomics = memo(function S4Tokenomics() {
  return (
    <>


      <div
        className=" token flex flex-col items-center  relative  relative justify-center text-center pt-0 md:py-10"
        id="token"
      >
        <div className="w-full relative gap-10 flex flex-col  ">
          <div
            className="flex flex-col  items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-[#000000] py-10"
            id="token"
          >
        <div className="w-full ">
              
              <h2 className="font-semibold bg-text-custom-gradient items-center text-center  text-base  bg-clip-text text-transparent mt-4 ">
             TOKENOMICS
              </h2>
              <div className="flex justify-center items-center text-center ">
                <p className="text-[#ffffff] font-bold md:text-xl leading-relaxed w-full md:max-w-[80%] max-w-full  text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
                Powering the Future of Digital Entertainment
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center align-middle px-1 lg:px-10 ">
            <img
              src={Token1}
              loading="lazy"
              alt="Tokenomics"
              className="w-full max-w-5xl  transform transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div
            className="flex flex-row flex-wrap sm:flex-row items-center font-gilroy font-bold flex-wrap justify-center gap-0 sm:gap-4  mt-5 md:pt-0  "
            id="one"
          >
            <div className="   hover:animate-popup-twice  flex flex-col   sm:w-[30%] w-full  justify-center items-center align-middle "
              
              id="two" 
            >
              <Button leftText="TOKEN NAME" rightText="UVT CINEMA" />
            </div>
            <div className="   hover:animate-popup-twice      flex flex-col   sm:w-[30%] w-full  justify-center items-center align-middle        ">
              <Button leftText="SYMBOL" rightText="UVT" />
            </div>
            <div className="     hover:animate-popup-twice       flex flex-col   sm:w-[30%] w-full  justify-center items-center align-middle      ">
              <Button leftText="NETWORK" rightText="BEP 20" />
            </div>

            <div className="   hover:animate-popup-twice     flex flex-col   sm:w-[30%] w-full  justify-center items-center align-middle       ">
              <Button leftText="TOTAL SUPPLY" rightText="100 Million" />
            </div>

            <div className="   hover:animate-popup-twice    flex flex-col    sm:w-[30%] w-full  justify-center items-center align-middle        ">
              <Button leftText="DECIMAL" rightText="18 " />
            </div>

          </div>
        </div>
      </div>
    </>
  );
});

export default S4Tokenomics;
