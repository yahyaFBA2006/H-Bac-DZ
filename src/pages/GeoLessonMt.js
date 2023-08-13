import React from 'react'
import { Link } from 'react-router-dom'

function GeoLessonMt() {
  return (
<div className='pt-4'>
    <div>
    <h1 className='text-center font-extrabold  pt-8 text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-500  animate-bounce'>
    المعرفة تمنحك القوة لتغيير العالم                
      </h1>
  </div>
  <div className='pb-4'>
    <h1 className='text-center font-extrabold  pt-8 opacity-0 animation-delay-4000 animate-pulse hover:opacity-100 border-t-2 border-black text-xl'>
      توكل على اللَّه
    </h1>
  </div>

    <div className='flex space-x-10  justify-center pt-4'>
<Link to="/Historical">
        <div className='p-8 rounded-2xl bg-yellow-300'>
<h1 className='font-bold text-3xl'>
مادة التاريخ
</h1>
        </div>
</Link>    
<Link to="/Geo2">
        <div className='p-8 pl-5 pr-5 rounded-2xl bg-red-300'>
<h1 className='font-bold text-3xl'>
مادة الجغرافية
</h1>
        </div>
</Link>
    </div>
</div>
  )
}

export default GeoLessonMt