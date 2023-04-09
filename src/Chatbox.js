import React, { useState } from 'react'
import './Chatbox.css'
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Box,TextField ,InputAdornment} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

//To display Chatbox for individual users
const Chatbox = ({users}) => {
    const [flag,setflag]=useState(false)
    const [visible,setvisible]=useState(false)
    const [messagelist,setmessagelist]=useState(["Hi","Hello"]);
    const [username,setusername]=useState({});
    const [data,setValue]=useState("");
const showhide= (visible)=>{
    console.log(visible);
if(visible){setvisible(false)}
else{setvisible(true)}
}

const showchatbox=(user)=>{
    setflag(true);
    
    setusername(user);
}

  return (
    <div className='chatboxdiv'>        
   {flag&& <div class="chat-box">
  <header>
  <img alt="user" className="avatar"src={username.profilepicture}></img>
    <h5>{username.name}</h5>    
    <div class="close-button" onClick={()=>setflag(false)}>X</div>
  </header>
  <section id="message-list">
 
  {messagelist.map((message)=><p className="message">{message}</p>)}
  
  <Box id="message-input"  sx={{ width: "15vw" }}> 
        <TextField
            className="search-desktop"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SendIcon color="primary" onClick={(e)=>setmessagelist([...messagelist,data])}/>
                </InputAdornment>
              ),
            }}            
            placeholder="Type a message..."
            name="message"     
            onChange={(e)=>setValue(e.target.value)}  
          />
         </Box> 
         
  </section>
  
    
  
</div>}

<div className='mainchatbox'  onClick={(e)=>{showhide(visible)}}>
{visible&& <div class="chat-box">
<header>
    <h5>Chat</h5>    
    <div class="close-button" onClick={()=>setflag(false)}>X</div>
  </header>
  {users.map((user)=>
              
           <table className='table'>    
            <tbody>
              <tr className='tablerowchat' onClick={()=>{showchatbox(user)}}>
                <img alt="user" className="avatar"src={user.profilepicture}></img>
                   {user.name}
                
              </tr>
            </tbody>                        
           </table>       
               
          )}
  </div>}
    
    Chat

<InputAdornment position="end">
                  <ChatBubbleOutlineIcon sx={{marginBottom:"18px"}}color="white"/>
                </InputAdornment>      
                <InputAdornment position="end" sx={{marginBottom:"10vh"}}>         
                  <KeyboardArrowUpIcon color="white" sx={{marginBottom:"18px", marginLeft:"15vw"}}/>
                  </InputAdornment> 
                 
                  
</div>
</div>   
  )
}

export default Chatbox