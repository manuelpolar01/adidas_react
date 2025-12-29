import { useContext } from "react"
import { Badge } from "react-bootstrap"
import { BsCart4 } from "react-icons/bs"
import { CartContext } from "../context/CartContext"

const CartWidgetReact =()=>{
    const{cart} =useContext(CartContext)
    console.log(cart)
    return(
        <div>
            <Badge bg="danger"></Badge>
            <BsCart4  fontSize={'1.8rem'}/>
        </div>
    )
}
export default CartWidgetReact