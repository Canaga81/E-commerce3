import './App.css';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import Rout from './components/Rout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Rout />
      </BrowserRouter>
    </>
  )
}

export default App;