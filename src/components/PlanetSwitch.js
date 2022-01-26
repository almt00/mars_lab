import "./Navbar.css";
import switchEarth from "../assets/switch-elements-earth.svg";
import switchMars from "../assets/switch-elements-mars.svg";
import React, { useContext } from "react";
import PlanetContext from "../contexts/PlanetContext";

function PlanetSwitch() {
  const { isMars, setPlanet } = useContext(PlanetContext);

  return (
    <img
      onClick={() => {
        setPlanet(isMars == false ? true : false);
        console.log("contexto planeta ", PlanetContext);
      }}
      className="w-50"
      id="switchMars"
      src={isMars == false ? switchEarth : switchMars}
      alt="Switch"
    >
      {/* <img
        id='switchMars'
        src={isMars == true ? switchEarth : switchMars}
        alt='Switch'
        className='switchPlanet w-50'
      ></img> */}
    </img>
  );
}
export default PlanetSwitch;
