import '../css/Navbar.css'
import CartWidget from './CartWidget'
const Navbar =()=>{
    return(
   <nav style={{display:"flex",justifyContent:"space-around",alignItems:"center",padding:"2rem",color:"black",backgroundColor:"gray"}}>
   <a  className ="nav-link " href="">
     <img src='../logo1.png' alt='logo' className="primerLogo" />
   </a>
   <a className="nav-link" href="">uomo</a>
   <a className="nav-link" href="">donna</a>
   <a className="nav-link" href="">bambini</a>
   <a className="nav-link" href="">scarpe</a>
   <a className="nav-link" href="">abbiglimento</a>
   <a className="nav-link" href="">sport</a>
   <a className="nav-link" href="">outlet</a>
   <CartWidget/>
   </nav>
    )
}
export default Navbar