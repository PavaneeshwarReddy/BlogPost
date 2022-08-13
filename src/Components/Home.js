import React, { useEffect, useRef } from 'react'
import "../CSS/Home.css"
import FirstImage from '../Images/HomePage1.png'
import { useNavigate } from "react-router-dom"
import gsap from 'gsap'
function Home() {
  const navigate = useNavigate();
  const login = true;
  const gotoLogin = () => {
    navigate("/login");
  }
  const gotoBlogs = () => {
    navigate("/blogs");
  }
  const el = useRef();
  const q = gsap.utils.selector(el);


  useEffect(()=>{
  //  gsap.to(".homefirstimage",{
  //           opacity:1,
  //           duration:2
    
  //  });
   gsap.to(".homecontent",{
    opacity:1,
    duration:2,
    ease:true

});
  
  })




  return (
    <div className='homepage'>

      <div className='homeflex' id='homescreenmedia'>
        <div className='homecontent'>
          <h5>Hi there,</h5>
          <h2>Welcome To<span className='homebrandspace'> BlogSpot</span></h2>
          <p>Ever listened to someone talk about their life and thought ‘Oh, someone else has been through that, too? I thought it was just me!’ Finding similarities with other people helps us live happy and healthy lives. Your life may feel ordinary to you, but it might seem extraordinary to someone else. Every story shared is a chance to make someone feel less alone. </p>

          <div className='homebuttonpage'>
            {
              !localStorage.getItem("isAuth") ? <button style={{ cursor: "pointer" }} onClick={gotoLogin}>login</button> : <button style={{ cursor: "pointer" }} onClick={gotoBlogs}>Blogs</button>
            }
          </div>


        </div>

        <img src={FirstImage} className='homefirstimage'></img>

      </div>

    </div>
  )
}

export default Home