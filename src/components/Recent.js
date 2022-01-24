import './Recent.css';
import mars from './../assets/Mars0169.png';


function Recent() {
  return (
    <div id='Recente' className='row '>
      <div className='col-7  margem_bottom text-center'>
        <div className='margem_esquerda'>
          <h1 className='titulo text-uppercase margem_top'>13 JAN 2022</h1>
          <h4 className='subtitulo text-uppercase'>
            A mãe diz para levares um casaquinho
          </h4>
        </div>
        <div className='row text-center mt-4'>
          <div className='temperaturas col-5 background-fosco m-4 me-0 ms-auto'>
            <h1 className=''>-95,4 <span className='align-text-top medium'>ºC</span></h1>
            <h2>Mínima</h2>
          </div>
          <div className='temperaturas col-5 background-fosco m-4 me-0'>
            <h1 className=''>-95,4 <span className='align-text-top medium'>ºC</span></h1>
            <h2>Máxima</h2>
          </div>
        </div>
      </div>
      <div className='col-5 p-0 '>
        <img id='mars_bg' src={mars} className='img-fluid m-auto'></img>
      </div>
    </div>
  );
}
export default Recent;
