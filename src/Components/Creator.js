import React from 'react'
import "../CSS/Creator.css"
import instagram from "../Images/instagram.png"
import github from "../Images/github-sign.png"
import profilepic from "../Images/profilepic.jpeg"


function Creator() {
  return (
    <div className='creatorpage'>
                <div className='creatordetails'>
                    <img className='profilepic' src={profilepic}></img>
                    <h1 className='creatorname'>Guda Pavaneeshwar Reddy</h1>
                    <div className='socialmedialinks'>
                       
                        <a href='https://github.com/PavaneeshwarReddy'><img src={github} className='socialmedia'></img></a>
                    </div>
                </div>

    </div>
  )
}

export default Creator