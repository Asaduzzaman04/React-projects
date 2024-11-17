import { useState } from "react";
import useCountryData from "../../../hooks/useCountryData";
import CountryCard from "./CountryCard";
import Search from "./Search";
import Button from "./../../Button";
import Loader from './../../Loader';


const CountryData = () => {
  const [searchValue, setSearchValue] = useState("");
  const [viewMoreCountry, setViewMoreCountry] = useState(true);
  const [searchFilter, setSearchFilter] = useState("all");
  const [isAccending, setIsaccending] = useState("acc");
  const data = useCountryData();
  const {error, isPending, isError} = useCountryData()
 

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

  // Sorting functionality
  const countrySorted = [...searchCountry].sort((a, b) => {
    return isAccending === "acc"
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common);
  });

  // View more country functionality

  const viewMore = viewMoreCountry ? countrySorted.slice(0, 20) : searchCountry;


  if(isPending) return <Loader/>





  return (
    <section>
      {/* Search section */}
      <div>
        <Search
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          setIsaccending={setIsaccending}
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
