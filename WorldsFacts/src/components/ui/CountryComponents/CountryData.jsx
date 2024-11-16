import { useState } from "react";
import useCountryData from "../../../hooks/useCountryData";
import CountryCard from "./CountryCard";
import Search from "./Search";

const CountryData = () => {
  const [searcValue, setSearchValue] = useState(""); // Initialize as an empty string
  const data = useCountryData();

  // Only filter if data.data is an array
  const searchCountry = Array.isArray(data?.data)
    ? data.data.filter((item) =>
        item.name.common.toLowerCase().includes(searcValue.toLowerCase())
      )
    : [];

  return (
    <section>
      {/* search-section */}
      <div>
        <Search setSearchValue={setSearchValue} searcValue={searcValue} />
      </div>

      {/* country-cards */}
      <div>
        <ul>
          {searchCountry.map((items, idx) => (
            <CountryCard value={items} key={idx} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CountryData;
