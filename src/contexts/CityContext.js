import React from "react";

const CityContext = React.createContext({
  city: { city: "Aveiro", lat: 40.6389, lng: -8.6553 }, // opcional
  setCity: () => {},
});

export default CityContext;
