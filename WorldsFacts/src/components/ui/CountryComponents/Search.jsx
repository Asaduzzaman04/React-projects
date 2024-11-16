import Button from "./../../Button";
import SubcontinentsSelect from './SubcontinentsSelect';

const Search = ({setSearchValue,searcValue}) => {

//prevent form default behaviour
const hanleSubmit = (e) => {
    e.preventDefault();
  
}


  return (
    <>
      <div className=" flex flex-col-reverse md:flex-row gap-10 justify-around py-3 items-center">
        {/* form-section */}
        <form onSubmit={hanleSubmit}>
          {/* search-input */}

          <div className="relative">
            <input
            value={searcValue}
            onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search..."
              className="input shadow-lg bg-zinc-800 focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-60 outline-none"
              name="search"
              type="search"
            />
            <svg
              className="size-6 absolute top-3 right-3 text-gray-200"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </form>
        {/* acc and dec button */}
      
          <button>
            <Button text="acc" />
          </button>
          <button>
            <Button text="dec" />
          </button>
        


        {/* search-subcontinents-option */}
        <div>
            <SubcontinentsSelect/>
        </div>
      </div>
    </>
  );
};

export default Search;
