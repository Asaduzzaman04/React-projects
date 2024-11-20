import Button from './../components/Button';



const About = () => {
  return (
    <section className="mt-0 border-t-[1px]">
      <div className="mt-20 h-lvh flex justify-center items-center w-full">
        <section className="py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
              {/* Text Section */}
              <div className="flex flex-col gap-10 items-center lg:items-start">
                <div className="flex flex-col gap-4 items-center lg:items-start">
                  <h2 className="text-white text-4xl font-bold font-manrope leading-normal text-center lg:text-start">
                    Building Stronger Communities through Collaboration and Empowerment
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed text-center lg:text-start">
                    Through collaboration, diverse perspectives and strengths are leveraged to create inclusive
                    environments where everyone has the opportunity to thrive. This approach not only fosters
                    personal growth and achievement but also strengthens the fabric of society.
                  </p>
                </div>
                <Button text="Get Started" />
              </div>

              {/* Image Section */}
              <div className="flex justify-center lg:justify-end">
                <img
                  className="h-full w-full max-w-md lg:max-w-full rounded-3xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717751272.png"
                  alt="About Us"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
