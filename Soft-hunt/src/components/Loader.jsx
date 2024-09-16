const Loader = () => {
  return (
    <>
      <main className="h-[100vh]  flex justify-center items-center  ">
        <section>
        <div
  className="w-32   aspect-square rounded-full relative flex justify-center items-center animate-[pulse_1.5s_linear_infinite] z-40 bg-blue-700 before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-blue-600 after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite]  after:bg-blue-800"
>
  <span
    className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-blue-500"
  >
  </span>
</div>

        </section>
      </main>
    </>
  );
};

export default Loader;
