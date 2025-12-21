import React,{useState,useEffect} from 'react'

const ItemCount = ({stock}) => {
    const [count,setCount]=useState(1)

  

  const sumar =()=>{
    if(count < stock)
      {
    setCount(count + 1)
     }
    }

  const restar =()=>{
    if(count>0)
    setCount(count - 1)
    }

    const comprarProductos =()=>{
      setComprar(!comprar)
    }
  
  return (
    <div>
      <div>
        <button className='btn btn-danger'onClick={restar}>+</button>
        <span className='btn'>{count}</span>
        <button className='btn btn-success'onClick={sumar}>+</button>
      </div>
      <button className='btn btn-primary'>agregar al carrito</button>
    </div>
  )
}

export default ItemCount
