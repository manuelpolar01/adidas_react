import { useState,useEffect } from "react"

const useFecth = (ulr)=>{
const[data, setData]= useState(null)
const[loading, setLoading]=useState(false)
const[error, setError]=useState(null)

useEffect(()=>{
setLoading(true)
fetch(ulr)
.then(res=>res.json())
.then((response)=>setData(response))
.catch((err)=>setError(err))
.finally(()=>setLoading(false))
},[ulr])

 return{data,loading,error}
}
export default useFecth
