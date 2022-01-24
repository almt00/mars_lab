import './PlanetImage.css';
import foto_marte from '../assets/foto_marte_dummie.png';

function PlanetImage() {
  return (
    <>
      <div id='Foto' className='col-8 text-center'>
        <div className='retangulo_imagem me-auto ms-0'>
          <img src={foto_marte} className='img-fluid'></img>
        </div>
      </div>
    </>
  );
}
export default PlanetImage;
