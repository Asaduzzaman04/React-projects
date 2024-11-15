import { useContext } from "react";
import { CreateCountryContext } from "../context/CountryContext";

const useCountryData = () => {
  return useContext(CreateCountryContext);
};

export default useCountryData;
