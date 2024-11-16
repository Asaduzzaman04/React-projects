import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { countryDetails } from "../../../services/Api";

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

  if (isPending) return <div>Loading...</div>;
  return <div>i am country detilas {countryname}</div>;
};

export default CountryDetails;
