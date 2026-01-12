import { useEffect, useState } from "react";
import { getProducts , data } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import ButtonExample from "./LoaderComponet";
import LoaderComponet from "./LoaderComponet";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "../service/firebase";

const ItemListConteiner=({greeting})=>{
const[products,setProducts]=useState([])
const[loading,setLoading]=useState(false)
const{categoryId}=useParams()

//FIREBASE

useEffect(()=>{
setLoading(true)
//conectamos con nuestra collection    
const productsCollection = categoryId ? query(collection(db,"productos"),where("category","==",categoryId)):collection(db,"productos")
//perdir los documentos
getDocs(productsCollection)
.then((res)=>{
    //limpiar los datos para utilizar
    const list = res.docs.map((doc)=>{ 
        return{ id:doc.id,
                 ...doc.data()
        }
    })
    console.log(list)
    setProducts(list)
})
.catch((error)=>console.log(error))
.finally(()=>setLoading(false))
},[categoryId])
// se hace una vez y se borra 
//const subirData =()=>{
//    console.log("SUBIENDO")
//    const collectionToAdd= collection(db,"productos")
//    data.map((item)=>addDoc(collectionToAdd, item))
//}
 
    return(
        <>
        {/*<button className="btn btn-dark" onClick={subirData}> subir data</button>*/}
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