import React from 'react'
import Item from './Item'
import "../css/card.css"
const ItemList = ({products}) => {
  return (
    <div className='section-galeria'>
      {products.map((prod)=><Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList
