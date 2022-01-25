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
        return response.json();
      })
      .then((myJson) => {
        setCities(myJson);
      });
  }, []);

  function getValue() {
    let Value = document.getElementById("inputCity").value;
    if (!Value) return;
    let id = document.querySelector('option[value="' + Value + '"]').id;
    let option = document.createElement("option");
    option.value = Value;
    option.coord = id;
    document.getElementById("showCidade").innerHTML = option.value;
    console.log(option.value, option.coord);
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
                id={`${element.lat}, ${element.lng}`}
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
          <span id="showCidade">Aveiro</span>
          {/* outro componente? */}
        </div>
      </form>
    </>
  );
}
