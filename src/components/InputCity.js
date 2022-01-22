import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InputCity() {
  const [cities, setCities] = useState([]);

  function fetchedData() {
    fetch("citiesList.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        setCities(myJson);
        console.log(cities);
      });
  }

  window.onload = function () {
    fetchedData();
  };

  return (
    <React.Fragment>
      <input
        id="inputCity"
        list="cidades"
        className="form-control-sm me-2"
        type="text"
        placeholder="Procurar Cidade"
      />
      <datalist id="cidades">
        {cities.map((element, key) => {
          return (
            <option
              key={key}
              value={`${element.city}, ${element.admin_name}`}
            />
          );
        })}
        <option value="default" />
      </datalist>
      <FontAwesomeIcon icon="map-marker-alt" size="xs" className="me-1" />
      <span>Aveiro</span>
      {/* outro componente? */}
    </React.Fragment>
  );
}
