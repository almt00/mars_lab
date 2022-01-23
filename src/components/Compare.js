import 'bootstrap/dist/css/bootstrap.min.css';
import './Compare.css';

function Compare() {
  return (
    <>
      <div className='col-6'>
        <div className='col-9'>
          <div className='text-uppercase text-start ms-5 mt-5 mb-5'>
            <h5 className=''>13 JAN 2022</h5>
            <p className=''>
              Marte é em média<span className='fw-bolder'> 60,9º celsius </span>
              mais frio que a terra
            </p>
          </div>
        </div>
        <div className='col-5 ms-5 me-0'>
          <div className=''>
            <div className='bg-dark temperaturas'>70,4ºC</div>
          </div>
        </div>
      </div>
      <div className='col-5 m-2 me-0 ms-auto mt-5'>
        <div className='col-6 float-end me-5'>
          <div className='bg-dark temperaturas'>70,4ºC</div>
        </div>
      </div>
    </>
  );
}
export default Compare;
