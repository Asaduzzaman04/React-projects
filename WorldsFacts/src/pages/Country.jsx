import { ContextData } from "../context/ContextData";
import CountryData from "./../components/ui/CountryComponents/CountryData";

const Country = () => {
  return (
    <>
      <section className="px-5 md:px-[2%] lg:px-[4%] py-4 md:py-[1%] ">
      <ContextData>
        <section className="mt-4 ">
          <CountryData />
        </section>
      </ContextData>
      </section>
    </>
  );
};

export default Country;
