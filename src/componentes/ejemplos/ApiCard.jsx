import React from 'react'

const ApiCard = ({characters}) => {
  return (
    <div>
         <div className='card' style={{width:'18rem',marginTop:15, alignItems:'center'}}>
      <img className='card-img-top'src={characters.image} alt={characters.name}/>
      <div className='card-body'></div>
      <h5 className='card-title'>{characters.name}</h5>

    </div>
  </div>
  )
}

export default ApiCard
