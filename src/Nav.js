import React from "react";
import {Link , NavLink  } from 'react-router-dom'

const Nav =() =>{
      return(
            <div className="navbar">
                 <div className="cont">
                 <a href="#" className="logo">Logo</a>
                 <ul>
                       <Link exact to="/">Home</Link>
                       <Link to="/about">About</Link>
                       <Link to="/blog">Blog</Link>
                 </ul>
                 </div>
            </div>
      ) 
}
export default Nav;