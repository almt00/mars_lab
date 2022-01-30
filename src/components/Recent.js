import './Recent.css';
import React, { useContext, useState, useEffect, useRef } from 'react';
import PlanetContext from '../contexts/PlanetContext';
import mars from './../assets/Mars.png';
import earth from './../assets/Earth.png';
import CityContext from '../contexts/CityContext';

function Recent(props) {
  //const { city, setCity } = useContext(CityContext);
  const { isMars } = useContext(PlanetContext);
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [dataFormatada, setDataFormatada] = useState('');

  const meses = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];

  useEffect(() => {
    if (isMars === true) {
      let firstDayMars = props.marsData.soles[0]; // dia marte
      setMin(firstDayMars.min_temp);
      setMax(firstDayMars.max_temp);
      var date = new Date(firstDayMars.terrestrial_date); // data formatada
      setDataFormatada(
        `${date.getDate()} ${meses[date.getMonth()]} ${date.getFullYear()}`
      );
    } else if (isMars === false) {
      let firstDayEarth = props.weatherEarth; // mesmo dia da terra
      let earthHours = [];
      earthHours = firstDayEarth.hourly;
      var earthTemps = [];
      if (earthHours != undefined) {
        earthHours.forEach(hour => {
          earthTemps.push(hour.temp);
        });
        setMin(Math.round(Math.min(...earthTemps)));
        setMax(Math.round(Math.max(...earthTemps)));
        var date = new Date(firstDayEarth.current.dt * 1000); // data formatada
        setDataFormatada(
          `${date.getDate()} ${meses[date.getMonth()]} ${date.getFullYear()}`
        );
      }
    }
  }, [isMars]);

  
  

  function order() {
    if (isMars) {
      return (
        <>
          <div className='col-7  margem_bottom text-center'>
            <div className='margem_esquerda'>
              <h1 className='titulo text-uppercase margem_top'>
                {dataFormatada}
              </h1>
              <h4 className='subtitulo text-uppercase'>
                A mãe diz para levares um casaquinho
              </h4>
            </div>
            <div className='row text-center mt-4'>
              <div className='temperaturas col-5 background-fosco m-4 me-0 ms-5'>
                <h1 className=''>
                  {min}
                  <span className='align-text-top medium'>ºC</span>
                </h1>
                <h2>Mínima</h2>
              </div>
              <div className='temperaturas col-5 background-fosco m-4 me-0'>
                <h1 className=''>
                  {max}
                  <span className='align-text-top medium'>ºC</span>
                </h1>
                <h2>Máxima</h2>
              </div>
            </div>
          </div>
          <div className='col-5 p-0 '>
            <img id='mars_bg' src={mars} className='img-fluid m-auto'></img>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className='col-5 p-0 '>
            <img id='earth_bg' src={earth} className='img-fluid m-auto'></img>
          </div>
          <div className='col-7  margem_bottom text-center'>
            <div className='margem_direita'>
              <h1 className='titulo text-uppercase margem_top'>
                {dataFormatada}
              </h1>
              <h4 className='subtitulo text-uppercase'>
                A mãe diz para levares um casaquinho
              </h4>
            </div>
            <div className='row text-center mt-4'>
              <div className='temperaturas col-5 background-fosco m-4 me-0 ms-auto'>
                <h1 className=''>
                  {min}
                  <span className='align-text-top medium'>ºC</span>
                </h1>
                <h2>Mínima</h2>
              </div>
              <div className='temperaturas col-5 background-fosco m-4 me-0 me-5'>
                <h1 className=''>
                  {max}
                  <span className='align-text-top medium'>ºC</span>
                </h1>
                <h2>Máxima</h2>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  return (
    <div id='Recente' className='row '>
      {order()}
    </div>
  );
}
export default Recent;
