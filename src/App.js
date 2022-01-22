import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faCopyright, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

library.add(faCopyright, faCircle, faMapMarkerAlt)

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Footer />
    </div>
  );
}

export default App;
