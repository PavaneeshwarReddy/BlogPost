import React from 'react'
import "../CSS/Login.css"
import LoginLogo from '../Images/login1.png'
import googlelogo from '../Images/gogolelogo.png'
import {useNavigate} from 'react-router-dom'
import {GoogleButton} from 'react-google-button'
function Login() {
  const navigate = useNavigate();
  const gotoblogs =()=>{
    navigate("/blogs");
  }
  return (
    <div className='loginpage'>
    
                <div className='loginbox'>
                      <img className='loginimage' src={LoginLogo}></img>
                      <div className='googlebuttonflex'>
                            <img className='googlelogo' src={googlelogo}></img>
                            <button className='googlebutton' onClick={gotoblogs}>Signin with google</button>

                      </div>
                </div>
    </div>
  )
}

export default Login