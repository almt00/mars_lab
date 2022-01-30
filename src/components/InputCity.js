import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import CityContext from '../contexts/CityContext';
import PlanetContext from '../contexts/PlanetContext';

export default function InputCity() {

  const { isMars } = useContext(PlanetContext);
  const { city, setCity } = useContext(CityContext);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch('citiesList.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        setCities(myJson);
      });
      return setCities ([])
  }, []);

  function getValue() {
    let Value = document.getElementById('inputCity').value;
    if (!Value) return;
    let id = document.querySelector('option[value="' + Value + '"]').id;
    let strCoord = id;
    let arrCoord = strCoord.split(',');

    setCity({
      city: Value,
      lat: parseFloat(arrCoord[0]),
      lng: parseFloat(arrCoord[1]),
    });
  }

  let classname = 'd-flex';
  if (isMars === true) {
    classname += ' ms-1';
  } else {
    classname += ' ms-5';
  }
  return (
    <>
      <form className={classname}>
        <div className=''>
          <input
            id='inputCity'
            list='cidades'
            className='form-control-sm border-0'
            type='text'
            aria-label='Search'
            placeholder='Procurar Cidade'
          />
          <button
            className='botao bg-dark text-white'
            type='button'
            onClick={() => getValue()}
          >
            Ver
          </button>
        </div>
        <datalist id='cidades'>
          {cities.map((element, key) => {
            return (
              <option
                key={key}
                id={`${element.lat},${element.lng}`}
                value={`${element.city}`}
              >
                {element.admin_name}
              </option>
            );
          })}
        </datalist>
        <div className=' ms-3 mt-1 me-0'>
          <FontAwesomeIcon
            className='m-2'
            icon='map-marker-alt'
            size='sm'
            className='me-1'
          />
          <span id='showCidade'>{city.city}</span>
        </div>
      </form>
    </>
  );
}
