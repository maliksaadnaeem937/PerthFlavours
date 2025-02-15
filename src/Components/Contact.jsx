import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function Contact() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen flex p-2 items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full px-2 py-10 bg-white bg-opacity-10 backdrop-blur-lg text-white shadow-lg rounded-lg border border-gray-600"
      >
        {/* Page Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-bold text-center text-indigo-300"
        >
          📞 Contact Us
        </motion.h2>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 p-6 bg-gray-900 bg-opacity-70 rounded-lg shadow-md "
        >
          <h3 className="text-2xl font-semibold text-indigo-300 text-center">
            Get In Touch
          </h3>
          <p className="text-gray-300 text-center">
            We are here to assist you!
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address Section */}
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-indigo-400 text-4xl" />
              <p className="font-semibold text-indigo-400 mt-2">📍 Address:</p>
              <p className="text-gray-300 text-center">
                Stirling Arcade, Stirling, FK8 1AX
              </p>
            </div>

            {/* Phone Section */}
            <div className="flex flex-col items-center">
              <FaPhone className="text-indigo-400 text-4xl" />
              <p className="font-semibold text-indigo-400 mt-2">📞 Phone:</p>
              <p className="text-gray-300 text-center">
                <a
                  href="tel:+441416113130"
                  className="text-blue-400 font-semibold hover:underline"
                >
                  0141 611 3130
                </a>
              </p>
            </div>

            {/* Email Section */}
            <div className="flex flex-col items-center">
              <FaEnvelope className="text-indigo-400 text-4xl" />
              <p className="font-semibold text-indigo-400 mt-2">📧 Email:</p>
              <p className="text-gray-300 text-center">
                <a
                  href="mailto:clearbusinessbyadrian@gmail.com"
                  className="text-blue-400 font-semibold hover:underline"
                >
                  clearbusinessbyadrian@gmail.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-md border border-indigo-500"
        >
          <h3 className="text-2xl font-semibold text-indigo-300 text-center">
            Send Us a Message
          </h3>
          <form
            className="mt-4 flex flex-col space-y-4"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit="submit"
            action="/success/"
          >
            <input type="text" className="hidden" name="bot-field" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-indigo-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-indigo-400"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-indigo-400"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-indigo-400"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-indigo-500 hover:to-blue-500 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* More Info Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6 p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-md text-center border border-indigo-500"
        >
          <h3 className="text-2xl font-bold text-indigo-400">
            Additional Information
          </h3>
          <p className="text-lg mt-3 font-semibold text-gray-300">
            Reach out to us anytime for inquiries!
          </p>

          {/* More Info Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowDetails(!showDetails)}
            className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-indigo-500 hover:to-blue-500 transition duration-200 flex items-center mx-auto"
          >
            {showDetails ? "Less Info" : "More Info"}{" "}
            {showDetails ? (
              <FaChevronUp className="ml-2" />
            ) : (
              <FaChevronDown className="ml-2" />
            )}
          </motion.button>

          {/* Additional Details on Click */}
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-gray-300 bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <p>
                Feel free to contact us for reservations, queries, or support!
                ✨
              </p>
              <p className="mt-2 font-semibold">
                We are available 24/7 for your service.
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
          <p className="italic text-lg text-indigo-300">
            "We're Here for You!" 📞
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
