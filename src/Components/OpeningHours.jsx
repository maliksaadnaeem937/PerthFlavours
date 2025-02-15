import { useState } from "react";
import { motion } from "framer-motion";
import { FaClock, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function OpeningHours() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full px-6 py-10 bg-white bg-opacity-10 backdrop-blur-lg text-white shadow-lg rounded-lg border border-gray-600"
      >
        {/* Page Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-bold text-center text-indigo-300"
        >
          🍽️ Restaurant Opening Hours
        </motion.h2>

        {/* Restaurant Details */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 p-6 bg-gray-900 bg-opacity-70 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-semibold text-indigo-300">Perth Flavours</h3>
          <p className="text-gray-300">Fast Food Restaurant</p>
          <p className="mt-2">
            <span className="font-semibold text-indigo-400">📍 Address:</span> Stirling Arcade, Stirling, FK8 1AX
          </p>
          <p>
            <span className="font-semibold text-indigo-400">📞 Contact:</span>{" "}
            <a href="tel:+441416113130" className="text-blue-400 font-semibold hover:underline">
              0141 611 3130
            </a>
          </p>
          <p>
            <span className="font-semibold text-indigo-400">📧 Email:</span>{" "}
            <a href="mailto:clearbusinessbyadrian@gmail.com" className="text-blue-400 font-semibold hover:underline">
              clearbusinessbyadrian@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-indigo-400">🕰️ Trading Since:</span> April 2017
          </p>
        </motion.div>

        {/* Opening Hours Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6 p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-md text-center border border-indigo-500"
        >
          <h3 className="text-2xl font-bold flex justify-center items-center gap-2 text-indigo-400">
            <FaClock /> Opening Hours
          </h3>
          <p className="text-lg mt-3 font-semibold text-gray-300">
            🕑 1:00 PM to 11:00 PM <br />
            (7 Days a Week)
          </p>

          {/* More Info Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowDetails(!showDetails)}
            className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-indigo-500 hover:to-blue-500 transition duration-200 flex items-center mx-auto"
          >
            {showDetails ? "Less Info" : "More Info"} {showDetails ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </motion.button>

          {/* Additional Details on Click */}
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-gray-300 bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <p>We serve fresh and delicious fast food every day! 🍔🍟</p>
              <p className="mt-2 font-semibold">Visit us anytime between 1:00 PM and 11:00 PM.</p>
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
          <p className="italic text-lg text-indigo-300">"The Tasty House" 🍽️</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
