//importamos el hock para utilizar el contexto
import {useContext, useState}from 'react'
import ItemCount from './ItemCount'
//importar el contexto que queremos utrilixar
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({detail}) => {
  const[purchase,setPurchase]=useState(false)
  //al hoook en el parametro le pasamos el contexto que querenmo utilzar
  const {cart,addToCart} =useContext(CartContext)
  console.log(cart, 'mierda')
  const onAdd =(cantidad)=>{
addToCart(detail,cantidad)
 setPurchase(true)   
  }

  return (
    <div style={{display:'flex',justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
      <h1>detalle del producto:{detail.name}</h1>
      <img src={detail.img} alt={detail.name}/>
      <p>{detail.description}</p>
      <p>stock: {detail.stock}unidades</p>
      <p>price:{detail.price},00</p>
      {purchase?
      <div style={{display:'flex', width:'80%',alignItems:'center',justifyContent:'space-between'}}>
           <Link className='btn btn-dark' to='/'> seguir comprando</Link>
           <Link className='btn btn-dark' to='/cart'> ir al carrito</Link>
      </div>
      :<ItemCount stock={detail.stock} onAdd ={onAdd}/>}
    </div>
  )
}

export default ItemDetail
