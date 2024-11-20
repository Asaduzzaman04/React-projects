import { Suspense } from "react";
import React from "react";
import { ContextData } from "../context/ContextData";
import Loader from "../components/Loader";
const CountryData = React.lazy(() =>
  import("./../components/ui/CountryComponents/CountryData")
);

const Country = () => {
  return (
    <>
      <section className="px-5  md:px-[2%] lg:px-[4%] py-4 md:py-[1%] ">
        <ContextData>
          <section className="mt-20  lg:mt-16">
            <Suspense fallback={<Loader />}>
              <CountryData />
            </Suspense>
          </section>
        </ContextData>
      </section>
    </>
  );
};

export default Country;
