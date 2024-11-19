const Button = ({ text,}) => {
  return (
    <div className="w-fit">
      <div className="relative overflow-hidden rounded-full bg-zinc-900  shadow border border-zinc-800 group p-0.5">
        <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FAFAFA_0%,#52525B_50%,#E4E4E7_100%)]  group-hover:animate-none" />
        <h3 className=" py-1.5 px-6 capitalize rounded-full font-semibold text-zinc-200 backdrop-blur-xl  bg-zinc-900">
          {text} 
        </h3>
      </div>
    </div>
  );
};

export default Button;
