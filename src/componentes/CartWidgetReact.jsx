import { useContext } from "react"
import { Badge } from "react-bootstrap"
import { BsCart4 } from "react-icons/bs"
import { CartContext } from "../context/CartContext"

const CartWidgetReact =()=>{
    const{cartQuantity} =useContext(CartContext)
    
    return(
        <div>
            {cartQuantity()>0 && <Badge bg="danger">{cartQuantity()}</Badge>}
            <BsCart4  fontSize={'1.8rem'}/>
        </div>
    )
}
export default CartWidgetReact