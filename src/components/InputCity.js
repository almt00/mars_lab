import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import CityContext from "../contexts/CityContext";
import { parse } from "@fortawesome/fontawesome-svg-core";

export default function InputCity() {
  const { city, setCity } = useContext(CityContext);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("citiesList.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setCities(myJson);
        console.log(cities);
      });
  }, []);

  function getValue() {
    let Value = document.getElementById("inputCity").value;
    if (!Value) return;
    let id = document.querySelector('option[value="' + Value + '"]').id;
    let strCoord = id;
    let arrCoord = strCoord.split(",");
    let cityObj = {
      city: Value,
      lat: parseFloat(arrCoord[0]),
      lng: parseFloat(arrCoord[1]),
    };
    console.log(cityObj);

    // definindo o context city aqui (confirmar)// n estava a dar assim acho q e pq o metodo so define a cidade
    /* setCity(Value, parseFloat(arrCoord[0]), parseFloat(arrCoord[1]));
    console.log("contexto ", CityContext); */

    document.getElementById("showCidade").innerHTML = cityObj.city;
  }
  return (
    <>
      <form className="d-flex ms-5">
        <div className="">
          <input
            id="inputCity"
            list="cidades"
            className="form-control-sm border-0"
            type="text"
            aria-label="Search"
            placeholder="Procurar Cidade"
          />
          <button
            className="botao bg-dark text-white"
            type="button"
            onClick={() => getValue()}
          >
            Ver
          </button>
        </div>
        <datalist id="cidades">
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
        <div className=" ms-3 mt-1 me-0">
          <FontAwesomeIcon
            className="m-2"
            icon="map-marker-alt"
            size="sm"
            className="me-1"
          />
          <span id="showCidade">{city}</span>
          {console.log("state", city)}
          {/* outro componente? */}
        </div>
      </form>
    </>
  );
}
