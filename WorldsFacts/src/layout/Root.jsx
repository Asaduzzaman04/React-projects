import { Outlet } from "react-router-dom";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { useScroll, motion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";


const Root = () => {
  //custom cusror
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleCursorPosition);
    return () => window.removeEventListener("mousemove", handleCursorPosition);
  }, []);

  //scroll progress bar
  const { scrollYProgress } = useScroll();

  const scale = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001,
  });
  const height = useRef()


  return (
    <>


      <main className="relative">
        {/* custom-cursor */}
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[1000] w-8 h-8 rounded-full border-2 shadow-[0px_0px_10px_#dfdfdf] border-blue-100 bg-transparent"
          style={{
            x: cursorPosition.x,
            y: cursorPosition.y,
            translateX: "-50%",
            // translateY: "-50%",
          }}
          animate={{
            x: cursorPosition.x,
            y: cursorPosition.y,
            filter: "blur(1px)",
          }}
          transition={{ type: "tween", stiffness: 50, damping: 30 }}
          whileTap={{ scale: 2 }}
          />
        {/* scroll-progress */}
        <motion.div
          style={{ scale }}
          className="rounded-r-xl z-[10000] shadow-[2px_0px_2px_#2e86de] fixed top-0 left-0 right-0 h-1 bg-blue-200 origin-left  "
          />
        {/*navbar */}
       <section ref={height} className="fixed z-[100] w-full bg-transparent backdrop-blur-3xl shadow-[0px_6px_20px_#000] ">
       <Navbar />
       </section>
        <Outlet />
        {/*footer */}
        <Footer />
      </main>
   
    </>
  );
};

export default Root;
