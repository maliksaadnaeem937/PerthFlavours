


export default function ContactForm({handleSubmit}) {


 
  return (
    <div>
      {/* Contact Form */}
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
  );
}
