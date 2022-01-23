import 'bootstrap/dist/css/bootstrap.min.css';
import './Compare.css';
import InputCity from './InputCity';
// import foto_terra from '../assets/earth_compare.png';

function Compare() {
  return (
    <>
      <div className='row'>
        <div className='col-6 margem'>
          <div className='col-9'>
            <div className='text-uppercase text-start ms-5 mt-5 mb-5'>
              <h3 className=''>13 JAN 2022</h3>
              <p>
                Marte é em média
                <span className='fw-bolder'> 60,9º celsius </span>
                mais frio que a terra
              </p>
            </div>
          </div>
          <div className='col-7 ms-5 me-0'>
            <div className='background-fosco temperaturas '>
              <h5 className='text-uppercase mb-0'>Terra</h5>
              <p>Aveiro</p>
              <div>
                <span className='m_texto'>
                  <span className='tam_letra fw-bolder'>12,5</span>
                  <span>ºC</span>
                </span>
                <span>
                  <span className='tam_letra fw-bolder'>12,5</span>
                  <span className='align-text-top'>ºC</span>
                </span>
                <p>
                  <span className='fw-bolder m_texto'>Mínima</span>
                  <span className='fw-bolder'>Máxima</span>
                </p>
              </div>
              <h1 className='fw-bolder'>
                12,5<span className='lead align-text-top'>ºC</span>
              </h1>
              <h5 className='fw-bolder'>Média</h5>
            </div>
            <div className='mt-3'>
              <InputCity />
            </div>
          </div>
        </div>
        <div className='col-5 m-2 me-0 ms-auto mt-5'>
          <div className='col-8 float-end me-5'>
            <div className='background-fosco temperaturas'>
              <h5 className='text-uppercase mb-4 mt-2'>Marte</h5>
              <div>
                <span className='m_texto'>
                  <span className='tam_letra fw-bolder'>12,5</span>
                  <span>ºC</span>
                </span>
                <span>
                  <span className='tam_letra fw-bolder'>12,5</span>
                  <span className='align-text-top'>ºC</span>
                </span>
                <p>
                  <span className='fw-bolder m_texto'>Mínima</span>
                  <span className='fw-bolder'>Máxima</span>
                </p>
              </div>
              <h1 className='fw-bolder'>
                12,5<span className='lead align-text-top'>ºC</span>
              </h1>
              <h5 className='fw-bolder mb-2'>Média</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Compare;
