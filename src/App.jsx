import './App.css'
import Button from './componentes/ejemplos/Button'
import TextComponente from './componentes/TextComponente'
import Navbar from './componentes/Navbar'
import ItemListConteiner from './componentes/ItemListConteiner'

function App() {
const saludar=()=>{
  alert('holis')
}
  const despedir=()=>{
alert('adios mierda')
  }


  return (
    <>
    <Navbar/>
    <ItemListConteiner greeting='Benvenuti a mi app sportiva'/>
   
    </>
  )
}

export default App
