import  { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../MainComponent/Contact.jsx";
import "../index.css";
import logo from "../assets/logo/logo1.png";

import footericon2 from "../assets/Image/footericon2.png";

import footericon4 from "../assets/Image/footericon3.png";
import footericon5 from "../assets/Image/footericon4.png";
import footericon7 from "../assets/Image/footericon5.png";

import { IoIosArrowDropup } from "react-icons/io";

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContactPopup = () => {
    setIsContactOpen(!isContactOpen);
  };

  const scrollToTop = () => {
    const duration = 1000; // Duration in milliseconds (1 second)
    const start = window.scrollY; // Starting scroll position
    const startTime = performance.now(); // Time when the scroll starts

    // Perform the scroll gradually
    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Progress between 0 and 1

      // Scroll to the top with smooth easing
      window.scrollTo(0, start - start * progress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll); // Keep animating until 100% progress
      }
    };

    requestAnimationFrame(animateScroll); // Start the smooth scroll animation
  };

  const currentYear = new Date().getFullYear();

  return (
    <>

<footer className="bg-[#000000] z-10 rounded-t-3xl gap-5 relative pb-20">
  <div className="mx-auto w-full p-4 py-6 lg:py-8 z-10 gap-3 flex flex-col justify-center items-center">
    <div className="flex flex-wrap justify-between items-center md:items-start w-full p-6 text-white z-10">
      
      {/* Left Section */}
      <div className="flex flex-col gap-6 md:gap-4 max-w-full sm:max-w-[100%] pb-2 lg:max-w-[30%] text-center md:text-left">
        <div className="flex flex-col items-start justify-center">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-14" alt="Orbit Token Logo" />
          </Link>
        </div>
        <p className="text-[#DFDFDF]">
          © 2025 UVT CINEMA. Revolutionizing entertainment with blockchain, VR/AR, and NFTs.
        </p>

        {/* Social Media Icons */}
      </div>

      <div className="flex flex-col items-center md:items-start ">
          <p className="mb-4 font-semibold text-sm uppercase bg-button-custom-gradient bg-clip-text text-transparent">
            Get in Touch – Contact Us via Email
          </p>

          <div className="flex items-center border border-gray-300 rounded-xl p-1"> 
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 py-2 rounded-md font-Montserrat"
            />
            <button
              onClick={() => alert('Email Sent!')} 
              className="px-6 py-2  text-white rounded-md"
              style={{background: "radial-gradient(109.8% 109.8% at 0% 7.5%, #FFDD70 0%, #FFC300 32.9%, #C29400 61.9%, #453804 100%)"}}
            >
              Send
            </button>
          </div>
        </div>

      {/* Links Section */}
      <div className="flex flex-wrap justify-center md:justify-end w-full md:w-auto gap-8 md:gap-8 lg:gap-12 xl:gap-16 pt-10 md:pt-0 mt-10 sm:mt-0">
        
        {/* Get in Touch Section */}
        

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <p className="font-bold">Social Media Link</p>
          <div className="flex flex-row justify-center tablet:justify-center md:justify-start space-x-3 md:space-x-6">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={footericon2} alt="Instagram" className="w-10 transition-transform hover:scale-110 duration-300" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={footericon7} alt="Telegram" className="w-10 transition-transform hover:scale-110 duration-300" />
            </a>
            <a href="mailto:support@or" target="_blank" rel="noopener noreferrer">
              <img src={footericon4} alt="Email" className="w-10 transition-transform hover:scale-110 duration-300" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={footericon5} alt="Twitter" className="w-10 transition-transform hover:scale-110 duration-300" />
            </a>
          </div>
        </div>

        {/* Pages Section */}
        <div className="flex flex-col items-center md:items-start">
          <p className="mb-4 font-semibold text-lg uppercase bg-button-custom-gradient bg-clip-text text-transparent">
            Pages
          </p>
          <ul className="text-gray-400 font-medium flex flex-col gap-3">
            <li className="text-center md:text-left"><a href="/">Whitepaper </a></li>
            <li className="text-center md:text-left"><a href="#terms">Tokenomics</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="w-full h-1 justify-center items-center align-middle"
      style={{ background: "linear-gradient(91.25deg, #000000 0%, #FFC300 50%, #000000 100%)" }}></div>

    {/* Bottom Section */}
    <div className="flex flex-row items-center justify-between w-full py-4">
      <span className="text-sm sm:text-center text-[#ffffff]">
        Copyright UVT Cinema   © {currentYear}
      </span>

      <div className="flex flex-row items-center gap-10">
        <ul className="text-gray-400 font-medium flex flex-row gap-10">
          <li><a href="/">Terms & Conditions </a></li>
          <li><a href="#terms">Privacy Security</a></li>
        </ul>
        <button onClick={scrollToTop}>
          <IoIosArrowDropup className="w-10 h-10" />
        </button>
      </div>
    </div>
  </div>
</footer>

{isContactOpen && (
  <div className="fixed w-full h-full overflow-x-hidden inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div className="p-4 relative rounded-lg sm:w-[99%] justify-center h-full flex flex-row">
      <Contact />
      <button
        onClick={toggleContactPopup}
        className="mt-4 h-10 px-4 py-2 absolute top-5 right-0 w-[10%] sm:w-[5%] bg-red-500 text-white rounded flex justify-center items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
)}




      {isContactOpen && (
        <div className="fixed w-full h-full overflow-x-hidden  inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center ">
          <div className=" p-4 relative rounded-lg sm:w-[99%] justify-center h-full flex flex-row  ">
            <Contact />
            <button
  onClick={toggleContactPopup}
  className="mt-4 h-10 px-4 py-2 absolute top-5 right-0 w-[10%] sm:w-[5%] bg-red-500 text-white rounded flex justify-center items-center"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>

          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
