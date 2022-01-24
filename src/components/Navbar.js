import './Navbar.css';
import InputCity from './InputCity';
import switchEarth from '../assets/switch-elements-earth.svg';
import switchMars from '../assets/switch-elements-mars.svg';

function Navbar() {
  let navItems = ['Recente', '5 dias', 'Foto', 'Comparar'];
  const isMars = true;

  function showSwitch() {
    if (isMars == true) {
      return (
        <img
          id='switchMars'
          src={switchEarth}
          alt='Switch'
          className='switchPlanet w-50'
        ></img>
      );
    } else {
      return (
        <img
          id='switchEarth'
          src={switchMars}
          alt='Switch'
          className='switchPlanet w-50'
        ></img>
      );
    }
  }

  function searchbar() {
    if (isMars === false) {
      return <InputCity />;
    }
  }

  return (
    <nav className='navbar fixed-top navbar-expand-sm' id='navbarNav'>
      <div className='container-fluid'>
        <form className='d-flex align-items-center'>{searchbar()}</form>
        <div>
          <ul className='navbar-nav me-auto'>
            {navItems.map(item => {
              return (
                <li className='nav-item' key={item}>
                  <a className='nav-link text-white ms-2' href={'#' + item}>
                    {item}
                  </a>
                </li>
              );
            })}
            <li className='nav-item'>
              <a className='nav-link text-white px-0' href='#'>
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
