
import { NavLink } from 'react-router-dom';

const About = () => {

    return (
        <>
           <main className="">
           <section className="h-screen overflow-y-auto bg-gray-900 text-white">
      <div className="container mx-auto p-6 lg:p-12">
        {/* About Title */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4 ">About Soft Hunt</h1>
          <p className="text-lg lg:text-xl">
            Your trusted payment tool for software companies.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg lg:text-xl leading-relaxed">
            At Soft Hunt, we are on a mission to revolutionize the way software
            companies handle payments. We aim to simplify global payments and
            ensure compliance with sales tax laws, offering seamless solutions
            for companies worldwide.
          </p>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Features</h2>
          <ul className="text-lg lg:text-xl list-disc list-inside leading-relaxed">
            <li>Global Sales Tax Compliance</li>
            <li>Seamless Checkout Experience</li>
            <li>Scalable Payment Infrastructure</li>
            <li>Integration with Popular Platforms</li>
          </ul>
        </div>

        {/* Meet the Team */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg lg:text-xl leading-relaxed">
            We are a diverse and passionate team of developers, designers, and
            payment experts, united by our goal to improve the payment process
            for software companies worldwide.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          {/* <a
            href="#contact"
            className="text-lg bg-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Get in Touch
          </a> */}
          <NavLink to="/Contact"><button className='text-lg bg-blue-600 px-6 py-3 rounded-lg shadow-lg font-bold hover:bg-blue-700 transition'>Get in Touch</button></NavLink>
        </div>
      </div>
    </section>
           </main>
        </>
    );
};

export default About;