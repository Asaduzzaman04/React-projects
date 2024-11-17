import { useState } from "react";
import useCountryData from "../../../hooks/useCountryData";
import CountryCard from "./CountryCard";
import Search from "./Search";
import Button from "./../../Button";

const CountryData = () => {
  const [searchValue, setSearchValue] = useState("");
  const [viewMoreCountry, setViewMoreCountry] = useState(true);
  const [searchFilter, setSearchFilter] = useState("all");
  const data = useCountryData();

  // Only filter if data.data is an array
  const searchCountry = Array.isArray(data?.data)
    ? data.data.filter((country) => {
        // Filter by region if searchFilter is not "all"
        const matchesRegion =
          searchFilter === "all" ||
          country.region.toLowerCase() === searchFilter.toLowerCase();

        // Check if the country name includes the search value
        const matchesSearch = country.name.common
          .toLowerCase()
          .includes(searchValue.toLowerCase());

        // Return true if both conditions are met
      
        return matchesRegion && matchesSearch;
      })
    : [];

  // View more country functionality
  const viewMore = viewMoreCountry ? searchCountry.slice(0, 20) : searchCountry;

  return (
    <section>
      {/* Search section */}
      <div>
        <Search
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
      </div>

      {/* Country cards */}
      <div className="mt-10 flex flex-col justify-center items-center">
        <ul className="grid gap-5 md:gap-7 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center">
          {viewMore.map((item, idx) => (
            <CountryCard value={item} idx={idx} key={idx} />
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
