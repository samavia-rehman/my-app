
import React, { Component } from "react";
import {Link} from "react-router-dom";

class Navigation extends Component{
    render(){

return(



<nav className="navbar">
<div className="logo">
<img src="../img/airirestaurant..png"/>
</div>
<div className="nav-right">
<ul className ="nav">
<li className="nav-items">
<Link className="link" to="/Aboutmain">About us</Link></li>
<li className="nav-items">
<Link className="link" to="/blogPage">Blog</Link></li>
<li className="nav-items">
<Link className="link" to="/Contact">Contact</Link></li>
<li className="nav-items">
<Link className="link" to="/">Home</Link>
</li>
<li className="nav-items">
<Link className="link" to="/Sample">Sample Page</Link>
</li>
<li className="nav-items">
<i className="fas fa-search"></i>
</li>
</ul>
</div>
</nav>
) 
    }
}
export default Navigation;