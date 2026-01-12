import React, { useEffect, useState } from 'react'
import { getItem } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams, Link} from 'react-router-dom'
import LoaderComponet from './LoaderComponet'
import { collection, doc, getDoc } from 'firebase/firestore/lite'
import { db } from '../service/firebase'

const ItemDetailConteiner = () => {
const[detail, setDetail]=useState({})
const[invalid, setInvalid]=useState(null)
const[loading, setLoading]=useState(false)
const {itemId} = useParams()
 
//fiberbase
useEffect(()=>{
  setLoading(true)
  //conectamos con nuestra collection
  const productCollection = collection(db, "productos")
  //creamos una referencia del documento 
  const docRef = doc(productCollection, itemId)
  // todo lo arriba lo podes hacer de modo mas corto asi:
  //const docRef =doc(db, "productos",itemId)
 
//traer el documento
  getDoc(docRef)
  .then((res)=>{
    if(res.data()){
      //si existe ,guardar la data
      setDetail({id:res.id, ...res.data()})
    }
    else{
      // si no existe , mostrar un mensaje ERROR
      setInvalid(true)
    }
  })
  .catch((error)=>console.log(error))
  .finally(()=>setLoading(false))
},[])

if(invalid){
  return(
    <div>
      <h2>el producto no existe</h2>
      <Link className='btn btn-dark' to='/'>volver a home</Link>
    </div>
  )   
}
  
  return (
    // ese ? ppregunta quer si existe ahaga ese loadercomponet y ese : dice que en caso contrario haga ese itemdetail
 <div>
      {loading?<LoaderComponet/>:<ItemDetail detail={detail}/>}
    </div>
  )
}

export default ItemDetailConteiner
