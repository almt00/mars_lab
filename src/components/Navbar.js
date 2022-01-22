import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import InputCity from "./InputCity";

let navItems = ["Recente", "5 dias", "Foto", "Comparar"];

function Navbar() {
  const isMars = true;

  function showSwitch() {
    if (isMars == true) {
      return <img id="switchMars" src="switch-elements-mars.svg" alt="Switch" className="switchPlanet w-50"></img>
    } else {
      return <img id="switchEarth" src="switch-elements-earth.svg" alt="Switch" className="switchPlanet w-50"></img>
    }
  }

  /*   function switchPlanet () {
    switch (isMars) {
      case true:
        img = "switch-elements-earth.svg";
        break;
      case false:
        img = "switch-elements-mars.svg";
        break;
      default:
        break;
    }
  }; */
  return (
    <nav className="navbar navbar-expand-sm fixed-top mx-5" id="navbarNav">
      <div className="container-fluid">
        <form className="d-flex align-items-center">
          <InputCity />
        </form>
        <div>
          <ul className="navbar-nav me-auto">
            {navItems.map((item) => {
              return (
                <li className="nav-item" key={item}>
                  <a className="nav-link text-white" href="#">
                    {item}
                  </a>
                </li>
              );
            })}
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                {showSwitch()}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
