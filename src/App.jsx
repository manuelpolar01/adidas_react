import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConteiner from './componentes/ItemListConteiner'
import NavbarBootstrap from './componentes/NavbarBootstrap';
import ItemDetailConteiner from './componentes/ItemDetailConteiner'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
 

  return (

    <BrowserRouter>
    <NavbarBootstrap/>
    <Routes>
    <Route path='/'element={<ItemListConteiner greeting='Benvenuti a mi app sportiva'/>}/>
    <Route path='/category/:categoryId' element={<ItemListConteiner greeting='categoria: '/>}/>
    <Route path='/item/:itemId' element={<ItemDetailConteiner/>}/>
    </Routes>
    
    
    </BrowserRouter>
 
  )
}

export default App
