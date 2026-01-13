import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
      <h2> tu carrito esta vacio </h2>
      <h3> te invitamos a ver nuestros productos</h3>
      <Link className ='btn btn-dark' to='/'>volver home</Link>
    </div>
  )
}

export default EmptyCart
