import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircle,
  faCopyright,
  faMapMarkerAlt,
  faImages
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import React, { useState } from "react";
import PlanetContext from "./contexts/PlanetContext";
import CityContext from "./contexts/CityContext";

library.add(faCopyright, faCircle, faMapMarkerAlt, faImages);

function App() {
  const [isMars, setPlanet] = useState(true);
  const [city, setCity] = useState({
    city: "Aveiro",
    lat: 40.6389,
    lng: -8.6553,
  });
  const value = { isMars, setPlanet };
  const nameCity = { city, setCity };

  return (
    <div className="App">
      <PlanetContext.Provider value={value}>
        <CityContext.Provider value={nameCity}>
          <Navbar />
          <Main />
        </CityContext.Provider>
      </PlanetContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
