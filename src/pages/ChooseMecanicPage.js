import React from 'react'
import Book from '../assets/Book (1).png'
import Test from '../assets/Test.png'
import BacExame from '../assets/BacExame.png'
import Lesson from '../assets/Coure.png'
import { Link } from 'react-router-dom'

function ChooseMecanicPage() {
    return (
        <div>
                  <div>
            <h1 className='text-center font-extrabold  pt-8 text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-500  animate-bounce'>
              تعب اليوم هو تحضير لحفلة الغد
            </h1>
          </div>
          <div>
            <h1 className='text-center font-extrabold  pt-8 opacity-0 animation-delay-4000 animate-pulse hover:opacity-100 border-t-2 border-black text-xl'>
              توكل على اللَّه
            </h1>
            <p className='pb-12 text-xl text-blue-300 text-center pt-2'>
                    * اللهم صلِّ وسلم وبارك على سيدنا محمد *
                </p>
          </div>
    
    <div>
          <div className='flex flex-wrap  justify-center pt-16'>
    
            <Link to="/MecanicBacExame" >
            <div className="bg-slate-500 rounded-lg shadow-2xl p-4 m-8 mb-2 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
              <img src={BacExame} alt="Card" className="w-20 mb-4 ml-12 rounded-lg" />
              <div className="text-gray-800">
                <h3 className="text-white text-center text-2xl font-extrabold mb-9"> البكالوريات السابقة</h3>
              </div>
            </div>
    </Link>
    <Link to="/MecanicTest" >
          <div className="bg-yellow-400 rounded-lg shadow-2xl p-4 m-8 mb-2 w-56    pb-10  transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
            <img src={Test} alt="Card" className="w-20 mb-4 ml-12 rounded-lg" />
            <div className="text-gray-800">
              <h3 className="text-white text-center text-2xl font-extrabold mb-2">
                الفروض و الاختبارات
              </h3>
            </div>
          </div>
          </Link>
        </div>
        <div className='flex flex-wrap  justify-center pt-16 '>
    
        <Link to="/MecanicBookPage" >
            <div className="bg-green-400 rounded-lg shadow-2xl p-4 m-8  mt-2 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
              <img src={Book} alt="Card" className="w-20 mb-4 ml-12 rounded-lg" />
              <div className="text-gray-800">
                <h3 className="text-white text-center text-2xl font-extrabold mb-9"> الكتاب المدرسي</h3>
              </div>
            </div>
            </Link>
            <Link to="/MecanicLesson" >
            <div className="bg-red-500 rounded-lg shadow-2xl p-4 m-8 mt-2 w-56    pb-10   transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
              <img src={Lesson} alt="Card" className="w-20 mb-4 ml-12 rounded-lg" />
              <div className="text-gray-800">
                <h3 className="text-white text-center text-2xl font-extrabold mb-2"> الدروس و الملخصات </h3>
              </div>
            </div>
            </Link>
    
    
          </div>
    
    
    
        </div>
        </div>
      )
}

export default ChooseMecanicPage