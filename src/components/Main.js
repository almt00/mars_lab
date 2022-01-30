import "./Main.css";
import FiveDays from "./FiveDays";
import Recent from "./Recent";
import PlanetImage from "./PlanetImage";
import Compare from "./Compare";
import React, { useContext, useState, useEffect } from "react";
import PlanetContext from "../contexts/PlanetContext";
import CityContext from "../contexts/CityContext";

function Main() {
  const { isMars } = useContext(PlanetContext);
  const { city, setCity } = useContext(CityContext);
  const [marsData, setMarsData] = useState([]);
  const [weatherEarth, setWeatherEarth] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    fetch(
      "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json"
    )
      .then((response) => response.json())
      .then((data) => {
        setMarsData(data);
        console.log(data);
        setHasLoaded(true);
      });

    if (isMars === false) {
      const key = "0ef43ea1a9f6034b92c032da2bbf99f2";
      let lat = city.lat;
      let long = city.lng;
      if (hasLoaded === true) {
        let marsTime = marsData.soles[0].terrestrial_date;

        let today = new Date();
        //console.log("diferença ",dif);
        var date = Date.parse(today) / 1000;

        // console.log(date);
      } else {
        var date = "1643108104";
      }
      //console.log("fetch terra");
      fetch(
        `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&units=metric&dt=${date}&appid=${key}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherEarth(data);
          setHasLoaded(true);
        });
    }

    return function () {
      setMarsData([]);
      setHasLoaded(false);
    };
  }, [isMars, city]);

  function fetchedBlue() {
    if (hasLoaded === true && isMars === true) {
      return (
        <>
          <PlanetImage marsData={marsData} />
          <Compare />
        </>
      );
    } else if (hasLoaded === true && isMars === false) {
      return (
        <>
          <PlanetImage />
          <Compare />
        </>
      );
    }
  }

  function fetched() {
    if (hasLoaded === true && isMars === true) {
      console.log(marsData);
      return (
        <>
          <Recent marsData={marsData} />
          <FiveDays marsData={marsData} />
        </>
      );
    } else if (hasLoaded === true && isMars === false) {
      return (
        <>
          <Recent weatherEarth={weatherEarth} />
          <FiveDays weatherEarth={weatherEarth} />
        </>
      );
    }
  }

  let classname = "row img-fluid m-0 ";
  if (isMars === true) {
    classname += "background_marte";
  } else if (isMars === false) {
    classname += "background_terra";
  }

  return (
    <div>
      {fetched()}
      <div className="background_blue">
        <div className={classname}>{fetchedBlue()}</div>
      </div>
    </div>
  );
}

export default Main;
