import { useState } from "react";
import useCountryData from "../../../hooks/useCountryData";
import CountryCard from "./CountryCard";
import Search from "./Search";
import Button from "./../../Button";

const CountryData = () => {
  const [searcValue, setSearchValue] = useState(""); // Initialize as an empty string
  const [viewMoreCountry, setViewMoreCountry] = useState(true); // Initialize as an empty array
  const data = useCountryData();

  // Only filter if data.data is an array
  const searchCountry = Array.isArray(data?.data)
    ? data.data.filter((item) =>
        item.name.common.toLowerCase().includes(searcValue.toLowerCase())
      )
    : [];

  //view more country functions
  const viewMore = viewMoreCountry ? searchCountry.slice(0, 20) : searchCountry;

  return (
    <section>
      {/* search-section */}
      <div>
        <Search setSearchValue={setSearchValue} searcValue={searcValue} />
      </div>

      {/* country-cards */}
      <div className="mt-10 flex flex-col justify-center items-center">
        <ul className="grid  gap-5 md:gap-7 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 justify-center items-center">
          {viewMore.map((items, idx) => (
            <CountryCard value={items} idx={idx} key={idx} />
          ))}
        </ul>
        <button
          className="mt-10"
          onClick={() => setViewMoreCountry(!viewMoreCountry)}
        >
          <Button text={`${viewMoreCountry ? "View More" : "View Less"}`} />
        </button>
      </div>
    </section>
  );
};

export default CountryData;
