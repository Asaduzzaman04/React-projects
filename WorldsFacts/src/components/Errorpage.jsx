import { useNavigate } from "react-router-dom";
import error from "../assets/sounds/error-sound-39539.mp3";

const Errorpage = () => {
  const nvaigation = useNavigate();

  const handleNavigate = () => {
    nvaigation(-1);
  };

  return (
    <div>
      <audio src={error} />
      <h1>Oops! Something went wrong.</h1>
      <p>Please try again or contact support.</p>
      <button onClick={() => window.location.reload()}>Refresh</button>

        
      <button className="border px-3 py-2" onClick={handleNavigate}>
        go back
      </button>
    </div>
  );
};

export default Errorpage;
