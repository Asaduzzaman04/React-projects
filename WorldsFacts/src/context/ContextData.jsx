import { useQuery } from "@tanstack/react-query";
import { CreateCountryContext } from "./CountryContext";
import { axiosCountry } from "../services/Api";

export const ContextData = ({ children }) => {

  //? fetching the country data
  const handleCountryData = async () => {
    try {
      const response = await axiosCountry();
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  // ! using tanstack for  context data
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["countryData"],
    queryFn: handleCountryData,
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    refetchInterval: 1000 * 60 * 5, // Refresh data every 5 minutes
    onError: (error, { retry }) => {
      console.error("Error fetching data:", error);
      retry();
    },
  });

  return (
    <CreateCountryContext.Provider value={{ data, error, isPending, isError }}>
      {children}
    </CreateCountryContext.Provider>
  );
};
