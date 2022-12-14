import React from 'react'
import {NavLink} from  "react-router-dom";
const Navbar = () => {
  return (
  

   
   

    <header>
       <input type="checkbox" id="menu-bar"/>
    <label for="menu-bar">Menu</label>
    <NavLink to={""} className="logo">
    <img className="w-4/4 " src={require('../images/orgomedfooter.jpg')} alt=""/>
    </NavLink>
    <nav class="navbar">
        <ul>
            <li><NavLink className="acctive" to={"/"}>home</NavLink></li>
            <li><NavLink to={"/about"}>About us</NavLink></li>
            <li><NavLink to={"/product"}>products</NavLink></li>
            <li><NavLink to={"/contact"}>contact</NavLink></li>
            
        </ul>
    </nav>
  
</header>


  )
}

export default Navbar