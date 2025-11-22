import React from 'react'

const Item = ({prod}) => {
    const {name,description,img, price}=prod
  return (
    <div className='card' style={{width:'18rem',marginTop:15}}>
      <img className='card-img-top'src={img} alt={name}/>
      <div className='card-body'></div>
      <h5 className='card-title'>{name}</h5>
      <p className='card-text'>€{price},00</p>
      <a className='btn btn-dark'>ver mas</a>
    </div>
  )
}

export default Item
