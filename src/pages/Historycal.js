import React from 'react'

function Historycal() {

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
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/1q0Gpn58dUeqkYyY_aScUJu6mR3ALmlpc/view'} className="pr-12 pl-12 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
ملخص الوحدة الاولى + مصطلحات + تواريخ
                    </a>
                </li>
                <li>
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/1ruzTj53P8j86sHocmU-6chJae1MxnF2n/view'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
                    أسئلة الوحدة الثانية
                    </a>
                </li>
                <li>
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/14hndMuUm-SQok0Nunel0TPoHl8PCET0w/view?usp=sharing'} className="pr-12 pl-12 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
                    أهم الشخصيات والتواريخ المتداولة في البكالوريا
                </a>
                </li>
                <li>
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/1I8hzCAky2MGC3n9eLsYw5uJIt-8QxNA7/view?usp=sharing'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
                    مقالات جاهزة
                </a>
                </li>
                <li>
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/14e3aVIL2zi6DUS6VM8_fjKPARcbZWkzp/view?usp=sharing'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
                    أهم أسئلة الحرب الباردة
                </a>
                </li>
                <li>
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/1CaKakdxijMGR7cT8juCu74RH8Ge4NqJt/view?usp=sharing'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
                    أسئلة غير مباشرة 
                </a>
                </li>
                <li>
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/1i4yRuCbj5K9MDUomkIz8x0N2mLKuLKS7/view?usp=sharing'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
                    جميع التواريخ في مادة التاريخ
                </a>
                </li>
                                
        <li>
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/15ECsoko5IgRWZga9lPViJGxD881Fss1j/view?usp=sharing'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
خرائط في مادة التاريخ
                    </a>
                </li>

        </ul>
        </div>
      )
}

export default Historycal