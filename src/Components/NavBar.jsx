import { NavLink, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Footer from "./Footer";
import Container from "./Container";

export default function NavBar() {
  const [display, setDisplay] = useState(false);

  const toggle = () => {
    setDisplay((prevDisplay) => !prevDisplay);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white shadow-lg fixed left-0 top-0 right-0 z-50 sm:py-2 py-1">
        <div className="flex w-full py-2 px-4 justify-between items-center">
          <NavLink to="." end>
            <div className=" max-w-[50px] max-h-[50px] md:max-w-[70px] md:max-h-[70px]">
              <img src="/images/Logo.jpg" alt="logo" className=" rounded-full" />
            </div>
          </NavLink>

          {/* Navbar Links for Desktop */}
          <div className="hidden md:flex gap-6 text-sm md:text-base">
            <NavLink
              to="."
              onClick={() => setDisplay(false)}
              className={({ isActive }) =>
                `text-base ${isActive ? "font-bold underline" : ""} hover:underline transition-all duration-300 ease-in-out`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="about"
              onClick={() => setDisplay(false)}
              className={({ isActive }) =>
                `text-base ${isActive ? "font-bold underline" : ""} hover:underline transition-all duration-300 ease-in-out`
              }
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="contact"
              onClick={() => setDisplay(false)}
              className={({ isActive }) =>
                `text-base ${isActive ? "font-bold underline" : ""} hover:underline transition-all duration-300 ease-in-out`
              }
            >
              CONTACT US
            </NavLink>
            <NavLink
              to="opening-hours"
              onClick={() => setDisplay(false)}
              className={({ isActive }) =>
                `text-base ${isActive ? "font-bold underline" : ""} hover:underline transition-all duration-300 ease-in-out`
              }
            >
              OPENING HOURS
            </NavLink>
            <NavLink
              to="pricing"
              onClick={() => setDisplay(false)}
              className={({ isActive }) =>
                `text-base ${isActive ? "font-bold underline" : ""} hover:underline transition-all duration-300 ease-in-out`
              }
            >
              MENU & PRICING
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={toggle}
            aria-label="Open menu"
          >
            {!display && <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white transform transition-transform duration-300 ease-in-out ${
            display ? "translate-y-0" : "-translate-y-full"
          } md:hidden flex flex-col items-center py-4 gap-4`}
        >
          <button
            className="absolute top-4 right-4 text-3xl"
            onClick={toggle}
            aria-label="Close menu"
          >
            <IoMdClose />
          </button>
          <NavLink
            to="."
            onClick={() => setDisplay(false)}
            className={({ isActive }) =>
              `text-lg ${isActive ? "font-bold underline" : ""} hover:underline transition-all duration-300 ease-in-out`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="about"
            onClick={() => setDisplay(false)}
            className={({ isActive }) =>
              `text-lg ${isActive ? "font-bold underline" : ""} hover:underline transition-all duration-300 ease-in-out`
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="contact"
            onClick={() => setDisplay(false)}
            className={({ isActive }) =>
              `text-lg ${isActive ? "font-bold underline" : ""} hover:underline transition-all duration-300 ease-in-out`
            }
          >
            CONTACT US
          </NavLink>
          <NavLink
            to="opening-hours"
            onClick={() => setDisplay(false)}
            className={({ isActive }) =>
              `text-lg ${isActive ? "font-bold underline" : ""} hover:underline transition-all duration-300 ease-in-out`
            }
          >
            OPENING HOURS
          </NavLink>
          <NavLink
            to="pricing"
            onClick={() => setDisplay(false)}
            className={({ isActive }) =>
              `text-lg ${isActive ? "font-bold underline" : ""} hover:underline transition-all duration-300 ease-in-out`
            }
          >
              MENU & PRICING
          </NavLink>
        </div>
      </nav>

      <div className="">
        {/* Add padding to prevent content from being covered by the navbar */}
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </div>
    </>
  );
}
