import { motion } from "framer-motion";
import {FactsData} from "../../../../public/Json/FactsData"
import FectCard from "./FectCard";

const Fact = () => {
  const facts = "Check Out These Captivating Facts  We're Excited About".split(
    ""
  );
  return (
    <div className="py-5 flex flex-col gap-10 md:gap-16 lg:gap-24 justify-center items-center ">
      {/* intresting fect text */}
      <div>
        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold  ">
          {facts.map((f, i) => {
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i / 30, duration: 0.2 }}
              >
                {f}
              </motion.span>
            );
          })}
        </h2>
      </div>

      {/* facts-country-cards */}
      <div> 
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 md:gap-10 px-5 md:px-0">
          {FactsData.map((fact, idx) => <FectCard key={fact.population} idx={idx} data={fact} /> )}
          </ul>
      </div>
    </div>
  );
};

export default Fact;
