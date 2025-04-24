import React, { useState } from 'react';
import { motion } from 'framer-motion';
import service1 from '../images/service1.webp';
import service2 from '../images/service2.webp';
import service3 from '../images/service3.webp';

const services = [
  {
    title: 'Real Estate Done Right',
    description:
      "Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible.",
    img: service1,
  },
  {
    title: 'Commercial & Residential',
    description:
      'Large or small, condo or mansion, fixer-uppers or luxury — we help with all of it. Live, work, and play in this community.',
    img: service2,
  },
  {
    title: 'Rely on Expertise',
    description:
      'We connect you with the right people to get answers you need. You’ll feel confident and educated every step of the way.',
    img: service3,
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

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.section
      id="services"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-white"
    >
      <h2 className="text-4xl font-serif text-center mb-12 text-gray-700">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, i) => {
          const isVisible = activeIndex === i || hoverIndex === i;

          return (
            <div
              key={i}
              onClick={() => handleClick(i)}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className="relative group overflow-hidden rounded-xl shadow-lg h-[400px] cursor-pointer"
            >
              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 30,
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6 pointer-events-none"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-white">{service.description}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default OurServices;
