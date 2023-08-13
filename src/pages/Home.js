import React from 'react'
import winter from '../assets/Winter-80_icon-icons.com_57238.png'
import Marke from '../assets/Marke.png'
import Medal from '../assets/medal.png'
import Cards from '../components/Cards'
import Instagram from '../assets/Instagram.png'

import { Link } from "react-router-dom";
function Home() {
  return (

  <div>
    <div className='flex relative space-x-4 justify-center mt-4 '>
      <img src={Marke}  className='animate-spin'/>
      <h1 className='font-bold text-xl text-center'>
      <span className='text-red-600'>Mahdi</span>'s Knowledge Center</h1>
      <img src={Medal} className="animate-bounce" />
      <img src={Medal}  className='hidden sm:block max-w-640px'/>
      <img src={Medal}  className="animate-bounce hidden sm:block max-w-640px " />
    </div>
    <div>
    <h2 className='font-bold text-blue-800 text-center mt-4'>
      Academy <span className='text-red-600 font-bold'>of</span> Learning
    </h2>
    </div>
    <div>
      <h1 className='text-center font-extrabold  opacity-0 animation-delay-4000 animate-pulse hover:opacity-100 border-t-2 border-black' >
"Mahdi, never stop learning and growing. You've got this!"</h1>
    </div>

    <div>
      <h1 className='text-center font-extrabold  pt-8 text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-bounce'>
        مرحبا بكم يا طلاب بكالوريا 2024
      </h1>
      <div className='flex space-x-10 justify-center pt-3'>
        <img src={winter} className='animate-spin'/>
        <img src={winter} className='animate-spin'/>
        <img src={winter} className='animate-spin'/>
        <img src={winter} className='animate-spin'/>
        
      </div>
    </div>
    <div>
    <Link to="https://www.instagram.com/3_as_study_with_me/" >
<div className='flex justify-center'>
    <div className="bg-pink-300 space-x-4 flex rounded-full shadow-2xl p-4 m-14 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
        <img src={Instagram} alt="Card" className="w-8  ml-2 rounded-lg justify-center " />
        <div className="text-white text-center">
        <h3 className="text-xl font-bold  mb-2 pb-0 pt-0">My instagram</h3>

        </div>
    </div>
</div>
</Link>
    </div>
    <div>
      <Cards/>
    </div>

    </div>
    
    
  )
}
export default Home