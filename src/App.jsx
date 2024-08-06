import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./Landing";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const [locomotiveScroll, setLocomotiveScroll] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width > 768) {
        if (!locomotiveScroll) {
          const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
          });
          setLocomotiveScroll(scroll);
        }
      } else {
        if (locomotiveScroll) {
          locomotiveScroll.destroy();
          setLocomotiveScroll(null);
        }
      }
    };

    handleResize(); // Call it initially to set up LocomotiveScroll if needed
    window.addEventListener('resize', handleResize); // Add event listener for resize

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy(); // Clean up the LocomotiveScroll instance on unmount
      }
      window.removeEventListener('resize', handleResize); // Clean up the resize event listener
    };
  }, [locomotiveScroll]);

  return (
    <div className="min-h-screen w-full text-white bg-zinc-900 overflow-hidden" data-scroll-container>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
