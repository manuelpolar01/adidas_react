import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConteiner from './componentes/ItemListConteiner'
import NavbarBootstrap from './componentes/NavbarBootstrap';
import ItemDetailConteiner from './componentes/ItemDetailConteiner';
import {BrowserRouter,Routes,Route} from "react-router-dom";
//se llama al provedor que seria cartprovider para dar acceso alos componentes
import { CartProvider } from './context/CartContext';
import Cart from './componentes/Cart';
import Checkout from './componentes/Checkout';
import CheckoutHookForm from './componentes/CheckoutHookForm';





function App() {
 

  return (

    <BrowserRouter>
    <CartProvider>
      <NavbarBootstrap/>
        <Routes>
                <Route path='/'element={<ItemListConteiner greeting='Benvenuti a mi app sportiva'/>}/>
                <Route path='/category/:categoryId' element={<ItemListConteiner greeting='categoria: '/>}/>
                <Route path='/item/:itemId' element={<ItemDetailConteiner/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<CheckoutHookForm/>}/>
        </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
