import React, { useContext, useState, useEffect } from 'react';
import './PlanetImage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlanetContext from '../contexts/PlanetContext';
import CityContext from '../contexts/CityContext';

function PlanetImage(props) {
  const { city, setCity } = useContext(CityContext);
  const [photosMars, setPhotoMars] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [places, setPlaces] = useState([]);
  const { isMars } = useContext(PlanetContext);

  console.log('Foto marte', isMars); //true 4x
  useEffect(() => {
    console.log('Foto dentro marte', isMars); //true
    if (isMars) {
      let data = props.marsData.soles[0];
      let key = '6V8udqVw619d0m4Cz925WdHBziNALmaeNrel8Jc8';
      fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${data.terrestrial_date}&api_key=${key}`
      )
        .then(response => {
          return response.json();
        })
        .then(response => {
          setPhotoMars(response);
          setHasLoaded(true);
          console.log('resposta', response);
        });
    } else {
      let key = 'AIzaSyAB3BY_anb29pc19gFLjlM4ReUrcJijhsg';
      let url = 'https://maps.googleapis.com/maps/api/place';
      fetch(
        `${url}/findplacefromtext/json?fields=formatted_address%2Cphotos&input=${city.city}&inputtype=textquery&key=${key}`
      )
        .then(response => response.json())
        .then(data => {
          setHasLoaded(true);
          const reference = data.candidates[0].photos[0].photo_reference;
          console.log('ref', reference);
          return fetch(
            `${url}/photo?maxwidth=400&maxwidth=400&photo_reference=${reference}&key=${key}`
          );
        })
        .then(response => response.blob())
        .then(imageBlob => {
          // Then create a local URL for that image and print it
          const imageObjectURL = URL.createObjectURL(imageBlob);
          console.log(imageObjectURL);
          setPlaces(imageObjectURL);
          setHasLoaded(true);
        });
    }
    return function () {
      setPhotoMars([]);
      setHasLoaded(false);
    };
  }, [isMars, city]);

  function defaultPhoto() {
    return (
      <div
        className='background-fosco text-center d-flex justify-content-center align-items-center'
        style={{
          borderRadius: 0,
          width: 550,
          height: 400,
        }}
      >
        <div>
          <div>
            <FontAwesomeIcon
              className='m-2'
              icon='images'
              size='7x'
              className='me-1'
            />
            <p className='pt-5'>Não há fotos disponíveis deste dia em Marte.</p>
          </div>
        </div>
      </div>
    );
  }

  function showPhoto() {
    if (hasLoaded) {
      if (isMars) {
        if (photosMars.photos !== undefined) {
          if (photosMars.photos.length > 0) {
            return (
              <div
                style={{
                  backgroundImage: `url(${photosMars.photos[0].img_src})`,
                  width: 550,
                  height: 400,
                  backgroundSize: 'cover',
                }}
              ></div>
            );
          } else {
            return defaultPhoto();
          }
        }
      } else {
        return (
          <div
            style={{
              backgroundImage: `url(${places})`,
              width: 550,
              height: 400,
              backgroundSize: 'cover',
            }}
          ></div>
        );
      }
    }
  }

  return (
    <>
      <div
        id='Foto'
        className='text-center pt-3 col-8'
        style={ isMars ? { marginLeft: 0 } : { marginLeft: 300 } }
      >
        <div className='retangulo_imagem me-auto ms-0'>
          <div>{showPhoto()}</div>
        </div>
      </div>
    </>
  );
}

export default PlanetImage;
