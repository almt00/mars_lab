import './Main.css';
import FiveDays from './FiveDays';
import Recent from './Recent';
import PlanetImage from './PlanetImage';
import Compare from './Compare';
import React, { useContext } from "react"
import PlanetContext from "../contexts/PlanetContext"


function Main() {

  const { mars } = useContext(PlanetContext)

  console.log('Main', mars)


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
