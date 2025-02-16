import { motion } from "framer-motion";
export default function ContactForm({ handleSubmit, heading }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="mt-6 p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-md border border-yellow-500"
    >
      <div>
        <h3 className="text-2xl font-semibold text-yellow-300 text-center">
          {heading}
        </h3>

        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col space-y-4"
          name="contact"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
            rows="4"
            required
          ></textarea>

          <button
            type="submit"
            className="px-5 py-2 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-semibold rounded-lg shadow-md hover:from-yellow-500 hover:to-red-500 transition duration-200"
          >
            Send Message 🍔
          </button>
        </form>
      </div>
    </motion.div>
  );
}
