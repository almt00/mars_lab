import './Navbar.css';
import InputCity from './InputCity';
import React, { useContext } from 'react';
import PlanetContext from '../contexts/PlanetContext';
import PlanetSwitch from './PlanetSwitch';

function Navbar() {
  const { isMars } = useContext(PlanetContext);

  let navItems = ['Recente', '5 dias', 'Foto', 'Comparar'];

  function searchbar() {
    if (isMars === false) {
      return <InputCity />;
    }
  }

  return (
    <>
      <nav className='navbar fixed-top navbar-expand-sm' id='navbarNav'>
        <div className='container-fluid'>
          <div>{searchbar()}</div>
          <div>
            <ul className='navbar-nav me-auto d-flex mt-1'>
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
                  <PlanetSwitch />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
