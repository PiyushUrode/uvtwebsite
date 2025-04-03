import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import cinema1 from "../assets/cinema/cinema1.png";
import cinema2 from "../assets/cinema/cinema2.png";
import cinema3 from "../assets/cinema/cinema3.png";
import cinema4 from "../assets/cinema/cinema4.png";
import cinema5 from "../assets/cinema/cinema5.png";
import cinema6 from "../assets/cinema/cinema6.png";

const cinemaData = [
  {
    img: cinema1,
    title: "Impressive Movie Premieres",
    details: [
      "Host virtual red-carpet events and movie premieres.",
      "UVT can be used to buy tickets and access premium content.",
    ],
  },
  {
    img: cinema2,
    title: "Virtual Film Festivals",
    details: [
      "Organize film festivals in the metaverse.",
      "Allow global participation with NFT-based ticketing.",
    ],
  },
  {
    img: cinema3,
    title: "Exclusive Director's Cut",
    details: [
      "Access director’s cut and special features.",
      "Use blockchain for secure content delivery.",
    ],
  },
  {
    img: cinema4,
    title: "Interactive Movie Experiences",
    details: [
      "Choose different story paths in real-time.",
      "Create personalized cinematic adventures.",
    ],
  },
  {
    img: cinema5,
    title: "Celebrity Meet & Greets",
    details: [
      "Join live Q&A sessions with actors & directors.",
      "Get exclusive signed NFTs & collectibles.",
    ],
  },
  {
    img: cinema6,
    title: "VR Drive-in Theaters",
    details: [
      "Experience open-air cinema in virtual worlds.",
      "Invite friends & watch together in real-time.",
    ],
  },
];

const S8CinemaHall = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center usecase2 p-6 md:p-16">
      {/* Section Heading */}
      <div className="w-[80%] text-center" id="arvr" data-aos="fade-up">
        <h2 className="font-semibold text-lg text-[#FFD700]">VR/AR Cinema Hall</h2>
        <p className="text-white font-bold text-2xl md:text-3xl leading-relaxed">
          The Future of Movie Entertainment
        </p>
      </div>

      {/* Responsive Grid Layout for Cinema Cards */}
      <div id="cinema" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-[80%]">
        {cinemaData.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 200} // Delays each card appearing
          >
            {/* Image Section */}
            <img src={item.img} alt={item.title} className="w-full rounded-md" />

            {/* Content Section */}
            <div className="p-4 text-white bg-[#000000] rounded-xl">
              <h5 className="text-lg font-bold">{item.title}</h5>
              <ul className="text-[#CCCCCC] text-sm mt-2 space-y-1">
                {item.details.map((point, i) => (
                  <li key={i} data-aos="fade-up" data-aos-delay={i * 400}>
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default S8CinemaHall;
