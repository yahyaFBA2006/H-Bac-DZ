import React from 'react'

function ArabicLessonMt() {

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
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/1kGc6_tsIJzQp5VBRG2ZNM19qnr8N87Gm/view?usp=sharing'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
      ملخص شامل  
                    </a>
                </li>
                <li>
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/1d250xc9mC2frKAINZ30iel32DgQfSsjo/view?usp=sharing'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
                    الاسئلة المتكررة
                    </a>
                </li>

        </ul>
        </div>
      )
}

export default ArabicLessonMt