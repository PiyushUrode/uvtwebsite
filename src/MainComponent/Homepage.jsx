import React, { Suspense } from "react";
import "../index.css";

// Lazily import components
const Hero = React.lazy(() => import("../Homepagesection/S1Hero.jsx"));
const About = React.lazy(() => import("../Homepagesection/S2About.jsx"));
const Usecase = React.lazy(() => import("../Homepagesection/S3Usecase.jsx"));
const CinemaHall = React.lazy(() => import("../Homepagesection/S8CinemaHall.jsx"));
const Tokenomics = React.lazy(() => import("../Homepagesection/S4Tokenomics.jsx"));
const Roadmap = React.lazy(() => import("../Homepagesection/S5Roadmap.jsx"));
const ContractAddress = React.lazy(() => import("../Homepagesection/S7Contractaddress.jsx"));

// Placeholder loader while content is loading
const Loader = () => <div className="text-center mt-10 text-white">Loading...</div>;

const Homepage = () => {
  return (
    <>
      {/* Load Hero Section first */}
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>

      {/* Other Sections Load Lazily */}
      <Suspense fallback={null}>
        <About />
        <Usecase />
        <CinemaHall />
        <Roadmap />
        <Tokenomics />
        <ContractAddress />
      </Suspense>
    </>
  );
};

export default Homepage;
