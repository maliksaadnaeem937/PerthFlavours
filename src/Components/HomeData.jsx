
import { useState } from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function HomeData() {
  const [showStory, setShowStory] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-600 to-yellow-500 p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full px-6 py-10 bg-white bg-opacity-10 backdrop-blur-lg text-white shadow-lg rounded-lg border border-yellow-700"
      >
        {/* Restaurant Name & Introduction */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-5xl font-bold text-center text-yellow-300"
        >
          Perth Flavours
        </motion.h1>
        <p className="text-center text-lg text-gray-200 mt-2 font-semibold">
          The heart of fast food in Stirling! 🍔🍟
        </p>

        {/* Icon & Restaurant Type */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 flex flex-col items-center"
        >
          <FaUtensils className="text-6xl text-yellow-400" />
          <p className="text-lg text-center text-gray-300 mt-2">
            Fast Food Restaurant 🍕🌭
          </p>
        </motion.div>

        {/* Our Story Section */}
       {/* Our Story Section */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.7, duration: 0.5 }}
  className="mt-6 p-6 bg-red-900 bg-opacity-80 rounded-lg shadow-md text-center border border-yellow-500"
>
  <h3 className="text-2xl font-bold text-yellow-400">Our Story</h3>
  <p className="text-gray-300 text-sm sm:text-base mt-2">
    Serving delicious fast food since 2017, bringing flavors to life with fresh ingredients and love! ❤️
  </p>

  {/* Toggle Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => setShowStory(!showStory)}
    className="mt-4 px-5 py-2 bg-gradient-to-r from-yellow-600 to-red-600 text-white font-semibold rounded-lg shadow-md hover:from-red-500 hover:to-yellow-500 transition duration-200 flex items-center mx-auto"
  >
    {showStory ? "Less Info" : "More Info"} {showStory ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
  </motion.button>

  {/* Extra Story Details */}
  {showStory && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4 text-gray-300 bg-red-700 p-4 rounded-lg shadow-md"
    >
      <p>
        Welcome to Perth Flavours – Stirling’s favorite fast-food destination!  
        Since opening our doors in April 2017, we've been on a mission to serve mouthwatering fast food made with the freshest ingredients.
      </p>

      <p className="mt-3">
        Our journey began with a simple vision: to create a place where food lovers can indulge in bold flavors, crispy bites, and juicy delights – all in one spot! Whether you're craving a classic cheeseburger, crispy golden fries, or a slice of pizza loaded with toppings, we've got you covered! 🍕🍔
      </p>

      <p className="mt-3">
        At Perth Flavours, we believe  great food brings people together, and that's why our menu is crafted with passion and perfection. Every bite tells a story of flavor, quality, and dedication.  
        Our friendly staff, cozy atmosphere, and fast service make us the go-to spot for a quick lunch, late-night cravings, or a fun gathering with friends and family.
      </p>

      <p className="mt-3 font-semibold">
        Experience the magic of Perth Flavours – where every bite is a journey of taste and happiness! Come hungry, leave happy! 🍽️🔥
      </p>
    </motion.div>
  )}
</motion.div>


        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="italic text-xl text-orange-900">"The Tasty House - Where Every Bite is a Delight!" 🍽️✨</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
