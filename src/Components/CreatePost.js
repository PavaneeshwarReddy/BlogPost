import React, { useState } from 'react'
import "../CSS/CreatePost.css"
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import guidelines from "../Images/guidelineslogo.png"
import Modal from "react-modal"
import cross from "../Images/cross.png"

function CreatePost() {
  //react form validation
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [model,setmodel] =useState(false)
  const navigate = useNavigate();
  const openmodal=()=>{
    setmodel(true);
  }
  const closemodal =()=>{
    setmodel(false)
  }
  
  const createPost = (data) => {
    console.log(data);
    navigate("/blogs");
  }
  return (
    <div className='createpost'>



      <form className='createpostflex' onSubmit={handleSubmit(createPost)}>
        <h1 className='titlecreatepost'>Create A Post</h1>
        <p>Title:</p>
        <input className='titleinput' {...register("textfield",{required:true,maxLength:20})} placeholder="feeling good today"></input>
        
        <p>Content:</p>
        <textarea className='bloginput' rows="8" {...register("contentfield",{required:true,maxLength:300})} placeholder="we don't know what's comming, we can't change what's happened...."></textarea>
       <p className='createposterror'>*please check the guidelines if you are unable to submit <span><button onClick={openmodal}><img className='guidelines' src={guidelines}></img></button></span></p>
        <button type='submit' className='submitcreatepost'>Post to world</button>
        
        
      </form>






      <Modal className="createpostmodal" isOpen={model} >
                          

                          <div className='createpostmodalflex1'>
                            <h2 className='headingguidelines'>Guidlines to create a post</h2>
                          <button onClick={closemodal}><img className='cross' src={cross}></img></button>
                          </div>

                          <div className='createpostmodalflex2'>
                                      


                          </div>
      </Modal>


    </div>
  )
}

export default CreatePost