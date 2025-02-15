import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function Welcome() {
  return (
    <div
      className="px-4 w-full flex flex-col justify-center items-center text-white text-center bg-[url('https://media.istockphoto.com/id/2149219718/photo/3d-render-of-cafe-restaurant-interior.webp?a=1&b=1&s=612x612&w=0&k=20&c=7s7SMQ4OqEX8QaXMqzd1Fus-hjcTa-dqmUggLP5GSZA=')] bg-cover bg-center relative"
      style={{ height: "calc(100vh - 70px)" }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-3xl bg-[#FF8C42] p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-3">
          <Typewriter
            words={["Welcome to PERTH FLAVOURS"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            delaySpeed={1000}
            deleteSpeed={100}
          />
        </h2>

        <h2 className="text-2xl sm:text-4xl font-semibold mb-5">
          <Typewriter
            words={["The Tasty House"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            delaySpeed={1000}
            deleteSpeed={100}
          />
        </h2>

        <h3 className="text-xl text-gray-300 mb-7">PERTH FLAVOURS</h3>

        {/* Clickable phone number */}
        <a href="tel:01416113130">
          <button className="bg-red-600 text-white font-semibold rounded-lg px-6 py-3 text-lg hover:bg-red-700 transition duration-300">
            📞 0141 611 3130
          </button>
        </a>
      </div>
    </div>
  );
}
