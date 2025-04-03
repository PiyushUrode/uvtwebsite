import { useEffect, memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import about1 from "../assets/aboutimg/about1.png";
import "../index.css";
import group1 from "../assets/home2/Group1.png";
import group2 from "../assets/home2/Group2.png";
import group3 from "../assets/home2/Group3.png";
import group4 from "../assets/home2/Group4.png";

const S2About = memo(() => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen gap-20" id="about">
        {/* First Section */}
        <div className="flex flex-wrap justify-center items-center gap-3 px-6 py-8">
          {[
            { img: group1, title: "AR/VR Cinema Hall" },
            { img: group2, title: "Metaverse Expansion" },
            { img: group3, title: "Staking & Rewards" },
            { img: group4, title: "MLM Opportunities" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[22%] min-w-[150px]"
              data-aos="zoom-in"
              data-aos-delay={index * 200} // Staggered zoom effect
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-fit max-w-[120px] md:max-w-[100px]"
              />
              <p className="mt-2 text-center text-sm md:text-sm font-semibold">
                {item.title}
              </p>
            </div>
          ))}

          {/* Divider Line */}
          <div className="w-full flex justify-center items-center pt-10">
            <div
              className="w-1/2 items-center h-[1px] bg-gradient-to-r from-black via-yellow-500 to-black"
              data-aos="fade-in"
            ></div>
          </div>
        </div>

        {/* Second Section */}
        <div className="bg-black flex items-center px-4">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="text-left text-white" data-aos="fade-right">
              <h2 className="text-xl md:text-xl font-bold bg-clip-text text-transparent bg-text-custom-gradient">
                ABOUT
              </h2>
              <h5 className="mt-2 text-4xl font-semibold" data-aos="fade-up"  data-aos-easing="linear"
     data-aos-duration="1000">
                Revolutionizing Entertainment in the Metaverse
              </h5>
              <p className="mt-4 text-sm md:text-base leading-relaxed" data-aos="fade-up"  data-aos-easing="linear"
     data-aos-duration="2000">
                UVT CINEMA is a next-generation blockchain-powered platform that
                merges cinema, metaverse, and NFTs to create an immersive
                digital entertainment experience. By leveraging VR/AR
                technology, it brings futuristic entertainment to the masses.
              </p>
            </div>

            {/* Right Image */} 
            <div className="flex justify-center md:justify-center" data-aos="fade-left">
              <img src={about1} alt="About UVT" className="w-[80%] md:w-[80%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

S2About.displayName = "S2About";
export default S2About;
