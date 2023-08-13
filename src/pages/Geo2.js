import React from 'react'

function Geo2() {

    return (
        <div className='pt-8 text-center'>
          
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
        <ul className='space-y-6'>

        <li>
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/14WEy5ERY9qjr-WTznKIuOHjuFwFMf9ML/view?usp=sharing'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
                    الملخص الشامل
                </a>
                </li>

        <li>
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/153kPuEvN6hx9O3ppr0LS2s_wzGoLTlXG/view?usp=sharing'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
جميع خرائط جغرافيا
                    </a>
                </li>
                <li>
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/15Q4PGobulu7ublywWw0rsJLX_Xa2wuWv/view?usp=sharing'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
                    مصطلحات الوحدة التّعلميّة الأولى
                    </a>
                </li>
                <li>
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/13DcIfFB1uYY-MHaOZbU7RuIDNbgxU78J/view'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
                    مقالات الوحدة الأولى جغرافيا
                </a>
                </li>
        </ul>
        </div>
      )
}

export default Geo2