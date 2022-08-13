
import React from 'react'
import {Link} from 'react-router-dom'
import '../CSS/NavBar.css'
function NavBar() {
  return (
    <div >
        <div className='navbar'>
            <div className='navbar_items'>
                <div className='navbar_items_start'>
                <h2 className='CompanyName'>BlogSpot</h2>
                </div>
                <div className='navbar_items_end'>
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
               <Link to="/createpost">CreatePost</Link>
                <Link to="/login">Login</Link>
                
                </div>

            </div>
        </div>
    </div>
  )
}

export default NavBar