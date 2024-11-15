import { ContextData } from "../context/ContextData";
import CountryData from "./../components/ui/CountryComponents/CountryData";

const Country = () => {
  return (
    <>
      <ContextData>
        <section>
          <CountryData />
        </section>
      </ContextData>
    </>
  );
};

export default Country;
