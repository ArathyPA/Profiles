import React from 'react'
import './Users.css';
import { Box,Card,Grid,Container,List } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//To display Home page with list of users
const Users = ({users}) => {    
    const navigate=useNavigate(); 
    
  
    return (
      
      <div >
        <div className='filler'></div>
        <div class="wave">     
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <defs>
      <linearGradient id="header-shape-gradient" x1=".35" x2="1" y1=".35" y2=".45">
          <stop offset="10%" stop-color="var(--color-stop)" />
          <stop offset="30%" stop-color="var(--color-stop)" />
          <stop offset="100%" stop-color="var(--color-bot)" />
        </linearGradient>
    </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg>
    </div>
    <div className='wave2'>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" id="opaque"></path>
      </svg>
    </div>
    
    
       
        <div className='home'>   
        
         <Box sx={{ minWidth: 275 }}>
         
        <Card className="Card"sx={{borderRadius:"5%",width:"35vw", height:"70vh",overflowY:"scroll"}} >
        <CardContent className='cardhead'>        
          <Typography fontWeight="bold"  fontSize="1.5em" gutterBottom>
            Select an account
          </Typography>        
          </CardContent>
          <CardContent>
          {users.map((user)=>
          <CardContent key={user.id} className='cardbody'sx={{padding:"0"}}>       
           <table className='table'>    
            <tbody>
              <tr className='tablerow' onClick={() => navigate(`/profile/${user._id}`,{state:user})}>
                <img alt="user" className="avatar"src={user.profilepicture}></img>
                   {user.name}
                
              </tr>
            </tbody>  
            <hr/>            
           </table>       
          </CardContent>        
          )}
          </CardContent>
        </Card>     
      </Box>    
      
      </div>
     
      
      </div>
     
  
  
    );
}

export default Users