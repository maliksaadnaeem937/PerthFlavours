export default function TaglineSection() {
    return (
      <section className="bg-[#1F1F1F] py-12 text-center text-[#E0C097]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#FFD700] mb-4">
            Welcome to <span className="font-bold text-white">Perth Flavours</span>
          </h2>
          <p className="text-lg sm:text-xl mb-6 text-[#FFD700]">
            Our commitment to quality and authentic flavors makes us your go-to place for the best culinary experience.
          </p>
          <div className="relative inline-block">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-[#FF8C42] mb-6">
              <span className="block">"The Tasty House"</span>
              <span className="absolute bottom-0 left-0 w-full h-[5px] bg-[#FFD700] mt-2"></span>
            </h3>
          </div>
          <p className="text-sm sm:text-lg text-gray-300">
            At Perth Flavours, we are dedicated to serving you the tastiest, freshest food with a commitment to satisfaction.
          </p>
        </div>
      </section>
    );
  }
  