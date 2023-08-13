import React from 'react'

function SCSCBook() {
  return (
    <div>
      <ul className='text-center pt-14'>
        <li>
        <a href={process.env.PUBLIC_URL + ''} className="pr-3 pl-3 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-slate-300 ">
          الكتاب المدرسي 
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SCSCBook