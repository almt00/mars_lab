import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InputCity() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
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
  }, []);

  function getValue() {
    let Value = document.getElementById("inputCity").value;
    if (!Value) return;
    let id = document.querySelector('option[value="' + Value + '"]').id;
    let option = document.createElement("option");
    option.value = Value;
    option.coord = id;
    document.getElementById('showCidade').innerHTML=option.value;
    console.log(option.value, option.coord);
  }

  return (
    <div className="row">
      <div className="col-8">
        <input
          id="inputCity"
          list="cidades"
          className="form-control-sm border-0"
          type="text"
          placeholder="Procurar Cidade"
        ></input>
        <button
          className="btn btn-sm text-white"
          type="button"
          onClick={() => getValue()}
        >
          Ver
        </button>
        <datalist id="cidades">
          {cities.map((element, key) => {
            return (
              <option
                key={key}
                id={`${element.lat}, ${element.lng}`}
                value={`${element.city}`}
              >
                {element.admin_name}
              </option>
            );
          })}
        </datalist>
      </div>
      <div className="col-4 ms-auto me-0">
        <FontAwesomeIcon
          className=" m-2"
          icon="map-marker-alt"
          size="sm"
          className="me-1"
        />
        <span id="showCidade">Aveiro</span>
        {/* outro componente? */}
      </div>
    </div>
  );
}
