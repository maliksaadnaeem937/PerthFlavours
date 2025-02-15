import React from "react";

export default function OwnerSection() {
  return (
    <section className="bg-[#1F1F1F] py-12 text-center text-[#E0C097]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-[#FFD700]">
          Meet Our Esteemed Owner
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-[#FFD700]">
          Our business wouldn't be what it is today without the vision and leadership of our owner,{" "}
          <span className="font-semibold text-white">Mr. Adrian Venoin</span>. With years of experience in the industry, his commitment to excellence and customer satisfaction has led us to where we are now.
        </p>
        <div className="bg-[#FF8C42] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3">
            "A Passion for Flavour, A Dedication to Quality"
          </h3>
          <p className="text-lg text-[#2C2C2C] italic">
            - Mr. Adrian Venoin, Owner and Visionary behind Perth Flavours
          </p>
        </div>
      </div>
    </section>
  );
}
