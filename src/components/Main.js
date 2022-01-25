import "./Main.css";
import FiveDays from "./FiveDays";
import Recent from "./Recent";
import PlanetImage from "./PlanetImage";
import Compare from "./Compare";
import React, { useContext, useState, useEffect } from "react";
import PlanetContext from "../contexts/PlanetContext";

function Main() {
  const { isMars } = useContext(PlanetContext);
  const [marsData, setMarsData] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isMars === true) {
      fetch(
        "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json"
      )
        .then((response) => response.json())
        .then((data) => {
          setMarsData(data);
          setHasLoaded(true);
        });
    } else if (isMars === false) {
      console.log("fetch earth's weather");
    }

    return function () {
      setMarsData([]);
      setHasLoaded(false);
    };
  }, [isMars]);


  return (
    <div>
      {hasLoaded ? <Recent marsData={marsData} /> : <p></p>}
     
      <FiveDays />
      <div className="background_blue">
        <div className="row background img-fluid m-0">
          <PlanetImage />
          <Compare />
        </div>
      </div>
    </div>
  );
}

export default Main;
