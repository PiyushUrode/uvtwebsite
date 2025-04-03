import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderComponent = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (

    <>      
    
    <div className="relative w-full px-4 py-10 usecase1 mt-10 flex flex-col justify-center ">
      <div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={-40}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // pagination={{ clickable: true }}
        centeredSlides={true}
        breakpoints={{
          0: { slidesPerView: 1 }, // Ensures responsiveness on smaller screens
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        onSlideChange={(swiper) => {
          document.querySelectorAll(".swiper-slide").forEach((slide) => {
            slide.style.transform = "scale(0.8) translateY(20px)";
            slide.style.opacity = "0.7";
            slide.style.zIndex = "0";
          });

          const activeSlide = swiper.slides[swiper.activeIndex];
          activeSlide.style.transform = "scale(1.1) translateY(-10px)";
          activeSlide.style.opacity = "1";
          activeSlide.style.zIndex = "2";
        }}
      >
        {/* Slides */}
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center text-left p-10 w-[100%] slider2 h-[350px] bg-contain text-white my-10  shadow-custom-drop  rounded-xl">
            <p className="text-2xl font-bold mb-2">Event Hosting and Marketing:</p>
            <p className="text-sm">Organize concerts, expos, and product launches in the metaverse.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-start justify-center p-6 w-[100%] slider1 h-[350px] shadow-custom-drop my-10 text-white  rounded-xl">
            <p className="text-2xl font-bold mb-2">Virtual Real Estate:</p>
            <ul className="text-xs font-white w-full sm:w-1/2">
              <li>Buy, sell, and rent virtual land or properties.</li>
              <li>Develop personalized spaces like virtual homes, offices, art galleries, and entertainment zones.</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-end justify-center p-6 w-[100%] h-[350px] slider3 bg-contain shadow-custom-drop my-10 text-white  rounded-xl">
            <p className="text-2xl font-bold mb-2">Digital Commerce:</p>
            <ul className="text-xs font-white w-full sm:w-1/2">
              <li>Buy, sell, and rent virtual land or properties.</li>
              <li>Develop personalized spaces like virtual homes, offices, art galleries, and entertainment zones.</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>


               
          <div className="flex flex-col items-start justify-center p-6 w-[100%] slider5 h-[350px] shadow-custom-drop my-10 text-white  rounded-xl">
            <p className="text-2xl font-bold mb-2">Education and Training Centers:</p>
            <ul className="text-xs font-white w-full sm:w-1/2">
              <li>  Build VR classrooms for immersive learning experiences.
               </li>
              <li>  Use UVT to enroll in courses, purchase learning materials, or attend expert sessions.</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-start justify-center p-6 w-[100%] slider6 h-[350px] shadow-custom-drop my-10 text-white  rounded-xl">
            <p className="text-2xl font-bold mb-2">Gaming Integration:</p>
            <ul className="text-xs font-white w-full sm:w-1/2">
              <li>Develop VR/AR-based games with UVT as the in-game currency.
              </li>
              <li>  Enable players to trade game assets, skins, and collectibles.</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-end justify-center p-6 w-[100%] h-[350px] slider4 bg-contain  my-10 shadow-custom-drop text-white  rounded-xl">
            <p className="text-2xl font-bold mb-2">Virtual Workspaces and Collaboration</p>
            <ul className="text-xs font-white w-full sm:w-1/2">
              <li>Create VR meeting rooms for corporate events and remote team collaboration.
              </li>
              <li>  Use UVT for booking spaces or accessing premium features.</li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>

      {/* Custom Navigation Buttons */}
      <div className="relative w-full items-end   justify-end pr-20 flex gap-4">
        <button
          className="w-12 h-12 flex items-center justify-center swipper-circle   text-white rounded-full  transition"
          onClick={handlePrev}
        >
          <h1 className="text-2xl font-bold">← </h1>
        </button>
        <button
          className="w-12 h-12 flex items-center justify-center swipper-circle   text-white rounded-full transition"
          onClick={handleNext}
        >
 
          <h1 className="text-2xl font-bold">→ </h1>
        </button>
      </div>
    </div>

    </>

  );
};

export default SliderComponent;
