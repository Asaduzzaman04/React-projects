import { motion } from "framer-motion";

const SubcontinentsSelect = ({ searchFilter, setSearchFilter }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const option = [
    { value: "all" },
    { value: "africa" },
    { value: "americas" },
    { value: "asia" },
    { value: "europe" },
    { value: "oceania" },
  ];

  return (
    <>
      <form className="w-full h-full mx-auto" onSubmit={handleSubmit}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <select
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="bg-zinc-800  text-xl px-5 py-1.5 rounded-lg outline-none capitalize font-semibold"
          >
            {option &&
              option.map((item, idx) => (
                <option key={idx} value={item.value}>
                  {item.value}
                </option>
              ))}
          </select>
        </motion.div>
      </form>
    </>
  );
};

export default SubcontinentsSelect;
