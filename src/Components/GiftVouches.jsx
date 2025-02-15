import { Link } from "react-router-dom";

export default function GiftVouchers() {
  return (
    <section className="bg-[#1F1F1F] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Column - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600"
            alt="Restaurant Gift Voucher"
            className="rounded-lg shadow-xl w-full object-cover border-4 border-[#FF8C42]"
          />
        </div>

        {/* Right Column - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#FFD700] mb-4">🎁 Gift Vouchers</h2>
          <p className="text-[#FFFFFF] mb-6 leading-relaxed">
            Looking for the perfect gift? Treat your loved ones to a <span className="text-[#FF8C42] font-semibold">delicious dining experience</span> with our exclusive gift vouchers.  
          </p>
          <Link
            to="/"
            className="bg-[#FF8C42] text-white py-3 px-6 rounded-full shadow-lg hover:bg-[#A0522D] transition-all duration-300">
            Buy a Gift Voucher
          </Link>
        </div>

      </div>
    </section>
  );
}
