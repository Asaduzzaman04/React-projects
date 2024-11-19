import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { countryDetails } from "../../../services/Api";
import Loader from "./../../Loader";

const CountryDetails = () => {
  //navigation
  const navigate = useNavigate();
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

  if (isPending) return <Loader />;
  if (isError) return <p>error : {error.message}</p>;
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <section className=" h-[60vh] flex flex-col justify-center items-center">
          {data?.map((value, idx) => {
            return (
              <div
                key={idx}
                className="mt-28  group  flex justify-center items-center hover:scale-110 transition-all duration-200 ease-linear "
              >
                <div className="h-full relative  overflow-hidden rounded-tl-3xl rounded-br-3xl bg-zinc-900 border shadow  border-zinc-800 p-1   ">
                  <div className=" px-8 py-8  h-full  rounded-tl-3xl rounded-br-3xl font-semibold bg-zinc-900 text-zinc-200 backdrop-blur-xl  ">
                    {/* country cards code here */}
                    <section className=" w-full flex flex-col md:flex-row  justify-center gap-10 md:gap-16 items-start ">
                      <img
                        src={value.flags.png}
                        className="group-hover:scale-110 rounded-lg overflow-hidden transition-all duration-200 ease-linear aspect-auto"
                        alt={value.name.official}
                      />
                      <div className="flex  flex-col justify-center items-start gap-4">
                        <p>
                          <span className="text-3xl capitalize ">
                            {value.name.official}
                          </span>
                        </p>
                        <p className="text-xl capitalize">
                          sub-region: <span>{value.subregion}</span>
                        </p>
                        <p>
                          <span className=" capitalize">population </span> :{" "}
                          {"  "}
                          {value.population}
                        </p>
                        <p>
                          <span className=" capitalize ">capital</span> :{"  "}
                          {value.capital}
                        </p>
                        <p>
                          <span className=" capitalize ">
                            {" "}
                            <span>rigion</span> : {value.region}
                          </span>
                        </p>
                        <p>
                          <span className=" capitalize ">
                            {" "}
                            <span>startOfWeek</span> : {value.startOfWeek}
                          </span>
                        </p>
                        <p>
                          <span className=" capitalize ">
                            {" "}
                            <span>top label domain</span> : {value.tld}
                          </span>
                        </p>

                        <p>
                          <span className=" capitalize ">
                            {" "}
                            borders :{" "}
                            <span className="inline-flex gap-4">
                              {" "}
                              {value.borders?.map((e) => {
                                return <span key={e}>{e}</span>;
                              })}
                            </span>
                          </span>
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <button
          className=" mt-10 md:mt-14 lg:mt-20 text-xl  w-fit capitalize flex items-center justify-center  px-5 py-2  transition-colors duration-200   rounded-lg  gap-x-2 sm:w-auto hover:bg-gray-800 bg-zinc-900 "
          onClick={() => navigate(-1)}
        >
          <Link>go back</Link>
        </button>
      </div>
    </>
  );
};

export default CountryDetails;
