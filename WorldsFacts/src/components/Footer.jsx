import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 mt-11 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4 flex justify-center items-center gap-1">
              <span>
                <img
                  src="../../public/world-svgrepo-com.svg"
                  className="w-5 md:w-6"
                  alt="EarthFactsHub"
                />
              </span>{" "}
              EarthFactsHub
            </h2>
            <p>Explore the Globe, One Nation at a Time.</p>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Resources</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
            <ul>
              <li>
                <Link>Facebook</Link>
              </li>
              <li>
                <Link>Twitter</Link>
              </li>
              <li>
                <Link>Instagram</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} EarthFactsHub. All Rights
            Reserved.
          </p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
