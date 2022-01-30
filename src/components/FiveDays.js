import "./FiveDays.css";
import React, { useContext, useState, useEffect, useRef } from "react";
import PlanetContext from "../contexts/PlanetContext";
import CityContext from "../contexts/CityContext";

function FiveDays(props) {
  const { city, setCity } = useContext(CityContext);
  const { isMars } = useContext(PlanetContext);
  //const [weekDays, setWeekDays] = useState([]);
  const [weekDaysFormatEarth, setWeekDaysFormatEarth] = useState([]);
  //const [weekDaysFormatMars, setWeekDaysFormatMars] = useState([]);

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [dataFormatadaTerra, setDataFormatadaTerra] = useState([]);
  //const dataFormatadaTerra = useRef([]);

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

  var dateArr = [];
  if (isMars === true) {
    var weekDays = props.marsData.soles.slice(0, 5);
    var weekFormat = [...weekDays];
    var data_formatada = undefined;
    var weekDaysFormatMars = weekFormat.reverse();
    weekDaysFormatMars.forEach((day) => {
      let data = new Date(day.terrestrial_date);
      data_formatada = data.getDate() + " " + meses[data.getMonth()];
      day.nova_data = data_formatada;
    });
  }
  if (isMars === false) {
    // var key = "WS78JUZN3S6EF3KQZNQZ8KR2R";
    var key = 'K9RF8PG63J8YM7YXRHQ4F56E7';
    var cidade = city.city;
    let lat = city.lat;
    let long = city.lng;
    let dateObj = new Date();

    var diaHoje =
      dateObj.getFullYear() +
      "-" +
      (dateObj.getMonth() + 1) +
      "-" +
      dateObj.getDate();

    var ultimoDia =
      dateObj.getFullYear() +
      "-" +
      (dateObj.getMonth() + 1) +
      "-" +
      (dateObj.getDate() - 4);
  }
  useEffect(() => {
    if (isMars === false) {
      fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cidade}/${ultimoDia}/${diaHoje}?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Cname%2Caddress%2Clatitude%2Clongitude%2Ctempmax%2Ctempmin%2Ctemp&include=days&key=${key}&contentType=json`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeekDaysFormatEarth(data.days);
          console.log(data);
        });

      setDataFormatadaTerra(dateArr);
    }
    
    return (
      setWeekDaysFormatEarth([]),
      setMin(""),
      setMax(""),
      setDataFormatadaTerra([])
    );
  }, [cidade]);

  
  function displayDays() {
    weekDaysFormatEarth.map((day) => {
      let data = new Date(day.datetime);
      let data_formatada = data.getDate() + " " + meses[data.getMonth()];
      dateArr.push(data_formatada);
      console.log(dateArr);
    });

    console.log(dateArr);
    return dateArr.map((val, key) => {
      return (
        <div key={key} className="col">
          <p> {val}</p>
        </div>
      );
    });
  }

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
        {isMars === true
          ? weekDaysFormatMars.map((val) => {
              return (
                <div key={val.id} className="col">
                  <p> {val.nova_data}</p>
                </div>
              );
            })
          : displayDays()}
      </div>
      {/* maxima */}
      <div className="row align-items-center">
        <div className="col-1 pe-0">
          <p className="rotation_text lead mt-4">máxima</p>
        </div>
        {/* temperaturas */}
        {isMars === true
          ? weekDaysFormatMars.map((val) => {
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
            })
          : weekDaysFormatEarth.map((val, key) => {
              return (
                <div key={key} className="col">
                  <div className="card background-fosco">
                    <div className="card-body">
                      <span className="textTemperature">{val.tempmax}</span>
                      <span className="align-top">ºC</span>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      {/* linha 2 */}
      {/* minima */}
      <div className="row align-items-center mt-5 margem-baixo">
        <div className="col-1 pe-0">
          <p className="rotation_text lead mt-4">mínima</p>
        </div>
        {/* temperaturas */}
        {isMars == true
          ? weekDaysFormatMars.map((val) => {
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
            })
          : weekDaysFormatEarth.map((val, key) => {
              return (
                <div key={key} className="col">
                  <div className="card background-fosco">
                    <div className="card-body">
                      <span className="textTemperature">{val.tempmin}</span>
                      <span className="align-top">ºC</span>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
export default FiveDays;
