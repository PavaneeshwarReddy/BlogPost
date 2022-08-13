import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {auth} from '../Firebase/FireBaseConfig'
import '../CSS/NavBar.css'
function NavBar() {
  const navigate =  useNavigate();
 
  const UserLogOut=()=>{
          localStorage.clear();
          
          navigate("/");
  }
  return (
    <div >
        <div className='navbar'>
            <div className='navbar_items'>
                <div className='navbar_items_start'>
                <Link to='/'><h2 className='CompanyName'>BlogSpot</h2></Link>
                </div>
                <div className='navbar_items_end'>
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
               <Link to="/createpost">CreatePost</Link>
               {
                 localStorage.getItem("isAuth")?<Link onClick={UserLogOut} to="/">Logout</Link>:<Link to="/login">Login</Link>
               }
                
                </div>

            </div>
        </div>
    </div>
  )
}

export default NavBar