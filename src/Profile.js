import React, { useEffect } from 'react'
import './Profile.css'
import './Users.css'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import { useLocation } from 'react-router-dom';
import {Map, GoogleApiWrapper} from 'google-maps-react'
import Sidbar from './Sidbar';
import Chatbox from './Chatbox';

const Profile = ({users}) => {
    const location =useLocation()
    // useEffect(()=>{
    //     const ifameData=document.getElementById("iframeId")
    //     const lat=1.305385;
    //     const lon=30.923029;
    //     ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    // })
  return (
    
    <div className='container'>
    {/* {console.log(location.state)} */}
    <Sidbar user={location.state}/>
    <div className='profilebody'>
    <div className='headrow'> 
        <h2>Profile</h2>        
        <div className="headrowdata">             
         <img alt="user" className="avatar"src={location.state.profilepicture}></img>  
         {location.state.name}                  
         </div> 
     </div>
     <hr />
     <div className='datacontainer'>
        <div className='datarow1'>
        <img alt="user" className="profilepic"src={location.state.profilepicture}></img>
       <p className="profilename"> {location.state.name} </p>
       <p> Username : <strong>{location.state.username}</strong> </p>
       <p> e-mail : <strong>{location.state.email}</strong> </p>
       <p> Phone : <strong>{location.state.phone}</strong> </p>
       <p> Website : <strong>{location.state.website} </strong></p>
       <hr/>
       <p>Company</p>
          <p> Name : <strong>{location.state.company.name}</strong> </p>
          <p> catchphase : <strong>{location.state.company.catchPhrase}</strong> </p>
          <p> bs : <strong>{location.state.company.bs}</strong> </p>          
        </div>
        <div className='datarow1'>    
        <p>Address: </p>      
          <p> Street : <strong>{location.state.address.street}</strong> </p>
          <p> Suite : <strong>{location.state.address.suite}</strong> </p>
          <p> City : <strong>{location.state.address.city}</strong> </p>      
          <p> Zipcode : <strong>{location.state.address.zipcode}</strong> </p>  
          <iframe src={`https://maps.google.com/maps?q=${location.state.address.geo.lat},${location.state.address.geo.lng}&hl=es;&output=embed&z=1`} height="50%" width="100%"></iframe>
          <Chatbox users={users}/>
        </div>
      

     </div>
     </div>
   
    </div>
    
    
   
  )
}

export default Profile