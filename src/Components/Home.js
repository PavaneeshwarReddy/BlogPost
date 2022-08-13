import React from 'react'
import "../CSS/Home.css"
import FirstImage from '../Images/HomePage1.png'
import { useNavigate } from "react-router-dom"
function Home() {

  const login = false;
  const navigate = useNavigate();
  const gotoLoginPage = () => {
    navigate("/login");
  }

  return (
    <div className='homepage'>

      <div className='homeflex' id='homescreenmedia'>
        <div className='homecontent'>
          <h5>Hi there,</h5>
          <h2>Welcome To<span className='homebrandspace'> BlogSpot</span></h2>
          <p>Ever listened to someone talk about their life and thought ‘Oh, someone else has been through that, too? I thought it was just me!’ Finding similarities with other people helps us live happy and healthy lives. Your life may feel ordinary to you, but it might seem extraordinary to someone else. Every story shared is a chance to make someone feel less alone. </p>

          <div className='homebuttonpage'>
          {
            login === false ? <button onClick={gotoLoginPage}>login</button> : <button>Blogs</button>
          }
          </div>
         

        </div>

        <img src={FirstImage} className='homefirstimage'></img>

      </div>

    </div>
  )
}

export default Home