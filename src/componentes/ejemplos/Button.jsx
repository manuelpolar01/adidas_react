const Button =({estilos,handler,text,children}) =>{

return(
<button className={estilos} onClick={handler}>{text}{children}</button>
)}
export default Button