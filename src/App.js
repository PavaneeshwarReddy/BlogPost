import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Home from './Components/Home';
import CreatePost from './Components/CreatePost';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Blogs from './Components/Blogs';
import Creator from './Components/Creator';
function App() {
  const [userAuth,setUserAuth] = useState(false);
  return (
    
    <div>

      <NavBar setUserAuth={setUserAuth}/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/createpost' element={<CreatePost />}></Route>
        <Route path='/creator' element={<Creator />}></Route>

      </Routes>
    </div>
  );
}

export default App;
