import useCountryData from "../../../hooks/useCountryData";
import CountryCard from "./CountryCard";



const CountryData = () => {
    //context data for country
    const data = useCountryData()

 
  return (
    <section>
      {/* search-section */}
      <div>

        
      </div>

      {/* country-cards */}
      <CountryCard />
    </section>
  );
};

export default CountryData;
