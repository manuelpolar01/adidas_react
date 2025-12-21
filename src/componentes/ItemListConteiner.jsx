import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Input from "./ejemplos/input";

const ItemListConteiner=({greeting})=>{
const[products,setProducts]=useState([])
const{categoryId}=useParams()
console.log(categoryId)
useEffect(()=>{
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
},[categoryId])


 
    return(
        <div>
            <Input/>
            <h1 className="text-success">{greeting}{categoryId && <span>{categoryId}</span>}</h1>
            <ItemList products={products}/>
       </div>
    )
}
export default ItemListConteiner