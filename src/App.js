import Menu from './Components/Menu';
import Routes from './Routes';
import Footer from './Components/Footer'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Menu />
        <Routes />
        <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;

