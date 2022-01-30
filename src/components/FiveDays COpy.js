import "./FiveDays.css";
import React, { useContext, useState, useEffect, useRef } from "react";
import PlanetContext from "../contexts/PlanetContext";
import CityContext from "../contexts/CityContext";

function FiveDays(props) {
  const { city, setCity } = useContext(CityContext);
  const { isMars } = useContext(PlanetContext);
  const [weekDaysEarth, setWeekDaysEarth] = useState([]);
  const [weekDaysFormat, setWeekDaysFormat] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  //const weekDaysEarth = useRef([]);
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

  if (isMars === true) {
    let weekDays = props.marsData.soles.slice(0, 5);
    var weekDaysFormat = [...weekDays];
    weekDaysFormat = weekDaysFormat.reverse();
    weekDaysFormat.forEach((day) => {
      let data = new Date(day.terrestrial_date);
      let dataFormatada = data.getDate() + " " + meses[data.getMonth()];
      day.nova_data = dataFormatada;
    });
  }
  useEffect(() => {
    if (isMars === false) {
      const key = "0ef43ea1a9f6034b92c032da2bbf99f2";
      let lat = city.lat;
      let long = city.lng;
      let dateObj = new Date();
      var arr = [];
      var n = 1;
      for (n; n <= 5; n++) {
        if (n === 1) {
          var newDateObj = dateObj.setDate(dateObj.getDate());
        } else {
          var newDateObj = dateObj.setDate(dateObj.getDate() - 1);
        }

        let formatted = parseInt(newDateObj / 1000);

        fetch(
          `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&units=metric&dt=${formatted}&appid=${key}`
        )
          .then((response) => response.json())
          .then((data) => {
            setWeekDaysEarth((weekDaysEarth) => [...weekDaysEarth, data]);
          });
      }
    }
    return setDataFormatada([]), setMin(""), setMax("");
  }, []);

  useEffect(() => {
    console.log("depois for");
    weekDaysEarth.forEach((day, index) => {
      var date = new Date(day.current.dt * 1000);
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
      }
    });
    return setDataFormatada([]), setMin(""), setMax("");
  }, [weekDaysEarth]);

  /* if (isMars === false) {
    //let firstDayEarth = props.weatherEarth; // mesmo dia da terra
    const key = "0ef43ea1a9f6034b92c032da2bbf99f2";
    let lat = city.lat;
    let long = city.lng;
    let dateObj = new Date();
    var weekDays = [];
    for (let n = 1; n <= 5; n++) {
      if (n === 1) {
        var newDateObj = dateObj.setDate(dateObj.getDate());
        var hasLoaded = false;
      } else {
        var newDateObj = dateObj.setDate(dateObj.getDate() - 1);
      }
      let formatted = parseInt(newDateObj / 1000);
      fetch(
        `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&units=metric&dt=${formatted}&appid=${key}`
      )
        .then((response) => response.json())
        .then((data) => {
          weekDays[n] = data;
          if (n === 5) {
            hasLoaded = true;
          }
        });
    }
    if (hasLoaded === true) {
      var weekDaysFormat = [];

      console.log(weekDays.length);
      weekDays.forEach((day, index) => {
        console.log("teste");
        var data = new Date(day.current.dt * 1000);
        let dataFormatada = data.getDate() + " " + meses[data.getMonth()];
        let earthHours = [];
        earthHours = day.hourly;
        var earthTemps = [];
        if (earthHours != undefined) {
          earthHours.forEach((hour) => {
            earthTemps.push(hour.temp);
          });

          //console.log("earth temps ", earthTemps);
          var min = Math.round(Math.min(...earthTemps));
          var max = Math.round(Math.max(...earthTemps));
        }
        console.log("teste");
        weekDaysFormat.push({
          terrestrial_date: dataFormatada,
          max_temp: max,
          min_temp: min,
        });
      });
    }

    console.log("final ", weekDaysFormat);
  }
 */
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
              <p> {val.nova_data}</p>
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
      </div>
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
  );
}
export default FiveDays;
