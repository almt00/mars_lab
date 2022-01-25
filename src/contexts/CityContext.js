import React from 'react';

const CityContext = React.createContext({
  city: 'Aveiro',
  lat: '40.6389',
  lng: '-8.6553',
  setCity: () => {},
});

export default CityContext;
