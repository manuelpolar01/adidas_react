import React, { useState } from 'react'

const Input = () => {
const [nombre,setNombre] = useState('')
const inputHandler = (event) => {
    console.log(event.target.value)
    setNombre(event.target.value)
}

const onKeyDownHandler =(e) =>{
  if('aeiou'.includes(e.key.toLowerCase()))
    {
    console.log('es una vocal')
    e.preventDefault()
  }
  else{
    console.log('no esuna vocal')
  }

}
  return (
    <div>
      <input placeholder='compile il suo nome' onChange={inputHandler} type='text' name ='nombre-completo'/>
      <p>{nombre}</p>
      <input placeholder='no vocales'  type='text' onKeyDown={onKeyDownHandler}/>
    </div>
  )
}

export default Input
