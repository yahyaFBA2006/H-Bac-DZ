import React from 'react'

function MathBookPage() {
  return (
<div className='pt-8 text-center'>
  
  <div>
        <h1 className='text-center font-extrabold  pt-8 text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-500  animate-bounce'>
        كن مصدر إلهام لنفسك وللآخرين من خلال التعلم           
          </h1>
      </div>
      <div className='pb-4'>
        <h1 className='text-center font-extrabold  pt-8 opacity-0 animation-delay-4000 animate-pulse hover:opacity-100 border-t-2 border-black text-xl'>
          توكل على اللَّه
        </h1>
      </div>

                  <li>
            <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/0B3R5Ic-6wo6uZnhLT2JMR0VnenM/view?fbclid=IwAR3UEUvTd9MEPQa-Fd378BDQNeZwl87ioVQb3pu1FlROLOICuGedQLspyCQ&resourcekey=0-5gMU5TMbAAzgyQhg_xHp6w'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
الكتاب المدرسي في مادة الرياضيات
            </a>
        </li>
    </div>
  )
}

export default MathBookPage