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
      <nav className="	bg-[#C8102E] text-white shadow-lg fixed left-0 top-0 right-0 z-50 py-3">
        <div className="flex w-full py-2 px-4 justify-between items-center">
          <NavLink to="." end>
            <h4 className="text-2xl md:text-3xl">PERTH FLAVOURS</h4>
          </NavLink>

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
              PRICING
            </NavLink>
          </div>

          <button
            className="md:hidden text-xl"
            onClick={toggle}
            aria-label="Open menu"
          >
            {!display && <FaBars />}
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-[#C8102E] text-white transform transition-transform duration-300 ease-in-out ${
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
            PRICING
          </NavLink>
        </div>
      </nav>
      <div>

      </div>
    

      {/* Add padding to prevent content from being covered by the navbar */}
      <div className="">
        <Container >
          <Outlet />
        </Container>
        <Footer />
      </div>
    </>
  );
}
