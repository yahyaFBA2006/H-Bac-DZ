import React from 'react';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='Navbar bg-gray-900 '>
        <div className='flex justify-between '>
        <h1 className=' font-bold text-xl text-red-600 p-4'>H-<span className='text-white '>Bac<span className='text-yellow-300'>DZ</span></span></h1>
            <img src={logo}  className='w-20 flex relative  p-3 top-1 '/>
            
            <Link to="/" className=' text-right p-5 pr-14 font-bold text-white'>Home</Link>
            

        </div>
        <div>
          <div>
            <h1 className='text-center text-red-500 text-3xl font-bold '>
            Study <span className='text-red-100'> With </span> Me
          </h1>
          </div>
        </div>
    </div>
    
  )
}

export default Navbar