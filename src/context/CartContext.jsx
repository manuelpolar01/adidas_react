import { createContext, useState } from "react";

//creamos al contacto

export const CartContext = createContext()

//creamos al provedor
export const CartProvider = ({children})=>{
    const [cart, SetCart]= useState([])

    // FUNCIONES QUE MODIFIQUEN EL ARRAY DEL CARRITO
    
    //agregar un item al carrito
    const addToCart =(item,cantidad)=>{
        if(isInCart(item.id)){
            //sumar cantidad
            //logica para sumar cantidades
            const updateCart= cart.map((prod)=>{
                if(prod.id === item.id){
                    //si emcuentra considencias hace la suma
                   return{...prod, quantity: prod.quantity + cantidad}
                }
                else{
                    // de lo contrario retorna sin modificar
                    return prod
                }
 
            
            })
            //actualizamos el carrito con su nuevo array 
            SetCart(updateCart)
        }
        else{
            //se agrega el item al carrito
        SetCart([...cart, {...item,quantity:cantidad}])
        }
    }
    //borrar el carrito
    const clear = () =>{
       SetCart([])
    }
    //eliminar un item por completo
    const removeItem = (id) =>{
      SetCart(cart.filter((prod)=>prod.id !==id))
    }
    //debe devolver un boleano si existe en carrito
    const isInCart =(id)=>{
        return cart.some((prod)=>prod.id===id)
    }



    return(
        <CartContext.Provider value={{cart,addToCart,clear,removeItem}}>
        {children} 
        </CartContext.Provider>
    )
} 