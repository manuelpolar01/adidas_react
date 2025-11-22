import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";

const ItemListConteiner=({greeting})=>{
const[products,setProducts]=useState([])

console.log('ItemListConteiner')


useEffect(()=>{
getProducts() 

    .then((res)=>setProducts(res))
    .catch((error)=>console.error('error'))
},[])
//console.log(products)

 
    return(
        <div><h1 className="text-success">{greeting}</h1>
        <ItemList products={products}/>
      {/*products.map((prod)=><div key={prod.id}>
        <img className="logo" src={prod.img} alt="" />
        <p>{prod.name}</p>
        <p>€{prod.price},00</p>
      </div>)*/}



        </div>
    )
}
export default ItemListConteiner