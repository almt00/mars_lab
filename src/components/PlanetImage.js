import React, { useContext, useState, useEffect } from 'react';
import './PlanetImage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlanetContext from '../contexts/PlanetContext';

function PlanetImage() {
  const [photosMars, setPhotoMars] = useState([]);
  const [load, setLoad] = useState(false);
  const [marsData, setMarsData] = useState([]);
  const [places, setPlaces] = useState([]);

  const { isMars } = useContext(PlanetContext);

  let key = 'AIzaSyAB3BY_anb29pc19gFLjlM4ReUrcJijhsg';
  let cidade = 'Aveiro';
  // Quero preparar o comp fotos para receber 2 fetches (inspiro-me no que a Ana fez no comp 5 dias)

  useEffect(() => {
    if (isMars === true) {
      let date = '2020-10-12';
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
      // } else if (isMars === false) {
      //   console.log("fetch earth's photo");

      //   let reference =
      //     'Aap_uEBEdr4Mzvxp6W7yOx8pcBbaFA9mPxHjbN57-RxmXBYaBVlGx557KbYzwBmWKMY7ENeaq4ismJ9h4pFYexgHgvB7QheZL7LUXABqEVOph9jAw7EsCSlTTalNnl-fHD-60SCAEv7gJijDj_EtPxg3PaVdWzN2-hU4F-3LGoNx5BxK4EaE';
      //   Promise.all([
      //     fetch(
      //       `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cphotos&input=${cidade}&inputtype=textquery&key=${key}`
      //     ),

      //     fetch(
      //       `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxwidth=400&photo_reference=${reference}&key=${key}`
      //     ),
      //   ])
      //     .then(([res1, res2]) => Promise.all([res1.json(), res2.blob()]))
      //     .then(([data, imageBlob]) => {
      //       console.log(data.candidates[0].photos[0].photo_reference);
      //       const imageObjectURL = URL.createObjectURL(imageBlob);
      //       console.log(imageObjectURL);
      //       setPlaces(imageObjectURL);
      //       setLoad(true);
      //     });
      // }
      return function () {
        setPhotoMars([]);
        setLoad(false);
        // setPlaces([]);
      };
    }
  }, [isMars]);

  // Quero colocar o default a aparecer outro codigo html

  return (
    <>
      {/* Se load fetch === true ? verifica se o array de fotos é maior que 0 ? Se sim render da foto. Se não diz não há fotos.
    Caso load for falso não dá nada  */}
      <div>
        <div id='Foto' className='col-8 text-center pt-3'>
          <div className='retangulo_imagem me-auto ms-0'>
            {load === true ? (
              photosMars.photos.length > 0 ? (
                <div
                  className='inverseMatriz'
                  style={{
                    width: 550,
                    height: 400,
                    backgroundSize: 'cover',
                    backgroundImage: `url(${photosMars.photos[0].img_src})`,
                  }}
                ></div>
              ) : (
                <div
                  className='background-fosco text-center d-flex justify-content-center align-items-center'
                  style={{
                    borderRadius: 0,
                    width: 550,
                    height: 400,
                  }}
                >
                  <div className='inverseMatriz '>
                    <div>
                      <FontAwesomeIcon
                        className='m-2'
                        icon='images'
                        size='7x'
                        className='me-1'
                      />
                      <p className='pt-5'>
                        Não há fotos disponíveis deste dia em Marte.
                      </p>
                    </div>
                  </div>
                </div>
              )
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default PlanetImage;
