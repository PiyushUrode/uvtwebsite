import { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headroom from 'react-headroom';
import Navbar from "./MainComponent/Navbar";
import Footer from "./MainComponent/Footer";
import ScrollToTop from './MainComponent/ScrollToTop';
import Loader from './MainComponent/Loader';

import Contact from './MainComponent/Contact';

const Homepage = lazy(() => import('./MainComponent/Homepage'));
const Presale = lazy(() => import('./MainComponent/Presale'));

const App = () => {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloader(false);
    }, 800); // Reduced duration for better UX
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Headroom>
        <Navbar />
      </Headroom>
      <ScrollToTop />
      <div className="content">
        {preloader ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/presale" element={<Presale />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        )}
        <Footer />
      </div>
    </Router>
  );
};

export default App;