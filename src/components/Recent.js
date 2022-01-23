import "bootstrap/dist/css/bootstrap.min.css";
import "./Recent.css";
import mars from "./../assets/Mars0169.png";

function Recent() {
  return (
    <div className="row">
      <div className="col-7  my-5 text-center">
        <h1 className="titulo">13 JAN 2022</h1>
        <h4 className="subtitulo">A MÃE DIZ PARA LEVARES UM CASAQUINHO</h4>
        <div className="row text-center mt-4">
          <div className="temperaturas col-5 background-fosco m-4 me-0 ms-auto">
            <h1 className="">-95,4 ºC</h1>
            <h2>Mínima</h2>
          </div>
          <div className="temperaturas col-5 background-fosco m-4 me-0">
            <h1 className="">-95,4 ºC</h1>
            <h2>Máxima</h2>
          </div>
        </div>
      </div>
      <div className="col-5 p-0 ">
        <img id="mars_bg" src={mars} className="img-fluid m-auto"></img>
      </div>
    </div>
  );
}
export default Recent;
