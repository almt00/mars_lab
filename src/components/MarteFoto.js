
// import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [photosMars, setPhotoMars] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // let date = '2020-9-12';
    let key = '6V8udqVw619d0m4Cz925WdHBziNALmaeNrel8Jc8'
    fetch(
      // `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?&api_key=6V8udqVw619d0m4Cz925WdHBziNALmaeNrel8Jc8`
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${key}`
    )
      .then(response => {
        return response.json();
      })
      .then(response => {
        setPhotoMars(response);
        setLoad(true);
        console.log(response);
      });
  }, []);

  return (
    <div>
      {load === true ? (
        photosMars.photos.length > 0 ? (
          
          <img style={{ width: 500 }} src={photosMars.photos[0].img_src}></img>
        ) : (
          <div>Não há resultados</div>
        )
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
