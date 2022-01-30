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
      }}
      className="w-50"
      id="switchMars"
      src={isMars == false ? switchEarth : switchMars}
      alt="Switch"
    >
    </img>
  );
}
export default PlanetSwitch;
