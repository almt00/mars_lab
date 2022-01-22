import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import InputCity from "./InputCity";

let navItems = ["Recente", "5 dias", "Foto", "Comparar"];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm fixed-top" id="navbarNav">
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
                <img src="switch-elements.svg" alt="Switch" className=" w-50" ></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
