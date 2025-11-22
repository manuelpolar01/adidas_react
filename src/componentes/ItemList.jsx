import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <div className='d-flex justify content -arond aling-items-center flex -wrap'>
      {products.map((prod)=><Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList
