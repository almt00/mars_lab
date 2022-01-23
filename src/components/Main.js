import 'bootstrap/dist/css/bootstrap.min.css';
import FiveDays from './FiveDays';
import Recent from './Recent';
import Compare from './Compare';

function Main() {
  return (
    <div className=''>
      <Recent />
      <FiveDays />
      <div className='row'>
        <Compare />
      </div>
    </div>
  );
}
export default Main;
