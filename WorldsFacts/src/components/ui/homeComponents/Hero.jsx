import Button from "./../../Button";
import heroImage from "../../../assets/heroImage/—Pngtree—earth globe_2001929.png";
import { motion } from "framer-motion";


const Hero = () => {
  
  return (
    <div className="relative w-full md:mt-9 lg:mt-0 flex flex-col-reverse md:flex-row justify-around items-center md:gap-10 overflow-hidden">
      {/* hero-text */}
      <div className="basis-[50%]  flex flex-col justify-around items-start gap-10 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className=" text-3xl md:text-4xl lg:text-7xl font-semibold"
        >
          Explore the Globe, One Nation at a Time.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 700 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-lg"
        >
          Uncover the wonders, traditions, and stories of every nation. Search,
          learn, and get insights into diverse cultures from across the globe.
          Start your journey and explore the endless possibilities.
        </motion.p>
        {/* learn-more-button */}
        <motion.button
          initial={{ opacity: 0, y: 800 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className=" mb-5 md:mb-0 animate-pulse"
        >
          <Button text="Learn More" />
        </motion.button>
      </div>
      {/* world-image */}

      <div className=" basis-[50%] flex justify-center  items-center overflow-hidden ">
        <motion.img
          initial={{ scale: 0, opacity: 0, y: 500 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
          src={heroImage}
          className=" w-full md:w-11/12 lg:w-4/6 "
          alt="world-image"
        />
      </div>
      {/* gridient-border */}
      <motion.div
        initial={{ x: -1000 }}
        whileInView={{ x: 5000 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute bottom-0 mb-3 left-0 w-full h-1 bg-gradient-to-r from-black to-white"
      />
    </div>
  );
};

export default Hero;
