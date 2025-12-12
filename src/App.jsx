import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './componentes/ejemplos/Button'
import TextComponente from './componentes/TextComponente'
import Navbar from './componentes/Navbar'
import ItemListConteiner from './componentes/ItemListConteiner'
import NavbarBootstrap from './componentes/NavbarBootstrap';
import ItemCount from './componentes/ItemCount';
import FecthApi from './componentes/ejemplos/FecthApi';





function App() {
  console.log('App')
//const saludar=()=>{
 // alert('holis')
//}
 // const despedir=()=>{
//alert('adios mierda')
 // }


  return (
    <>
    <NavbarBootstrap/>
    <FecthApi/>
    {/*<Navbar/>*/}
    <ItemListConteiner greeting='Benvenuti a mi app sportiva'/>
    {/*<ItemCount stock={15}/>*/}
   
    </>
  )
}

export default App
