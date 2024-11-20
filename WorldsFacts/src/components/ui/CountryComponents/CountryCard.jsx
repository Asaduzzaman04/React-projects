/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Button from "./../../Button";
import React from "react";

// Utility function for truncating text
const truncateText = (text, maxLength) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

// Optimize with React.memo to prevent unnecessary re-renders
const CountryCard = React.memo(({ value, idx }) => {
  if (!value) return null; // Guard clause for null/undefined values

  return (
    <motion.li
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: idx / 50, duration: 0.4 }}
      exit={{ opacity: 1, x: 0 }}
      className="h-full group"
    >
      <div className="h-full relative overflow-hidden rounded-tl-3xl rounded-br-3xl bg-zinc-900 border shadow border-zinc-800 p-1">
        {/* Gradient Background Animation */}
        <span className="absolute inset-[-1000%] animate-[spin_10s_linear_infinite_reverse] group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)]" />
        <div className="px-8 py-8 h-full rounded-tl-3xl rounded-br-3xl font-semibold bg-zinc-900 text-zinc-200 backdrop-blur-xl">
          {/* Country Information Section */}
          <section className="w-full flex flex-col justify-center items-start gap-5">
            {/* Country Flag */}
            <img
              src={value?.flags?.png || "fallback-image-url"}
              className="rounded-lg overflow-hidden group-hover:scale-105 transition-all duration-200 ease-linear aspect-video w-full h-full"
              alt={value?.name?.common || "Country Flag"}
            />
            {/* Country Details */}
            <div className="flex flex-col justify-center items-start gap-4">
              <p>
                <span className="text-3xl capitalize">
                  {truncateText(value.name.common, 10)}
                </span>
              </p>
              <p>
                <span className="capitalize">Population</span>:{" "}
                {value.population || "N/A"}
              </p>
              <p>
                <span className="capitalize">Capital</span>:{" "}
                {value.capital || "N/A"}
              </p>
              <p>
                <span className="capitalize">Region</span>:{" "}
                {value.region || "N/A"}
              </p>
            </div>
            {/* Navigation Button */}
            <NavLink to={`/country/${value.name.common}`}>
              <Button text="See more..." />
            </NavLink>
          </section>
        </div>
      </div>
    </motion.li>
  );
});

export default CountryCard;
