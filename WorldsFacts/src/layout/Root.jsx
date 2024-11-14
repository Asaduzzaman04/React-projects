import { Outlet } from "react-router-dom";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { useScroll,motion, useSpring } from "framer-motion";

const Root = () => {
  const {scrollYProgress} = useScroll()

  const scale = useSpring(scrollYProgress,{
    stiffness:100,
    damping: 20,
    restDelta: 0.001,
  })

  return (
    <>
      <main className="relative" >
        {/* scroll-progress */}
        <motion.div style={{scale}}  className="rounded-r-xl shadow-[2px_0px_2px_#2e86de] fixed top-0 left-0 right-0 h-1 bg-blue-200 origin-left z-50 "/>


        {/*navbar */}
        <Navbar />
        <Outlet />
        {/*footer */}
        <Footer />
      </main>
    </>
  );
};

export default Root;
