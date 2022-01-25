import './PlanetImage.css';

import React, { useState, useEffect } from 'react';

function PlanetImage() {
  const [photosMars, setPhotoMars] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    let date = '2020-9-12';
    let key = '6V8udqVw619d0m4Cz925WdHBziNALmaeNrel8Jc8';
    fetch(
      // `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?&api_key=6V8udqVw619d0m4Cz925WdHBziNALmaeNrel8Jc8`
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${key}`
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
    <>
      <div>
        {load === true ? (
          photosMars.photos.length > 0 ? (
            <div id='Foto' className='col-8 text-center'>
              <div className='retangulo_imagem me-auto ms-0'>
                <img
                  style={{ width: 400 }}
                  src={photosMars.photos[0].img_src}
                  className='img-fluid'
                ></img>
              </div>
            </div>
          ) : (
            <div>Não há resultados</div>
          )
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
export default PlanetImage;
