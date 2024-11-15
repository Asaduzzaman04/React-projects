//axios data source
import axios from "axios";

export const countryApi = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

export const axiosCountry =  () => {
  return   countryApi.get("/all");
};
