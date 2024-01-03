import './App.css';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import Rout from './components/Rout';
import Footer from './components/Footer';
import HomeProduct from './components/Home_Products';

function App() {

  const [shop, setShop] = useState(HomeProduct)

  return (
    
    <>

      <BrowserRouter>

        <Nav />
        <Rout shop={shop} />
        <Footer />

      </BrowserRouter>

    </>

  )

}

export default App;