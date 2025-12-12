import React from 'react'
import ApiCard from './ApiCard'

const ApiList = ({personajes}) => {
  return (
    <div>
    {personajes.map((characters)=><ApiCard key={characters.id} characters={characters}/>)}
    </div> 
  )
}

export default ApiList
