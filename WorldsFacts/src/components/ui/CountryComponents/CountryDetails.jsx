import { useParams } from "react-router-dom";

const CountryDetails = () => {
    const {countryname} = useParams()
    console.log(countryname);
    return (
        <div>
            i am country detilas {countryname}
        </div>
    );
};

export default CountryDetails;