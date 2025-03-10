import { useState } from "react";
import { motion } from "framer-motion";
import Loader from "./Loader";
import emailjs from "emailjs-com";
import Modal from "./Modal";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import ContactForm from "./ContactForm";
export default function Contact() {
  const [showDetails, setShowDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({ title: "", body: "" });

  // function customPromise(success) {
  //   return new Promise((resolve, reject) => {

  //       setTimeout(() => {
  //         if (success) {
  //           resolve("✅ Promise resolved successfully!");
  //         } else {
  //           reject("❌ Promise rejected!");
  //         }
  //       }, 2000);

  //   });
  // }

  const removeModal = () => {
    setModalOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const templateParams = {
      to_name: "Mr. Adrian Venoin",
      from_name: name,
      from_email: email,
      from_phone: phone,
      message: message,
    };

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setModalMessage({
        title: "Thank You!",
        body: "Your message has been sent successfully. We will get back to you shortly.",
      });
    } catch (error) {
      setModalMessage({
        title: "Error!",
        body: `There was an error sending your message. Please try again later.\nError: ${error.text}`,
      });
    } finally {
      setIsLoading(false);
      setModalOpen(true);
    }

    e.target.reset();
  };

  return (
    <div className="min-h-screen flex p-2 items-center justify-center bg-gradient-to-br from-yellow-400 via-red-500 to-pink-600 sm:p-6">
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
          className="text-4xl font-bold text-center text-yellow-300"
        >
          🍔 Contact Us
        </motion.h2>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 p-6 bg-gray-900 bg-opacity-70 rounded-lg shadow-md "
        >
          <h3 className="text-2xl font-semibold text-yellow-300 text-center">
            Get In Touch With Us!
          </h3>
          <p className="text-gray-300 text-center">
            We're here to make your experience delicious!
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address Section */}
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-yellow-400 text-4xl" />
              <p className="font-semibold text-yellow-400 mt-2">📍 Address:</p>
              <p className="text-gray-300 text-center">
                Stirling Arcade, Stirling, Stirlingshire FK8 1AX
              </p>
            </div>

            {/* Phone Section */}
            <div className="flex flex-col items-center">
              <FaPhone className="text-yellow-400 text-4xl" />
              <p className="font-semibold text-yellow-400 mt-2">📞 Phone:</p>
              <p className="text-gray-300 text-center">
                <a
                  href="tel:01416113130"
                  className="text-blue-400 font-semibold hover:underline"
                >
                  0141 611 3130
                </a>
              </p>
            </div>

            {/* Email Section */}
            <div className="flex flex-col items-center">
              <FaEnvelope className="text-yellow-400 text-4xl" />
              <p className="font-semibold text-yellow-400 mt-2">📧 Email:</p>
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

        {/* // place form here    */}

        <ContactForm
          handleSubmit={handleSubmit}
          heading={" Send Us a Message 🍟"}
        ></ContactForm>

        {/* More Info Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6 p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-md text-center border border-yellow-500"
        >
          <h3 className="text-2xl font-bold text-yellow-400">
            Additional Information
          </h3>
          <p className="text-lg mt-3 font-semibold text-gray-300">
            Reach out to us anytime for reservations, queries, or support!
          </p>

          {/* More Info Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowDetails(!showDetails)}
            className="mt-4 px-5 py-2 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-semibold rounded-lg shadow-md hover:from-yellow-500 hover:to-red-500 transition duration-200 flex items-center mx-auto"
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
                🍕✨
              </p>
              <p className="mt-2 font-semibold">
                We are here to make your cravings come true.
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
          <p className="italic text-lg text-yellow-300">
            "Serving you the best, with every bite!" 🍟
          </p>
        </motion.div>
      </motion.div>
      {isLoading && <Loader></Loader>}
      {modalOpen && (
        <Modal message={modalMessage} removeModal={removeModal}></Modal>
      )}
    </div>
  );
}
