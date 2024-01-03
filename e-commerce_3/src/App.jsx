import './App.css';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import Rout from './components/Rout';
import Footer from './components/Footer';

function App() {

  return (
    
    <>

      <BrowserRouter>

        <Nav />
        <Rout />
        <Footer />

      </BrowserRouter>

    </>

  )

}

export default App;