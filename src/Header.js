import React from "react";
import {NavLink} from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
// import './Navbar.css';


// import './style.css';
 import './Header.css';

function Header() {
  return (
    <div class="container-fluid p-0">
    <div class="row no-gutters">
        <div className="col-12 mx-auto">
           

<nav className="navbar navbar-expand-lg fixed-top ">
<a to="/" className="font"
style={{color:"white"}}><h1 class="logo mr-auto"><b>Navbar</b></h1></a>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="x navbar-toggler-icon"><FaCaretDown/></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav ml-auto mr-5">
<li className="nav-item active">
<a exact className="nav-link p-2" to="/">Home <span class="sr-only">(current)</span></a>
</li>

<li exact className="nav-item pl-2 pr-0">
<a className="nav-link" to="/service">About</a>
</li>
<li className="nav-item">
<div class="dropdown">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
    Services
  </a>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#"><span style={{color:"black"}}>Building Material</span></a>
    <a class="dropdown-item" href="#"><span  style={{color:"black"}}>Construction Team</span></a>
    <a class="dropdown-item" href="#"><span  style={{color:"black"}}>Plumber</span></a>
    <a class="dropdown-item" href="#"><span  style={{color:"black"}}>Electrician</span></a>
    <a class="dropdown-item" href="#"><span  style={{color:"black"}}>Carpenter</span></a>
  </div>
</div>
</li>
<li exact className="nav-item p-2">
<a className="nav-link" to="/about">Portfolio</a>
</li>
<li exact className="nav-item p-2">
<a className="nav-link" to="/about">Team</a>
</li>
<li exact className="nav-item p-2">
<a className="nav-link" to="/contact">Contact</a>
</li>

</ul>

</div>
</nav>
</div>

    </div>
</div>

  );
}

export default Header;
