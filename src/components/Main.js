import './Main.css';
import FiveDays from './FiveDays';
import Recent from './Recent';
import PlanetImage from './PlanetImage';
import Compare from './Compare';

function Main() {
  return (
    <div>
      <Recent />
      <FiveDays />
      <div className='background_blue'>
        <div className='row background img-fluid m-0'>
          <PlanetImage />
          <Compare />
        </div>
      </div>
    </div>
  );
}
export default Main;
