 import React, {useState} from "react";
 import { Link } from "react-router-dom";
 import "./Navbar.css"

 function Navbar(){
  const [open, setOpen] = useState(false);
    return(
        <>
        <nav className="navbar">
      <div className="logo">
        AE<span>Cuts</span><span class="material-symbols-outlined">
content_cut
</span>
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/booking" >Book</Link></li>

          <li className="mobile-only">
            <Link to="/booking" className=" book-btn">Book Now</Link>
          </li>
      </ul>

      <div className="desc-btn">
    <Link to="/booking" className=" desktop-only book-btn">Book Now</Link>
    </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </div>
    </nav>
        </>
    );

  }
 

 export default Navbar