import "./Navbar.css";
import InputCity from "./InputCity";
import React, { useContext } from "react";
import PlanetContext from "../contexts/PlanetContext";
import PlanetSwitch from "./PlanetSwitch";

function Navbar() {
  const { mars } = useContext(PlanetContext);

  let navItems = ["Recente", "5 dias", "Foto", "Comparar"];

  console.log("Navbar", mars);

  function searchbar() {
    if (mars === false) {
      return <InputCity />;
    }
  }

  return (
    <nav className="navbar fixed-top navbar-expand-sm" id="navbarNav">
      <div className="container-fluid">
        <form className="d-flex align-items-center">{searchbar()}</form>
        <div>
          <ul className="navbar-nav me-auto">
            {navItems.map((item) => {
              return (
                <li className="nav-item" key={item}>
                  <a className="nav-link text-white ms-2" href={"#" + item}>
                    {item}
                  </a>
                </li>
              );
            })}
            <li className="nav-item">
              <a className="nav-link text-white px-0" href="#">
                <PlanetSwitch />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
