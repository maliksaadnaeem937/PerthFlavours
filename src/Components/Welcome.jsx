import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Welcome() {
  const images = [
    "https://media.istockphoto.com/id/2149219718/photo/3d-render-of-cafe-restaurant-interior.webp?a=1&b=1&s=612x612&w=0&k=20&c=7s7SMQ4OqEX8QaXMqzd1Fus-hjcTa-dqmUggLP5GSZA=",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="px-4 w-full flex flex-col justify-center items-center text-white text-center bg-cover bg-center relative transition-all duration-1000"
      style={{
        height: "calc(100vh - 70px)",
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative max-w-3xl bg-red-600 p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-4xl font-semibold text-yellow-300 mb-3">
          <Typewriter
            words={["PERTH FLAVOURS"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            delaySpeed={1000}
            deleteSpeed={100}
          />
        </h2>

        <h2 className="text-2xl sm:text-4xl font-semibold text-yellow-300 mb-5">
          <Typewriter
            words={["THE TASTY HOUSE"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            delaySpeed={1000}
            deleteSpeed={100}
          />
        </h2>

        <h3 className="text-xl text-white mb-7 font-light">PERTH FLAVOURS</h3>

        {/* Clickable phone number */}
        <a href="tel:01416113130">
          <button className="bg-yellow-500 text-white font-semibold rounded-lg px-6 py-3 text-lg hover:bg-yellow-600 transition duration-300">
            📞 0141 611 3130
          </button>
        </a>
      </div>
    </div>
  );
}
