import React from 'react'
import './Comingsoon.css'
import Sidbar from './Sidbar'
import { useLocation } from 'react-router-dom'

const Comingsoon = () => {
    const location =useLocation()
  return (
    <div className='container'>
    <Sidbar user={location.state}/>
   <p className='comingsoon'>Coming Soon</p>
   </div>
  )
}

export default Comingsoon