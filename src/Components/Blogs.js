import React, { useEffect, useState } from 'react'
import {db,auth} from "../Firebase/FireBaseConfig"
import {getDoc,collection, getDocs} from "firebase/firestore"
import "../CSS/Blogs.css"
function Blogs() {

      const [postlist,addpostlist]=useState([]);
      const postCollectionRef = collection(db, "allblogs");
      useEffect(()=>{
        const getPost=async ()=>{
          const data = await getDocs(postCollectionRef);
          addpostlist(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        }
        getPost();
      })
  return (
    <div className='blogspage'>
              <div className='allblogs'>

                  {
                    postlist.map((post)=>{
                      return  (   <div className='blogpost'>
                    
                      <div className='userblogcontent'>
                             
                              <h3 className='headings'>Title:<span className='normal12'>{post.title}</span></h3>
                             
                              <h3 className='headings'>Content:</h3>
                              <p className='normal123'>{post.content}</p>
                             
                              <h4 className='headings123 '>Pulbished by:<span className='normal'>{post.author.name}</span></h4>

                      </div>
                    
              </div>
                    );
                    })
                  }
            

              </div>



    </div>
  )
}

export default Blogs