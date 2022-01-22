import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faCopyright} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Footer from './components/Footer';

library.add(faCopyright, faCircle)

function App() {
  return (
    <div className='App'>
      <Footer />
    </div>
  );
}

export default App;
