import "./Recent.css";
import React, { useContext, useState, useEffect } from "react";
import PlanetContext from "../contexts/PlanetContext";
import mars from "./../assets/Mars0169.png";

function Recent(props) {
  const { isMars } = useContext(PlanetContext);
  const meses = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  if (isMars === true) {
    let firstDayMars = props.marsData.soles[0]; // dia marte
    var min = firstDayMars.min_temp;
    var max = firstDayMars.max_temp;
    var data = new Date(firstDayMars.terrestrial_date); // data formatada
    var dataFormatada = `${data.getDate()} ${
      meses[data.getMonth()]
    } ${data.getFullYear()}`;
  } else if (isMars === false) {
    let firstDayEarth = props.weatherEarth; // mesmo dia da terra
    //console.log("props ", firstDayEarth);
    let earthHours = [];
    earthHours = firstDayEarth.hourly;
    //console.log("earth hours ", earthHours);
    var earthTemps = [];

    if (earthHours != undefined) {
      earthHours.forEach((hour) => {
        earthTemps.push(hour.temp);
      });

      //console.log("earth temps ", earthTemps);
      var min = Math.round(Math.min(...earthTemps));
      var max = Math.round(Math.max(...earthTemps));
      //console.log(min, max);
      var data = new Date(firstDayEarth.current.dt * 1000); // data formatada
      //console.log(data);
      var dataFormatada = `${data.getDate()} ${
        meses[data.getMonth()]
      } ${data.getFullYear()}`;
    }
  }

  return (
    <div id="Recente" className="row ">
      <div className="col-7  margem_bottom text-center">
        <div className="margem_esquerda">
          <h1 className="titulo text-uppercase margem_top">{dataFormatada}</h1>
          <h4 className="subtitulo text-uppercase">
            A mãe diz para levares um casaquinho
          </h4>
        </div>
        <div className="row text-center mt-4">
          <div className="temperaturas col-5 background-fosco m-4 me-0 ms-auto">
            <h1 className="">
              {min}
              <span className="align-text-top medium">ºC</span>
            </h1>
            <h2>Mínima</h2>
          </div>
          <div className="temperaturas col-5 background-fosco m-4 me-0">
            <h1 className="">
              {max}
              <span className="align-text-top medium">ºC</span>
            </h1>
            <h2>Máxima</h2>
          </div>
        </div>
      </div>
      <div className="col-5 p-0 ">
        <img id="mars_bg" src={mars} className="img-fluid m-auto"></img>
      </div>
    </div>
  );
}
export default Recent;
