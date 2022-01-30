import "./FiveDays.css";
import React, { useContext, useState, useEffect, useRef } from "react";
import PlanetContext from "../contexts/PlanetContext";
import CityContext from "../contexts/CityContext";

function FiveDays(props) {
  const { city, setCity } = useContext(CityContext);
  const { isMars } = useContext(PlanetContext);
  const [weekDaysEarth, setWeekDaysEarth] = useState([]);
  const [weekDaysFormat, setWeekDaysFormat] = useState([]);

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [dataFormatada, setDataFormatada] = useState("");

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

  useEffect(() => {
    if (isMars === true) {
      let weekDays = props.marsData.soles.slice(0, 5);
      var weekDaysFormat = [...weekDays];
      weekDaysFormat = weekDaysFormat.reverse();
      weekDaysFormat.forEach((day) => {
        let data = new Date(day.terrestrial_date);
        let dataFormatada = data.getDate() + " " + meses[data.getMonth()];
        day.nova_data = dataFormatada;
      });
    } else if (isMars === false) {
      const key = "0ef43ea1a9f6034b92c032da2bbf99f2";
      let lat = city.lat;
      let long = city.lng;
      let dateObj = new Date();
      var arr = [];
      var n = 1;
      let formatted = [];

      for (n; n <= 5; n++) {
        if (n === 1) {
          var newDateObj = dateObj.setDate(dateObj.getDate());
        } else {
          var newDateObj = dateObj.setDate(dateObj.getDate() - 1);
        }
        formatted.push(parseInt(newDateObj / 1000));
        console.log(formatted);
      }

      try {
        Promise.all([
          fetch(
            `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&units=metric&dt=${formatted[1]}&appid=${key}`
          ).then((value) => value.json()),
          fetch(
            `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&units=metric&dt=${formatted[2]}&appid=${key}`
          ).then((value) => value.json()),
          fetch(
            `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&units=metric&dt=${formatted[3]}&appid=${key}`
          ).then((value) => value.json()),
          fetch(
            `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&units=metric&dt=${formatted[4]}&appid=${key}`
          ).then((value) => value.json()),
        ]).then(([day1, day2, day3, day4, day5]) => {
          console.log(day1);
          let weekDaysEarth = [day1, day2, day3, day4];
          console.log(weekDaysEarth);
          //let weekDaysFormat = [];
          weekDaysEarth.forEach((day, index) => {
            var date = new Date(day.current.dt * 1000);
            console.log(date);
            setDataFormatada(`${date.getDate()} ${meses[date.getMonth()]}`);
            let earthHours = [];
            earthHours = day.hourly;
            var earthTemps = [];
            if (earthHours != undefined) {
              earthHours.forEach((hour) => {
                earthTemps.push(hour.temp);
              });
              setMin(Math.round(Math.min(...earthTemps)));
              setMax(Math.round(Math.max(...earthTemps)));
              setWeekDaysFormat(weekDaysFormat, {
                nova_data: dataFormatada,
                max_temp: max,
                min_temp: min,
              });
            
            }
          });
        });
      } catch (err) {
        console.log(err);
      }
    }

    return setDataFormatada([]), setMin(""), setMax(""), setWeekDaysFormat([]);
  }, []);

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
        {weekDaysFormat != undefined
          ? weekDaysFormat.map((val) => {
              return (
                <div key={val.id} className="col">
                  <p> {val.nova_data}</p>
                </div>
              );
            })
          : console.log("teste")}
      </div>
      {/* maxima */}
      <div className="row align-items-center">
        <div className="col-1 pe-0">
          <p className="rotation_text lead mt-4">máxima</p>
        </div>
        {/* temperaturas */}
        {weekDaysFormat != undefined
          ? weekDaysFormat.map((val) => {
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
          : console.log("teste")}
      </div>
      {/* linha 2 */}
      {/* minima */}
      <div className="row align-items-center mt-5 margem-baixo">
        <div className="col-1 pe-0">
          <p className="rotation_text lead mt-4">minima</p>
        </div>
        {/* temperaturas */}
        {weekDaysFormat != undefined
          ? weekDaysFormat.map((val) => {
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
          : console.log("teste")}
      </div>
    </div>
  );
}
export default FiveDays;
