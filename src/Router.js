import React, { useEffect, useState }  from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Users';
import Profile from './Profile';
import Comingsoon from './Comingsoon';

const Router = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
   const url='https://panorbit.in/api/users.json'
  
    const fetchUsers = async (url) => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data.users);
        setUsers(data.users);
        setLoading(false);
        localStorage.setItem('users', JSON.stringify(data));
      }
      catch (error) { setLoading(false);console.log(error); alert("ERROR Occured " + error); }
    }
    useEffect(() => { fetchUsers(url); }, []);

  return (
    
    <Routes>
      <Route path="/" element={<Users users={users}/>} />
      <Route path="/profile/:profileId" element={<Profile users={users}/>} />
      <Route path="/Posts/:profileId" element={<Comingsoon/>} />
      <Route path="/Gallery/:profileId" element={<Comingsoon/>} />
      <Route path="/ToDo/:profileId" element={<Comingsoon/>} />
    </Routes>

  )
}

export default Router