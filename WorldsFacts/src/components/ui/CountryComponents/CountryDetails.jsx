import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { countryDetails } from "../../../services/Api";
import Loader from './../../Loader';

const CountryDetails = () => {
  // Get the country name from the route parameters
  const { countryname } = useParams();

  // Fetch the country details from the API when the component mounts
  const handleDetails = async () => {
    try {
      const response = await countryDetails(countryname);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const { data, isError, isPending, error } = useQuery({
    queryKey: ["countrydetails", countryname],
    queryFn: handleDetails,
    staleTime: 1000 * 60 * 30, // Cache data for 30 minutes
  });

//!code start from here

  if (isPending) return <Loader/>
  return (
    <>
    <section className="border-t-2">
      <div className="mt-20 border-t-2">
      <h1 className="text-3xl capitalize  font-semibold">{data.name}</h1>
      <div className="flex flex-col justify-center items-start gap-4">
        <p>
          <span className="capitalize text-xl">capital</span> : {data.capital}
        </p>
        <p>
          <span className="capitalize text-xl">population</span> : {data.population}
        </p>
        {/* Add more details as needed */}
      </div>
      </div>
    </section>
    </>
  )
};

export default CountryDetails;
