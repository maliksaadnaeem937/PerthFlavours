import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-[#E0C097] py-8 border-t border-[#8B0000]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} <span className="font-semibold text-white">Perth Flavours</span>
          </p>
          <p className="text-xs text-[#B08968]">All Rights Reserved.</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm">
          <Link to="/" className="hover:text-[#FFD700] transition duration-300">Privacy Policy</Link>
          <Link to="/" className="hover:text-[#FFD700] transition duration-300">Terms of Service</Link>
          <Link to="/contact" className="hover:text-[#FFD700] transition duration-300">Contact</Link>
        </nav>

        {/* Credit */}
      

      </div>
    </footer>
  );
}

