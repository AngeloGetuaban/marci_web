import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import img1 from '../images/sold1.webp';
import img2 from '../images/sold2.webp';
import img3 from '../images/sold3.webp';

const items = [
  {
    title: 'Top Residential Sales Last 5 Years',
    description:
      'We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard every day to grow and serve — our best is better every year.',
    img: img1,
  },
  {
    title: "Don't Just List it...",
    description:
      'Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.',
    img: img2,
  },
  {
    title: 'Guide to Buyers',
    description:
      'Nobody knows the market like we do. Market analysis, upgrade lists, and contractors on speed dial. Enjoy having a pro at your service.',
    img: img3,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const GetItSold = () => {
  const [index, setIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const next = () => {
    setIndex((prev) => (prev + 1) % items.length);
    setShowOverlay(false); // reset overlay on slide change
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    setShowOverlay(false);
  };

  const toggleOverlay = () => setShowOverlay((prev) => !prev);

  return (
    <div className="bg-fixed-parallax relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30 z-0" />
      <div className="relative z-10 backdrop-blur-md bg-white/10">
        <motion.section
          id="get-it-sold"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative py-20 text-white px-4 sm:px-6 md:px-8"
        >
          <h2 className="text-4xl font-serif text-center mb-12 drop-shadow-lg">
            Get It Sold
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div
              onClick={toggleOverlay}
              className="relative h-[450px] rounded-xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl cursor-pointer group"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="w-full h-full relative"
                >
                  {/* Image */}
                  <img
                    src={items[index].img}
                    alt={items[index].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Overlay Text: shows on hover or when clicked */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: showOverlay ? 1 : 0, y: showOverlay ? 0 : 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white px-6 pointer-events-none"
                  >
                    <h3 className="text-xl md:text-2xl font-bold mb-3 drop-shadow-md">
                      {items[index].title}
                    </h3>
                    <p className="text-sm md:text-base max-w-lg drop-shadow-md">
                      {items[index].description}
                    </p>
                  </motion.div>

                  {/* Arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    className="absolute top-0 left-0 h-full w-12 flex items-center justify-center bg-black/20 hover:bg-black/40 rounded-r-xl transition z-10"
                  >
                    <ChevronLeftIcon className="w-6 h-6 text-white opacity-80 hover:opacity-100 transition" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    className="absolute top-0 right-0 h-full w-12 flex items-center justify-center bg-black/20 hover:bg-black/40 rounded-l-xl transition z-10"
                  >
                    <ChevronRightIcon className="w-6 h-6 text-white opacity-80 hover:opacity-100 transition" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIndex(i);
                    setShowOverlay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition ${
                    index === i ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default GetItSold;
