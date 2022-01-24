import './Navbar.css';
import switchEarth from '../assets/switch-elements-earth.svg';
import switchMars from '../assets/switch-elements-mars.svg';
import React, { useContext } from 'react';
import PlanetContext from '../contexts/PlanetContext';

function PlanetSwitch() {
  const { mars, setPlanet } = useContext(PlanetContext);
  console.log(mars, 'switch');

  return (
    <img
      onClick={() => setPlanet(mars == false ? true : false)}
      className='w-50'
      id='switchMars'
      src={mars == false ? switchEarth : switchMars}
      alt='Switch'
    >
      {/* <img
        id='switchMars'
        src={mars == true ? switchEarth : switchMars}
        alt='Switch'
        className='switchPlanet w-50'
      ></img> */}
    </img>
  );
}
export default PlanetSwitch;
