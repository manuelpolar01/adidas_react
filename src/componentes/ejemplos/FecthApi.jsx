import React, { useEffect, useState } from 'react' 
import ApiList from './ApiList'
import useFecth from '../../hooks/useFecth'

const FecthApi = () => {
    const[personajes,setPersonajes]=useState([])
    const{data,loading,error}=useFecth('https://dragonball-api.com/api/characters')

    console.log(personajes)
    if(loading){
      return<h1>cargando....</h1>
    }
    if(error){
      return<h1>error</h1> 
    }
  return (
    <div>
      {data?<ApiList personajes={ data.items}/>:<></>}
    </div>
  )
}

export default FecthApi
