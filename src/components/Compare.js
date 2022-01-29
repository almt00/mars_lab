import './Compare.css';
import InputCity from './InputCity';
import PlanetContext from '../contexts/PlanetContext';
import React, { useContext } from 'react';

function Compare() {
  const { isMars } = useContext(PlanetContext);

  function searchbar() {
    if (isMars == true) {
      return <InputCity />;
    }
  }

  let classrow = 'row padding_topo pe-0';
  let classtext = 'col-6 margem';
  let classmarte = 'col-8 float-end me-5';
  if (isMars === true) {
    classrow += '';
    classtext += '';
    classmarte += '';
  } else if (isMars === false) {
    classrow += ' inverse';
    classtext += ' inverse';
    classmarte += ' inverse';
  }

  return (
    <>
      <div id='Comparar' className={classrow}>
        {/* padding_topo */}
        <div className={classtext}>
          <div className='text-uppercase text-start ms-5 mt-5 mb-5'>
            <h1 className=''>13 JAN 2022</h1>
            <h4>
              Marte é em média
              <span className='fw-bolder'> 60,9º celsius </span>
              mais frio que a terra
            </h4>
          </div>
          <div className='col-7 ms-5 me-0'>
            <div className='background-fosco temperaturas '>
              <p className='text-uppercase mb-0'>Terra</p>
              <p className='lead linha mt-2'>Aveiro</p>
              <div>
                <span className='m_texto'>
                  <span className='tam_letra'>12,5</span>
                  <span className=''>ºC</span>
                </span>
                <span>
                  <span className='tam_letra'>12,5</span>
                  <span className=''>ºC</span>
                </span>
              </div>
              <p className='linha'>
                <span className='fw-bolder m_texto smaller'>Mínima</span>
                <span className='fw-bolder smaller'>Máxima</span>
              </p>

              <h1 className='fw-bolder mt-4'>
                12,5<span className='lead align-text-top'>ºC</span>
              </h1>
              <p className='fw-bolder linha'>Média</p>
            </div>
            <div className='mt-3 text-start'>{searchbar()}</div>
          </div>
        </div>
        <div className='col-5 m-2 me-0 ms-auto mt-5 pe-0'>
          <div className={classmarte}>
            <div className='background-fosco temperaturas'>
              <p className='text-uppercase mb-4 mt-2'>Marte</p>
              <div>
                <span className='m_texto'>
                  <span className='tam_letra fw-bolder'>12,5</span>
                  <span>ºC</span>
                </span>
                <span>
                  <span className='tam_letra fw-bolder'>12,5</span>
                  <span className='align-text-top'>ºC</span>
                </span>
                <p className='linha'>
                  <span className='fw-bolder m_texto smaller'>Mínima</span>
                  <span className='fw-bolder smaller'>Máxima</span>
                </p>
              </div>
              <h1 className='fw-bolder mt-4'>
                12,5<span className='lead align-text-top'>ºC</span>
              </h1>
              <p className='fw-bolder mb-2 linha'>Média</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Compare;
