import React from "react";
import "./styles/Item.css"


export const Item = ({info}) =>{
    return(
<a href="" className="products"  >
        
        <img src={info.imagen} alt="" />

        <p>{info.nombre}</p>

</a>
    );
}



export default Item;