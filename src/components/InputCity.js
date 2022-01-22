import React from "react";
import { useEffect, useState } from "react";

export default function InputCity() {
  
  /* 
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState([]);

  const atualiza = () => {
    let valor = document.getElementById("inputCity").value;
    setSearch(valor);
  };

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
  }, [search]); 
  */

  return (
    <React.Fragment>
      <input
        id="inputCity"
        list="cidades"
        className="form-control-sm me-2 input"
        type="text"
        placeholder="Procurar Cidade"
        // onKeyUp={() => atualiza()}
      />
      <datalist id="cidades">
        {/* {cities.map((element) => {
          <option value={element.city} />;
        })} */}
        <option value="default" />
      </datalist>

      <i className="fas fa-map-marker-alt"></i>
      <span>Aveiro</span>
      {/* outro componente? */}
    </React.Fragment>
  );
}
