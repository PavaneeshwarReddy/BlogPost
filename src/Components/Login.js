import React from 'react'
import "../CSS/Login.css"
// import LoginLogo from '../Images/googlelogo.png'
import googlelogo from '../Images/googlelogo.png'
import {useNavigate} from 'react-router-dom'
import {GoogleButton} from 'react-google-button'
import {signInWithPopup} from 'firebase/auth'
import {auth,provider} from '../Firebase/FireBaseConfig'
function Login() {
  const navigate = useNavigate();


  const UserLogin=()=>{
    signInWithPopup(auth,provider).then((result)=>{
              localStorage.setItem("isAuth",true);
           
              navigate("/blogs");

    })

  }
  return (
    <div className='loginpage'>
    
                <button className='loginbox'  onClick={UserLogin}>
                      <img className='loginimage' src={googlelogo}></img>
                     
                           
                            <button className='googletext'>Signin with google</button>

                  
                </button>
    </div>
  )
}

export default Login