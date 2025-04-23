import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SearchSection = () => {
  const [form, setForm] = useState({
    location: "",
    type: "",
    minPrice: "",
    maxPrice: "",
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const { location, type, minPrice, maxPrice } = form;
    setIsValid(location && type && minPrice && maxPrice);
  }, [form]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  return (
    <motion.section
      id="search"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative z-10 py-32 px-4 bg-fixed-parallax"
    >
      <div className="max-w-6xl mx-auto shadow-2xl rounded-xl p-10 bg-white/90 backdrop-blur-md">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-700 mb-10 text-center">
          Find Your Ideal Property
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Location */}
          <div className="flex flex-col">
            <label htmlFor="location" className="text-sm font-medium text-gray-600 mb-1">Location</label>
            <select
              id="location"
              value={form.location}
              onChange={handleChange}
              className="px-4 py-2 border rounded-lg text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Location</option>
              <option value="pahrump">Pahrump</option>
              <option value="lasvegas">Las Vegas</option>
            </select>
          </div>

          {/* Type */}
          <div className="flex flex-col">
            <label htmlFor="type" className="text-sm font-medium text-gray-600 mb-1">Type</label>
            <input
              id="type"
              type="text"
              value={form.type}
              onChange={handleChange}
              placeholder="e.g. Single Family, Condo"
              className="px-4 py-2 border rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Sort By */}
          <div className="flex flex-col">
            <label htmlFor="sort" className="text-sm font-medium text-gray-600 mb-1">Sort By</label>
            <select
              id="sort"
              className="px-4 py-2 border rounded-lg text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="least">Least Expensive to Most</option>
              <option value="most">Most Expensive to Least</option>
              <option value="bedrooms-asc">Bedrooms (Low to High)</option>
              <option value="bedrooms-desc">Bedrooms (High to Low)</option>
              <option value="baths-asc">Bathrooms (Low to High)</option>
              <option value="baths-desc">Bathrooms (High to Low)</option>
            </select>
          </div>

          {/* Bedrooms */}
          <div className="flex flex-col">
            <label htmlFor="bedrooms" className="text-sm font-medium text-gray-600 mb-1">Bedrooms</label>
            <select
              id="bedrooms"
              className="px-4 py-2 border rounded-lg text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Any Number</option>
              <option value="studio">Studio</option>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <option key={n} value={n}>{n}+</option>
              ))}
            </select>
          </div>

          {/* Baths */}
          <div className="flex flex-col">
            <label htmlFor="baths" className="text-sm font-medium text-gray-600 mb-1">Baths</label>
            <select
              id="baths"
              className="px-4 py-2 border rounded-lg text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Any Number</option>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <option key={n} value={n}>{n}+</option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium text-gray-600 mb-1">Price Range</label>
            <div className="flex gap-4">
              <input
                id="minPrice"
                type="number"
                value={form.minPrice}
                onChange={handleChange}
                placeholder="Min"
                className="w-1/2 px-4 py-2 border rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                id="maxPrice"
                type="number"
                value={form.maxPrice}
                onChange={handleChange}
                placeholder="Max"
                className="w-1/2 px-4 py-2 border rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-end justify-end md:col-span-3 mt-4">
            <button
              type="submit"
              disabled={!isValid}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold shadow-md transition 
                ${isValid ? "bg-white text-black hover:bg-gray-100" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
            >
              SEARCH NOW
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default SearchSection;
