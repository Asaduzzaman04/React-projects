import { NavLink } from "react-router-dom";
import { navbarData } from "../../public/Json/navbarData"; // Fixed path format
import { motion } from "framer-motion";
import tickSound from "../assets/sounds/ui-click-43196.mp3";
import { RiMenuFold3Line } from "react-icons/ri";
import { useState } from "react";
import { RiMenuFold2Line } from "react-icons/ri";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false); // State for toggling the menu

  const logo = "EarthFactsHub".split("");

  // Function to play the click sound
  const clickSound = () => {
    const audio = new Audio(tickSound);
    audio.play();
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsClick(!isClick);
  };

  return (
    <header className="relative flex justify-between items-center  px-5 md:px-14 lg:px-[5%] py-3 md:py-5">
      {/* Logo */}
      <div className="flex  font-semibold text-2xl">
        {logo.map((letter, index) => (
          <NavLink key={index} to="/" onClick={clickSound}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index / 20, duration: 1 }}
            >
              {letter}
            </motion.span>
          </NavLink>
        ))}
      </div>

      {/* Navigation */}
      <nav>
        {/* Medium and large devices */}
        <div className="hidden md:flex">
          {navbarData?.map((data, index) => (
            <motion.button
              initial={{ opacity: 0,filter: 'blur(20px)'  }}
              animate={{ opacity: 1, filter: 'blur(0px)'}}
              transition={{ delay: index / 10, duration: 1 }}
              key={index}
              onClick={clickSound}
            >
              <NavLink
                to={data.path}
                className="ml-5 md:ml-10  font-medium tracking-wider text-xl"
              >
                {data.title}
              </NavLink>
            </motion.button>
          ))}
        </div>

        {/* Small devices - Mobile Menu */}
        <div
          className={`${
            isClick ? "flex" : "hidden"
          } flex-col absolute justify-center items-center top-[54px] left-0 w-full h-screen bg-white text-black md:hidden gap-11 text-xl font-bold `}
        >
          {navbarData?.map((data, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                clickSound();
                setIsClick(false); // Close the menu on link click
              }}
              initial={{ scale: 0}}
              whileInView={{scale: 1}}
              transition={{delay: index / 20}}
            >
              <NavLink
                to={data.path}
             
              >
                {data.title}
              </NavLink>
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Menu Toggle Button for Small Devices */}
      <button 
      className="inline-flex md:hidden text-3xl" onClick={toggleMenu}>
       {isClick ? <RiMenuFold2Line/> : <RiMenuFold3Line />}
      </button>
    </header>
  );
};

export default Navbar;
