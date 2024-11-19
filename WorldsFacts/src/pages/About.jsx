
import Button from './../components/Button';

const About = () => {

 
    return (
        <section className="mt-0 border-t-[1px] ">
            <div className=" mt-20 h-lvh flex  justify-center items-center w-full">
            <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                        <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Building Stronger Communities through Collaboration and Empowerment</h2>
                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">Through collaborationperse perspectives and strengths are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society.</p>
                    </div>
                    <button >
                       <Button text="Get Started"/>
                    </button>
                </div>
                <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1717751272.png" alt="about Us image" />
            </div>
        </div>
    </section>
                                            

            </div>
        </section>
    );
};

export default About;