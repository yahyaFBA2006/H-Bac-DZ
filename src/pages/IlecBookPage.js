import React from 'react'

function IlecBookPage() {
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
    
                      <li>
                <a href={process.env.PUBLIC_URL + 'https://eddirasa.com/wp-content/uploads/2016/01/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D9%85%D8%AE%D8%AA%D8%A7%D8%B1%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D8%A9%20%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%D8%A9%20%D8%AB%D8%A7%D9%84%D8%AB%D8%A9%20%D8%AB%D8%A7%D9%86%D9%88%D9%8A.pdf'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
    الكتاب المدرسي في مادة الهندسة الكهربائية
                </a>
            </li>
        </div>
      )
}

export default IlecBookPage