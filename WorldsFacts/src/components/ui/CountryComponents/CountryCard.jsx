/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Button from "./../../Button";

const CountryCard = ({ value, idx }) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: idx / 50, duration: 0.4 }}
      exit={{ opacity: 1, x: 0 }}
      className=" h-full group"
    >
      <div className="h-full relative overflow-hidden rounded-tl-3xl rounded-br-3xl bg-zinc-900 border shadow  border-zinc-800 p-1   ">
        <span className="absolute inset-[-1000%] animate-[spin_10s_linear_infinite_reverse] group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] " />
        <div className=" px-8 py-8 h-full rounded-tl-3xl rounded-br-3xl font-semibold bg-zinc-900 text-zinc-200 backdrop-blur-xl  ">
          {/* country cards code here */}
          <section className=" w-full flex flex-col justify-center items-start gap-5">
            <img
              src={value.flags.png}
              className="rounded-lg overflow-hidden group-hover:scale-105 transition-all duration-200 ease-linear aspect-video w-full h-full"
              alt={value.name.common}
            />
            <div className="flex flex-col justify-center items-start gap-4">
              <p>
                <span className="text-3xl capitalize ">
                  {value.name.common.length >= 10
                    ? value.name.common.slice(0, 10) + "..."
                    : value.name.common}
                </span>
              </p>
              <p>
                <span className=" capitalize">population </span> : {"  "}
                {value.population}
              </p>
              <p>
                <span className=" capitalize ">capital</span> :{"  "}
                {value.capital}
              </p>
              <p>
                <span className=" capitalize ">
                  {" "}
                  <span>rigion</span> : {value.region}
                </span>
              </p>
            </div>

            <NavLink to={`/country/${value.name.common}`}>
              <Button text="see more .." />
            </NavLink>
          </section>
        </div>
      </div>
    </motion.li>
  );
};

export default CountryCard;
// value.name.common
// value.flags.png
//value.population
//value.region
//value.capital[0]
