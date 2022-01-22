import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className='back letter d-flex align-items-center justify-content-end'>
      <div className='pe-5'>
        <FontAwesomeIcon icon='copyright' size='xs' />
        <span className='p-1'>2022</span>
        <span className='ps-1 pe-3'>Lab 5</span>
        <FontAwesomeIcon icon='circle' className='sizeCircle' />
        <span className='p-3'>Ana Luísa Teixeira</span>
        <FontAwesomeIcon icon='circle' className='sizeCircle' />
        <span className='ps-3'>Mariana Alves</span>
      </div>
    </footer>
  );
}
export default Footer;
