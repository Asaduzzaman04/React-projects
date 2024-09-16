import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
<nav className="bg-gray-900  w-full   ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-3 py-6">

      <h2 className="self-center text-3xl capitalize font-bold whitespace-nowrap text-white">Soft hunt</h2>
 
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-600  font-medium rounded-lg text-sm px-4 py-2 text-center   active:scale-95 transition-all duration-100">Log in</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-1.5 w-10 h-10 justify-center  text-gray-500 rounded-lg md:hidden focus:outline-none hover:ring-2 hover:ring-blue-500  text-4xl" >
      <GiHamburgerMenu />
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold md:text-xl  rounded-lg 0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">

      <li  className="active:scale-95 block py-2 px-3   rounded md:bg-transparent  md:p-0 text-blue-300  capitalize" >
        <NavLink to="/">home</NavLink>
      </li>

      <li  className=" active:scale-95  block py-2 px-3 text-blue-300 rounded md:bg-transparent  md:p-0 capitalize" >
        <NavLink to="/About">about</NavLink>
      </li>
      <li  className="active:scale-95  block py-2 px-3 text-blue-300  rounded md:bg-transparent  md:p-0  capitalize" >
        <NavLink to="/Service">service</NavLink>
      </li>
      <li  className="active:scale-95  block py-2 px-3 text-blue-300  rounded md:bg-transparent  md:p-0  capitalize" >
        <NavLink to="/Contact">contact</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>

        </>
    );
};

export default Navbar;