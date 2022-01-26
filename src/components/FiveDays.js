import "./FiveDays.css";
import React, { useContext, useState, useEffect } from "react";
import PlanetContext from "../contexts/PlanetContext";

function FiveDays(props) {
  const { isMars } = useContext(PlanetContext);
  let weekDays = props.marsData.soles.slice(0, 5);
  let weekDaysFormat = [...weekDays].reverse();
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
  weekDaysFormat.forEach((day) => {
    let data = new Date(day.terrestrial_date);
    let dataFormatada = data.getDate() + " " + meses[data.getMonth()];
    day.terrestrial_date = dataFormatada;
  });

  let classname = "row h-100 p-5 ";
  if (isMars === true) {
    classname += "fundo-mars";
  } else if (isMars === false) {
    classname += "fundo-earth";
  }

  return (
    <div id="5 dias" className={classname}>
      {/* dias */}
      <div className="row align-items-center h-100 padding_cima">
        <div className="col-1"></div>
        {weekDaysFormat.map((val) => {
          return (
            <div key={val.id} className="col">
              <p> {val.terrestrial_date}</p>
            </div>
          );
        })}
      </div>
      {/* maxima */}
      <div className="row align-items-center">
        <div className="col-1 pe-0">
          <p className="rotation_text lead mt-4">máxima</p>
        </div>
        {/* temperaturas */}
        {weekDaysFormat.map((val) => {
          return (
            <div key={val.id} className="col">
              <div className="card background-fosco">
                <div className="card-body">
                  <span className="textTemperature">{val.max_temp}</span>
                  <span className="align-top">ºC</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* linha 2 */}
        {/* minima */}
        <div className="row align-items-center mt-5 margem-baixo">
          <div className="col-1 pe-0">
            <p className="rotation_text lead mt-4">minima</p>
          </div>
          {/* temperaturas */}
          {weekDaysFormat.map((val) => {
            return (
              <div key={val.id} className="col">
                <div className="card background-fosco">
                  <div className="card-body">
                    <span className="textTemperature">{val.min_temp}</span>
                    <span className="align-top">ºC</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default FiveDays;
