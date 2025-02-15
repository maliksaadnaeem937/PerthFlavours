import { useState } from "react";
import { motion } from "framer-motion";
import { FaClock, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function OpeningHours() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-yellow-400 p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full px-4 py-8 bg-white bg-opacity-10 backdrop-blur-lg text-white shadow-lg rounded-lg border border-yellow-600"
      >
        {/* Page Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-bold text-center text-orange-300"
        >
          Fast & Flavorful: Opening Hours
        </motion.h2>

        {/* Restaurant Details */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 p-6 bg-red-900 bg-opacity-70 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-semibold text-yellow-300 text-center">Perth Flavours</h3>
          <p className="text-gray-300 text-center">Fast Food Restaurant</p>
          <div className="mt-4 space-y-3 text-gray-300">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl text-yellow-400">📍</span>
              <p className="text-sm sm:text-base break-words text-center">
              Stirling Arcade, Stirling, Stirlingshire FK8 1AX
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl text-yellow-400">📞</span>
              <a
                href="tel:01416113130"
                className="text-blue-400 font-semibold hover:underline text-sm sm:text-base"
              >
                0141 611 3130
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl text-yellow-400">📧</span>
              <a
                href="mailto:clearbusinessbyadrian@gmail.com"
                className="text-blue-400 font-semibold hover:underline text-sm sm:text-base"
              >
                clearbusinessbyadrian@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl text-yellow-400">🕰️</span>
              <p className="text-sm sm:text-base text-center">Trading Since: April 2017</p>
            </div>
          </div>
        </motion.div>

        {/* Opening Hours Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6 p-6 bg-red-800 bg-opacity-80 rounded-lg shadow-md text-center border border-yellow-500"
        >
          <h3 className="text-2xl font-bold flex justify-center items-center gap-2 text-yellow-400">
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
            className="mt-4 px-5 py-2 bg-gradient-to-r from-yellow-600 to-red-600 text-white font-semibold rounded-lg shadow-md hover:from-red-500 hover:to-yellow-500 transition duration-200 flex items-center mx-auto"
          >
            {showDetails ? "Less Info" : "More Info"}{" "}
            {showDetails ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </motion.button>

          {/* Additional Details on Click */}
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-gray-300 bg-red-700 p-4 rounded-lg shadow-md"
            >
              <p>Our kitchen is always buzzing with flavor! 🍕🍔 Indulge in your cravings at the best spot in town!</p>
              <p className="mt-2 font-semibold">Swing by anytime between 1:00 PM and 11:00 PM, and let us serve you the freshest fast food around!</p>
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
          <p className="italic text-lg text-orange-900">"Savor the Flavour, Anytime, Every Time!" 🍔🍟</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
