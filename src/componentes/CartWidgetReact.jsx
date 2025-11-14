import { Badge } from "react-bootstrap"
import { BsCart4 } from "react-icons/bs"

const CartWidgetReact =()=>{
    return(
        <div>
            <BsCart4  fontSize={'1.8rem'}color="red"/>
            <Badge bg="danger">5</Badge>
        </div>
    )
}
export default CartWidgetReact