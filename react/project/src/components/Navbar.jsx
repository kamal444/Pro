import React from 'react'
import classes from  './Navbar.module.css';
const Navbar = () => {
    return (
        <nav className='nav'>
        <div class="item">
         <a>profile</a> 
        </div>
        <div  class="item">
         <a>Messages</a> 
        </div>
        <div  class="item">
         <a>News</a> 
        </div>
        <div  class="item">
         <a>Music</a> 
        </div>
        <div  class="item">
         <a>Settings</a> 
        </div>
      </nav>
    )
}
export default Navbar;