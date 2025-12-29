import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import ButtonExample from "./LoaderComponet";
import LoaderComponet from "./LoaderComponet";

const ItemListConteiner=({greeting})=>{
const[products,setProducts]=useState([])
const[loading,setLoading]=useState(false)
const{categoryId}=useParams()
console.log(categoryId)
useEffect(()=>{
setLoading(true)
getProducts() 

    .then((res)=>{
        if(categoryId){
//filtrar
      setProducts(res.filter((prod)=>prod.category===categoryId))
        }
            else{
                //no filtro
                setProducts(res)
            }
    })
    .catch((error)=>console.error('error'))
    .finally(()=>setLoading(false))
},[categoryId])


 
    return(
        <>
        {loading
        ? <LoaderComponet/>
        :<div>
            <h1 className="text-success">{greeting}{categoryId && <span>{categoryId}</span>}</h1>
            <ItemList products={products}/>
         </div>}
        </>
    )
}
export default ItemListConteiner