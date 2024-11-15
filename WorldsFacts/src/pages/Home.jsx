import Hero from "./../components/ui/homeComponents/Hero";
import Fact from "./../components/ui/homeComponents/Fact";

const Home = () => {
  return (
    <>
      <main className="px-5 md:px-[2%] lg:px-[4%] py-4 md:py-[1%] ">
        {/* hero-section */}
        <section>
          <Hero />
        </section>
        {/* fact-section */}
        <section className="">
          <Fact />
        </section>
      </main>
    </>
  );
};

export default Home;
