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
  let classtextmedia = 'text-uppercase mt-5 mb-5';

  if (isMars === true) {
    classrow += '';
    classtext += '';
    classmarte += '';
    classtextmedia += ' ms-5 text-start';
  } else if (isMars === false) {
    classrow += ' inverse';
    classtext += ' inverse';
    classmarte += ' inverse';
    classtextmedia += ' ms-5 me-3 text-end';
  }

  function textoTerra() {
    return (
      <div>
        <p className='text-uppercase mb-0'>Terra</p>
        <p className='lead linha mt-2'>Aveiro</p>
        <div>
          <span className='m_texto'>
            <span className='tam_letra'>7</span>
            <span className=''>ºC</span>
          </span>
          <span>
            <span className='tam_letra'>19</span>
            <span className=''>ºC</span>
          </span>
        </div>
        <p className='linha'>
          <span className='fw-bolder m_texto smaller'>Mínima</span>
          <span className='fw-bolder smaller'>Máxima</span>
        </p>

        <h1 className='fw-bolder mt-4'>
          15,8<span className='lead align-text-top'>ºC</span>
        </h1>
        <p className='fw-bolder linha'>Média</p>
      </div>
    );
  }

  function textoMarte() {
    return (
      <div>
        <p className='text-uppercase mb-4 mt-2'>Marte</p>
        <div>
          <span className='m_texto'>
            <span className='tam_letra fw-bolder'>-71</span>
            <span>ºC</span>
          </span>
          <span>
            <span className='tam_letra fw-bolder'>-3</span>
            <span className='align-text-top'>ºC</span>
          </span>
          <p className='linha'>
            <span className='fw-bolder m_texto smaller'>Mínima</span>
            <span className='fw-bolder smaller'>Máxima</span>
          </p>
        </div>
        <h1 className='fw-bolder mt-4'>
          -37<span className='lead align-text-top'>ºC</span>
        </h1>
        <p className='fw-bolder mb-2 linha'>Média</p>
      </div>
    );
  }

  return (
    <>
      <div id='Comparar' className={classrow}>
        <div className={classtext}>
          <div className={classtextmedia}>
            <h1 className=''>26 JAN 2022</h1>
            <h4>
              Marte é em média
              <span className='fw-bolder'> 52,8º celsius </span>
              mais frio que a terra
            </h4>
          </div>
          <div
            className='col-7 me-0'
            style ={ isMars ? { marginLeft: 50 } : { marginLeft: 180 }}
          >
            <div className='background-fosco temperaturas'>{ isMars ? textoTerra() : textoMarte()}</div>
            <div className='mt-3 text-start'>{searchbar()}</div>
          </div>
        </div>
        <div className='col-5 m-2 me-0 ms-auto mt-5 pe-0'>
          <div className={classmarte}>
            <div className='background-fosco temperaturas'>{isMars ? textoMarte() : textoTerra()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Compare;
