/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const FectCard = ({ data,idx }) => {
    
  return (
    <motion.li 
    initial={{opacity: 0, x:-50}}
    whileInView={{ opacity: 1, x:0}}
    transition={{delay:idx /20, duration:1}}
    exit={{opacity: 1, x:0}}

    className=" group">
      <div className="h-full relative overflow-hidden rounded-lg bg-zinc-900 border shadow  border-zinc-800 p-1   ">
        <span className="absolute inset-[-1000%] animate-[spin_10s_linear_infinite_reverse] group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] " />
        <div className=" px-8 py-8 w-full rounded-lg font-semibold bg-zinc-900 text-zinc-200 backdrop-blur-xl  ">
          {/* fact cards code here */}
          <section className="flex flex-col justify-center items-start gap-5">
            <h1 className="text-3xl capitalize  font-semibold">{data.name}</h1>
            <div className="flex flex-col justify-center items-start gap-4">
              <p>
                <span className=" capitalize text-xl">capital</span> :{" "}
                {data.capital}
              </p>
              <p>
                <span className=" capitalize text-xl">population</span> :
                {data.population}
              </p>
              <p>
                <span className=" capitalize text-xl">interestingFact</span> :{" "}
                {data.interestingFact}
              </p>
            </div>
          </section>
        </div>
      </div>
    </motion.li>
  );
};

export default FectCard;
