import React from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

const Sidbar = ({user}) => {
    console.log("here....."+JSON.stringify(user));
    const navigate=useNavigate(); 
  return (
    <div className="sidebar">
        <h2 onClick={() => navigate(`/profile/${user._id}`,{state:user})}>Profile</h2>
        <hr/>
        <h2 onClick={() => navigate(`/Posts/${user._id}`,{state:user})}>Posts</h2>
        <hr/>
        <h2 onClick={() => navigate(`/Gallery/${user._id}`,{state:user})}>Gallery</h2>
        <hr/>
        <h2 onClick={() => navigate(`/ToDo/${user._id}`,{state:user})}>ToDo</h2>
        <hr/>       
    </div>
  )
}

export default Sidbar