import React, { useEffect, useState } from 'react'
import { getItem } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponet from './LoaderComponet'

const ItemDetailConteiner = () => {
const[detail,setDetail]=useState({})
const[loading,setLoading]=useState(false)
const {itemId} = useParams()


useEffect(()=>{
  setLoading(true)
getItem(itemId)
.then((res)=> setDetail(res))
.catch((error)=>console.log(error))
.finally(()=>setLoading(false))
},[])
  
  return (
    // ese ? ppregunta quer si existe ahaga ese loadercomponet y ese : dice que en caso contrario haga ese itemdetail

    <div>
      {loading?<LoaderComponet/>:<ItemDetail detail={detail}/>}
    </div>
  )
}

export default ItemDetailConteiner
