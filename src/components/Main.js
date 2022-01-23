import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";
import FiveDays from "./FiveDays";
import Recent from "./Recent";
import PlanetImage from "./PlanetImage";

function Main() {
  return (
    <div>
      <Recent />
      <FiveDays />
      <div className="background_blue">
        <div className="row background m-0">
          <PlanetImage />
        </div>
      </div>
    </div>
  );
}
export default Main;
