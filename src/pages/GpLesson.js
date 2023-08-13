import React from 'react'

function GpLesson() {
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
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/16LFVn2LLksM4y5pbAPI-jpV1iWnR5Cf6/view?usp=sharing'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
                    ملخص شامل لجميع الدروس 
                </a>
                </li>
    
        <li>
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/16G6wVBDWkW7RD3CZrVvVMp_EH0ZVWlaz/view?usp=sharing'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
                    ملخص كيمياء عضوية
                    </a>
                </li>
                <li>
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/162p_FGTFmvF7sPowys3WtZiC-9jj5it5/view?usp=sharing'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
                    ملخص اللبيدات
                    </a>
                </li>
                <li>
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/163s-nAjyxZ50jzkuhABSU6ap4ah4hiWO/view?usp=sharing'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
                    ملخص الكيمياء الحرارية
                </a>
                </li>
                <li>
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/16Nu5rlktthi1WcHsKWczEGBlXcuwK-m-/view?usp=sharing'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
                    ملخص الحركية
                </a>
                </li>
                <li>
                    <a href={process.env.PUBLIC_URL + 'https://drive.google.com/file/d/16Sy-8Su6_wPhTZpzvsr5_o8Bo3XHAxUr/view?usp=sharing'} className="pr-16 pl-16 pt-2 pb-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg bg-red-300 ">
                    موازنة معادلة كيميائية
                </a>
                </li>

        </ul>
        </div>
      )
}

export default GpLesson