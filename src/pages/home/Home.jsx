import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import "./Home.css";
import img1 from "../../images/img_1.webp";
import img2 from "../../images/img_2.webp";
import img3 from "../../images/img_3.webp";
import img4 from "../../images/img_4.webp";
import img5 from "../../images/img_5.webp";
import img6 from "../../images/img_6.webp";
import img7 from "../../images/img_7.webp";
import marci from "../../images/marci.webp";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import OurServices from '../../components/OurServices';
import GetItSold from '../../components/GetitSold';
import Affiliations from '../../components/Affiliations';
import ContactPage from '../../components/ContactPage';
import MapSection from '../../components/MapSection';
import Footer from '../../components/Footer';
import SearchSection from '../../components/SearchSection';
const images = [img1, img2, img3, img4, img5, img6, img7];

// Fade-in variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
  <div className="relative min-h-screen overflow-hidden bg-white text-gray-800">
    <Helmet>
      <title>MARCI METZGER HOMES | Real State Agent</title>
      <meta
        name="description"
        content="Discover ChiroHealot’s holistic therapies for asthma. Heal naturally with structural realignment, massage, emotional release, and more."
      />
      <meta property="og:title" content="Asthma Solutions | ChiroHealot" />
      <meta
        property="og:description"
        content="Breathe easier with ChiroHealot's holistic asthma relief therapies. Explore our treatments for better respiratory health."
      />
      <meta property="og:url" content="https://asthmasolutionsph.com/" />
      <meta property="og:type" content="website" />
    </Helmet>
    <Navbar />

    <motion.section
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="relative z-10 h-screen overflow-hidden"
  >
    {/* Background Images */}
    <div className="absolute inset-0 z-0 w-full h-full">
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Slide ${idx}`}
            className={`w-full h-full object-cover ${
              idx === currentIndex ? "zoom-animated" : ""
            }`}
          />
        </div>
      ))}
    </div>

    {/* Arrows centered inside this section */}
    <button
      onClick={goToPrevious}
      className="absolute top-1/2 left-1 transform -translate-y-1/2 z-30 text-white text-4xl font-thin hover:scale-110 transition"
    >
      ‹
    </button>
    <button
      onClick={goToNext}
      className="absolute top-1/2 right-1 transform -translate-y-1/2 z-30 text-white text-4xl font-thin hover:scale-110 transition"
    >
      ›
    </button>

    {/* Overlay Content */}
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center bg-black/30 px-4">
      <h1 className="text-lg md:text-2xl tracking-wide uppercase mb-2 font-medium">
        Pahrump Realtor
      </h1>
      <h2 className="text-3xl md:text-5xl font-light leading-snug">
        MARCI METZGER - THE RIDGE REALTY GROUP
      </h2>

      {/* Dot Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-white/50"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>

  </motion.section>
      <motion.section
        id="about"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 bg-gray-100 text-gray-800 py-24 px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
          
          {/* LEFT: Image */}
          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-gray-300">
            <img
              src={marci} // Replace with your actual image import
              alt="Marci J Metzger"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT: Text Content */}
          <div className="text-center md:text-left max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-gray-900">
              Marci J Metzger
            </h2>
            <p className="text-lg md:text-xl font-medium text-gray-700 mb-3">
              REALTOR for Nearly Three Decades
            </p>
            <p className="text-base text-gray-500">
              <a href="tel:2069196886" className="hover:text-blue-600 transition">
                206-919-6886
              </a>
            </p>
          </div>
          
        </div>
      </motion.section>
      <SearchSection />
      <OurServices />
      <GetItSold />
      <Affiliations />
      <ContactPage />
      <MapSection />
      <Footer />
      </div>
  );
};

export default Home;