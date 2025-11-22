import React,{useState,useEffect} from 'react'

const ItemCount = ({stock}) => {
    const [count,setCount]=useState(1)
    const [comprar,setComprar] =useState(false)
    console.log('ItemCont')
//se actualiza siempre
useEffect(()=>{
  console.log('me actualizo siempre')

})

// se ejecuta una sola vez 
useEffect(()=>{
console.log ('me ejecuto una sola vez ')
},[])

//se ejecuta cuando  monta componte y se actualiza lo que esta escuchando

useEffect(()=>{
console.log('me actualizo solo cuando compro')
},[comprar])

    //funciones
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
      <button className='btn btn-primary'onClick={comprarProductos}>agregar al carrito</button>
    </div>
  )
}

export default ItemCount
