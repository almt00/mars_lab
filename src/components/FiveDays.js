import 'bootstrap/dist/css/bootstrap.min.css';
import './FiveDays.css';

function FiveDays() {
  return (
    <div className='row fundo h-100 p-5'>
      {/* dias */}
      <div className='row align-items-center h-100 pt-5'>
        <div className='col-1'></div>
        <div className='col'>
          <p> 5 Jan</p>
        </div>
        <div className='col'>
          <p> 6 Jan</p>
        </div>
        <div className='col'>
          <p> 7 Jan</p>
        </div>
        <div className='col'>
          <p> 8 Jan</p>
        </div>
        <div className='col'>
          <p> 9 Jan</p>
        </div>
      </div>
      {/* maxima */}
      <div className='row align-items-center'>
        <div className='col-1'>
          <p className='temperature'>máxima</p>
        </div>
        {/* temperaturas */}
        <div className='col'>
          <div className='card background-fosco'>
            <div className='card-body'>
              <span className='textTemperature'>-70</span>
              <span className='align-top'>ºC</span>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card background-fosco'>
            <div className='card-body'>
              <span className='textTemperature'>-70</span>
              <span className='align-top'>ºC</span>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card background-fosco'>
            <div className='card-body'>
              <span className='textTemperature'>-70</span>
              <span className='align-top'>ºC</span>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card background-fosco'>
            <div className='card-body'>
              <span className='textTemperature'>-70</span>
              <span className='align-top'>ºC</span>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card background-fosco'>
            <div className='card-body'>
              <span className='textTemperature'>-70</span>
              <span className='align-top'>ºC</span>
            </div>
          </div>
        </div>
      </div>

      {/* linha 2 */}
      {/* minima */}
      <div className='row align-items-center mt-5'>
        <div className='col-1'>
          <p className='temperature'>minima</p>
        </div>
        {/* temperaturas */}
        <div className='col'>
          <div className='card background-fosco'>
            <div className='card-body'>
              <span className='textTemperature'>-70</span>
              <span className='align-top'>ºC</span>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card background-fosco'>
            <div className='card-body'>
              <span className='textTemperature'>-70</span>
              <span className='align-top'>ºC</span>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card background-fosco'>
            <div className='card-body'>
              <span className='textTemperature'>-70</span>
              <span className='align-top'>ºC</span>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card background-fosco'>
            <div className='card-body'>
              <span className='textTemperature'>-70</span>
              <span className='align-top'>ºC</span>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card background-fosco'>
            <div className='card-body'>
              <span className='textTemperature'>-70</span>
              <span className='align-top'>ºC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FiveDays;
