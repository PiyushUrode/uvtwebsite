import { memo, useCallback, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/logo/logo1.png";

// Lazy load video
const LazyVideo = lazy(() => import("./Lazyvideo"));

const S1Hero = memo(function S1Hero() {
  const navigate = useNavigate();

  // Optimize navigation functions
  const handleNavigate = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
    <div className="relative min-h-screen h-auto w-full">
      {/* Lazy Loaded Video */}
      <Suspense fallback={<div className="w-full h-screen bg-black" />}>
        <LazyVideo />
      </Suspense>

      <div
        id="home"
        className="relative z-10 min-h-screen flex items-center justify-center py-10 flex-col gap-5 md:gap-7"
      >
        <div className="hidden md:block w-2/5 pl-16 flex">
          <img src={img1} alt="Logo" className="w-20" loading="lazy" />
        </div>

        <div className="w-fit text-center md:text-left pb-20 md:pb-36">
          <div className="relative text-center px-20 flex flex-col gap-0 md:gap-4">
            <h1
              className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-Ethnocentric font-semibold text-black leading-tight md:leading-relaxed"
              style={{
                WebkitTextStroke: "1px #FFC300",
                WebkitTextFillColor: "black",
              }}
            >
              UTV CINEMA
            </h1>

            <p className="text-md sm:text-md lg:text-md text-center font-normal lg:px-10 leading-relaxed text-black font-semibold">
              Revolutionizing the Metaverse & VR <br /> Economy
            </p>

            <div className="flex flex-row justify-center sm:flex-row gap-5 lg:gap-10">
              {/* Buy Now Button */}
              <button
                className="relative px-14 lg:px-20 py-4 sm:py-5 font-gilroy font-bold text-white rounded-md hover:animate-popup-once bg-[radial-gradient(109.8%_109.8%_at_0%_7.5%,_#FFDD70_0%,_#FFC300_32.9%,_#C29400_61.9%,_#453804_100%)]"
                onClick={() => handleNavigate("/presale")}
              >
                <span className="absolute inset-0 p-px flex items-center justify-center rounded-md">
                  <span className="absolute inset-0 flex items-center justify-center rounded-md">
                    Buy Now
                  </span>
                </span>
              </button>

              {/* WhitePaper Button */}
              <button
                className="relative px-14 lg:px-20 py-4 sm:py-5 font-gilroy font-bold text-white border border-[#999999] rounded-md hover:animate-popup-once"
                onClick={() => handleNavigate("/presale")}
              >
                <span className="absolute inset-0 p-px flex items-center justify-center rounded-md">
                  <span className="absolute inset-0 flex items-center justify-center rounded-md bg-[radial-gradient(109.8%_109.8%_at_0%_7.5%,_#FFDD70_0%,_#FFC300_32.9%,_#C29400_61.9%,_#453804_100%)] text-transparent bg-clip-text">
                    WhitePaper
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default S1Hero;
