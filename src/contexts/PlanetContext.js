import React from "react"

const PlanetContext = React.createContext({
  mars: true,
  setPlanet: () => {},
})

export default PlanetContext;
