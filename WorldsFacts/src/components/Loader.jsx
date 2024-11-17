const Loader = () => {
  return (
    <div className="mt-12 h-lvh w-full flex justify-center items-center">
      <div className="flex flex-row gap-5">
        <div className="w-8 h-8 rounded-full bg-blue-300 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-8 h-8 rounded-full bg-blue-500 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-8 h-8 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
      </div>
    </div>
  );
};

export default Loader;
