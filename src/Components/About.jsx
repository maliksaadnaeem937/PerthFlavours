import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-[#FFF8E1] to-[#F8E8A6] py-20">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:gap-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Left Side - Restaurant Interior Image */}
        <motion.div
          className="lg:w-1/2 relative"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="https://plus.unsplash.com/premium_photo-1681841594224-ad729a249113?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdHVyYW50fGVufDB8fDB8fHww"
            alt="Cozy restaurant interior"
            className="rounded-lg shadow-2xl w-full h-auto transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute top-5 left-5 bg-[#8B0000] text-white px-4 py-2 rounded-lg shadow-md text-lg font-semibold">
            Welcome to Perth Flavours
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="lg:w-1/2 text-gray-900 mt-8 lg:mt-0"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-[#8B0000]">About Perth Flavours</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Welcome to <span className="font-semibold text-[#A52A2A]">Perth Flavours</span>, 
            the ultimate <strong>Fast Food destination</strong> in Stirling Arcade, Stirlingshire. 
            We take pride in serving high-quality, freshly prepared fast food that delights 
            customers with every bite.
          </p>
          <p className="mt-4 text-lg italic text-[#A52A2A] font-semibold border-l-4 border-[#A52A2A] pl-4">
            "The Tasty House" – Where Every Meal Feels Like Home!
          </p>

          <p className="mt-4 text-lg text-gray-700">
            Established in <strong>April 2017</strong>, Perth Flavours has become a local favorite, 
            known for our <strong>crispy fries, juicy burgers, sizzling steaks, and mouthwatering desserts</strong>. 
            Whether you’re stopping by for a quick bite or planning a family dinner, 
            our warm ambiance and delicious menu will make you come back for more.
          </p>
        </motion.div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        className="py-16 px-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center text-[#8B0000] mb-12">Discover Our Menu & Atmosphere</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "https://media.istockphoto.com/id/2000117676/photo/here-try-some-tacos-are-super-tasty.webp?a=1&b=1&s=612x612&w=0&k=20&c=TMW-J4ozoblMBgKdu2qqf8Mb5W-rkizhtXaCgYCMAjg=",
            "https://images.unsplash.com/photo-1555992457-b8fefdd09069?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdHVyYW50fGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1664189122502-c698839fc650?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdHVyYW50fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1618644195280-44360cfd6f69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3R1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
            "https://media.istockphoto.com/id/2168448371/photo/business-professionals-at-a-restaurant-having-dinner.webp?a=1&b=1&s=612x612&w=0&k=20&c=_cfgDmvI-beAOImCes-1p7EhFnEalaEIYgMInrg-EWo=",
            "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8fDA%3D"
          ].map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={src}
                alt="Gallery item"
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
