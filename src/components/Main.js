import "bootstrap/dist/css/bootstrap.min.css";
import FiveDays from "./FiveDays";
import Recent from "./Recent";

function Main() {
  return (
    <div className="container-fluid">
      <Recent />
      <FiveDays />
    </div>
  );
}
export default Main;
