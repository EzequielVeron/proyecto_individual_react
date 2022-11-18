import React from "react";
import CartWidget from "./CartWidget";



export const NavBar = () =>{
    return(
<div className="Container">
    <nav className="Nav">
        <div className="nav_brand">
            <a className="nav_logo" href="#" >Mi logo de marca</a>
        </div>
        <ul className="nav_list">
            <li>
            <a className="nav_link" href="#">Inicio</a>
            </li>
            <li>
                <a className="nav_link" href="#">Productos</a>
            </li>
            <li>
            <a className="nav_link" href="#">Nosotros</a>
            </li>
            <li>
            <a className="nav_link" href="#"><CartWidget/></a>
            </li>
        </ul>

    </nav>
</div>
    );
}


export default NavBar;