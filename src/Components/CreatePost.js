import React, { useState } from 'react'
import "../CSS/CreatePost.css"
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import guidelines from "../Images/guidelineslogo.png"
import Modal from "react-modal"
import cross from "../Images/cross.png"
import contentwriting from "../Images/writer.png"
import loadingImage from "../Images/loading.gif"
import { db, auth } from "../Firebase/FireBaseConfig"
import { addDoc, collection } from "firebase/firestore"

function CreatePost() {
  //react form validation
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading,setLoading] = useState(false);
  const [model, setmodel] = useState(false)
  const navigate = useNavigate();
  const openmodal = () => {
    setmodel(true);
  }
  const closemodal = () => {
    setmodel(false)
  }

  //adding doc to the firebase
  const postCollectionRef = collection(db, "allblogs");
  const postTheBlog = async (data) => {
    console.log(data);
    setLoading(true);
    await addDoc(postCollectionRef, { title: data.textfield, content: data.contentfield, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid } });
    setLoading(false);
    navigate("/blogs");
  }



  return (
    <div className='createpost'>



      <form className='createpostflex' onSubmit={handleSubmit(postTheBlog)}>
        <h1 className='titlecreatepost'>Create A Post</h1>
        <p className='createpostheadings'>Title:</p>
        <input className='titleinput' {...register("textfield", { required: true, maxLength: 100 })} placeholder="feeling good today"></input>

        <p className='createpostheadings'>Content:</p>
        <textarea className='bloginput' rows="8" cols="5" s {...register("contentfield", { required: true, maxLength: 1000 })} placeholder="we don't know what's comming, we can't change what's happened...."></textarea>
        <p className='createposterror'>*please check the guidelines if you are unable to submit <span><button onClick={openmodal}><img className='guidelines' src={guidelines}></img></button></span></p>
        <button type='submit' className='submitcreatepost'>Post to world</button>


      </form>






      <Modal className="createpostmodal" isOpen={model} >


        <div className='createpostmodalflex1'>
          <h2 className='headingguidelines'>Guidlines to create a post</h2>
          <button onClick={closemodal}><img className='cross' src={cross}></img></button>
        </div>


        <img src={contentwriting} className="contentwriting"></img>
        <h3 style={{ color: "green" }}>Title:</h3>
        <ul>
          <li>Field should not be empty.</li>
          <li>It must of length less than or equal to 100.</li>

        </ul>
        <h3 style={{ color: "blueviolet" }}>Content:</h3>
        <ul>
          <li>Field should not be empty.  </li>
          <li>It must of length less than or equal to 1000.</li>

        </ul>



      </Modal>


      <Modal isOpen={loading} className="createloadingmodal">
        <img src={loadingImage} className="loadingimage"></img>
      </Modal>


    </div>
  )
}

export default CreatePost