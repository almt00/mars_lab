import React from "react"

const PlanetContext = React.createContext({
  isMars: true,
  setPlanet: () => {},
})

export default PlanetContext;
