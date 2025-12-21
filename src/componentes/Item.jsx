import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({prod}) => {
    const {name,description,img, price,id}=prod
  return (
    <div className='card' style={{width:'18rem',marginTop:15, alignItems:'center'}}>
      <img className='card-img-top'src={img} alt={name}/>
      <div className='card-body'></div>
      <h5 className='card-title'>{name}</h5>
      <p className='card-text'>€{price},00</p>
      <Link className='btn btn-dark' to={`/item/${id}`}>ver mas</Link>
    </div>
  )
}

export default Item
