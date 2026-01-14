import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
  const {cart,removeItem,cartTotal,clear }= useContext(CartContext)
  const preConfirmation =()=>{
     Swal.fire({
      title:`sei sicuro di cancellare il acquisto?`,
      showDenyButton:true,
      denyButtonText:'no',
      confirmButtonText:'si',
     }).then((result)=>{
          if(result.isConfirmed){
            clear()
          }
     })
  }
  return (
    <div>
        <h3>tu carrito</h3>
         <div>
          {cart.map((compra)=>(
            <div key={compra.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',padding:'2rem'}}>
              <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
              <span>{compra.name}</span>
              <span>{compra.quantity}</span>
              <span>{compra.price},00</span>
              <span>precio final{compra.price * compra.quantity},00</span>
              <button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>X</button>
            </div>
          ))}
         </div>
         <span> total a pagar:{cartTotal()},00</span>
         <span> total a pagar:{cartTotal()},00</span>
         <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'80%',padding:'2rem'}}>
          <button className='btn btn-danger' onClick={preConfirmation}>borrar carrito</button>
          <Link className='btn btn-success' to='/checkout'>terminar compra</Link>

         </div>
    </div>
  )
}

export default CartView