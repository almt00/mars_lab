import "./FiveDays.css";

function FiveDays(props) {
  const weekDays = props.marsData.soles.slice(0, 5);
  console.log(weekDays);
  return (
    <div id="5 dias" className="row fundo h-100 p-5">
      {/* dias */}
      <div className="row align-items-center h-100 padding_cima">
        <div className="col-1"></div>
        {weekDays.map((val) => {
          return (
            <div key={val.id} className="col">
              <p> {val.terrestrial_date}</p>
            </div>
          );
        })}
      </div>
      {/* maxima */}
      <div className="row align-items-center">
        <div className="col-1 pe-0">
          <p className="rotation_text lead mt-4">máxima</p>
        </div>
        {/* temperaturas */}
        {weekDays.map((val) => {
          return (
            <div key={val.id} className="col">
              <div className="card background-fosco">
                <div className="card-body">
                  <span className="textTemperature">{val.max_temp}</span>
                  <span className="align-top">ºC</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* linha 2 */}
        {/* minima */}
        <div className="row align-items-center mt-5 margem-baixo">
          <div className="col-1 pe-0">
            <p className="rotation_text lead mt-4">minima</p>
          </div>
          {/* temperaturas */}
          {weekDays.map((val) => {
            return (
              <div key={val.id} className="col">
                <div className="card background-fosco">
                  <div className="card-body">
                    <span className="textTemperature">{val.min_temp}</span>
                    <span className="align-top">ºC</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default FiveDays;
