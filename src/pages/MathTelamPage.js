import React from 'react'
import Math from '../assets/Math.png'
import Physic from '../assets/Physic.png'
import sceince from '../assets/sceince.png'
import geo from '../assets/GEO (1).png'
import islamic from '../assets/Islamic.png'
import Arabic from '../assets/Arabic.png'
import English from '../assets/English.png'
import {Link} from 'react-router-dom'
import French from '../assets/French.png'
import Phylosophy from '../assets/Phylsophy.png'
function MathTelam() {
    return (
        <div>
          <div>
          <h1 className='text-center font-extrabold  pt-8 text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-bounce'>
            مرحبا بكم يا طلاب شعبة  رياضيات
          </h1>
        </div>
        <div>
          <h1 className='text-center font-extrabold  pt-8 opacity-0 animation-delay-4000 animate-pulse hover:opacity-100 border-t-2 border-black text-xl'>
            نتمنى لك التوفيق في امتحان شهادة البكالوريا
          </h1>
        </div>
    
    <div className='flex flex-wrap  justify-center'>
    
    <div className='flex flex-wrap  justify-center'>
        <Link to="/choosePhysicMTPage">
        <div className="bg-red-400 rounded-lg shadow-2xl p-4 m-12 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
            <img src={Physic} alt="Card" className="w-20 mb-4 ml-12 rounded-lg" />
            <div>
            <h3 className="text-white text-center text-3xl font-extrabold mb-2"> مادة الفيزياء</h3>
            <p className="text-sm text-black text-center pt-3 ">
                دروس و ملخصات، مواضيع، بكالوريات، كتاب المدرسي ...
            </p>
            </div>
        </div>
        </Link>
    
        <Link to="/ChooseMathMMPage">
            <div className="bg-amber-300 rounded-lg shadow-2xl p-4 m-12 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
            <img src={Math} alt="Card" className="w-20 mb-4 ml-12 rounded-lg" />
            <div className="text-gray-800">
            <h3 className="text-white text-center text-3xl font-extrabold mb-2"> مادة الرياضيات</h3>
            <p className="text-sm text-black text-center pt-3 ">
                بكالوريات، مواضيع، دروس، كتاب المدرسي ...
            </p>
            </div>
        </div>
        </Link>
    
 
        <Link to="/ChooseSCMMPage">
            <div className="bg-violet-300 rounded-lg shadow-2xl p-3 m-12 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
            <img src={sceince} alt="Card" className="w-20 mb-4 ml-12 rounded-lg" />
            <div className="text-gray-800">
            <h3 className="text-white text-center text-3xl font-extrabold mb-2">العلوم الطبيعية </h3>
            <p className="text-sm text-black text-center pt-3 ">
            دروس و ملخصات، نصوص علمية ، بكالوريات، كتاب المدرسي ...
            </p>
            </div>
        </div>
        </Link>
    
        </div>
        </div>
    
    <div className='flex flex-wrap justify-center'>
    <Link to="/ChoosePhiloMMPage">
            <div className="bg-red-300 rounded-lg shadow-2xl p-4 m-12 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
            <img src={Phylosophy} alt="Card" className="w-20 mb-4 ml-12 rounded-lg" />
            <div className="text-gray-800">
            <h3 className="text-white text-center text-3xl font-extrabold mb-2"> مادة الفلسفة</h3>
            <p className="text-sm text-black text-center pt-3 ">
                مقالات، بكالوريات، كتاب المدرسي، مخططات ...
            </p>
            </div>
        </div>
        </Link>

    <Link to="/ChooseGeoPage">
        <div className="bg-slate-100 rounded-lg shadow-2xl p-4 m-12 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
            <img src={geo} alt="Card" className="w-20 mb-4 ml-12 rounded-lg" />
            <div className="text-gray-800">
            <h3 className="text-white text-center text-2xl font-extrabold mb-2"> التاريخ و الجغرافيا</h3>
            <p className="text-sm text-black text-center pt-3 ">
                مصطلحات، تواريخ، شخصيات، خرائط، ملخصات، كتاب المدرسي ...
            </p>
            </div>
        </div>
        </Link>
    
        <Link to="/ChooseIslamicPage">
            <div className="bg-teal-400 rounded-lg shadow-2xl p-4 m-12 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
            <img src={islamic} alt="Card" className="w-20 mb-4 ml-12 rounded-lg" />
            <div className="text-gray-800">
            <h3 className="text-white text-center text-3xl font-extrabold mb-2"> العلوم الاسلامية</h3>
            <p className="text-sm text-black text-center pt-3 ">
                مواضيع،دروس و ملخصات، بكالوريات، كتاب المدرسي ...
            </p>
            </div>
        </div>
        </Link>
    </div>

<div className='flex flex-wrap justify-center'>
<Link to="/ChooseArabicPage">
        <div className="bg-indigo-300 rounded-lg shadow-2xl p-4 m-12 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
            <img src={Arabic} alt="Card" className="w-20 mb-4 ml-12 rounded-lg" />
            <div className="text-gray-800">
            <h3 className="text-white text-center text-3xl font-extrabold mb-2"> اللغة العربية</h3>
            <p className="text-sm text-black text-center pt-3 ">
                البناء اللغوي و الفكري، مواضيع، بكالوريات، كتاب المدرسي
            </p>
            </div>
        </div>
        </Link>
        <Link to="/ChooseEnglishPage">
            <div className="bg-orange-400 rounded-lg shadow-2xl p-3 m-12 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
            <img src={English} alt="Card" className="w-20 mb-4 ml-12 rounded-lg" />
            <div className="text-gray-800">
            <h3 className="text-white text-center text-3xl font-extrabold mb-2"> اللغة الانجليزية</h3>
            <p className="text-sm text-black text-center pt-3 ">
                قواعد، مصطلحات، قواعد، مواضيع، بكالوريات، كتاب المدرسي
            </p>
            </div>
        </div>
        </Link>
        <Link to="/ChooseFrenchMTPage ">
        <div className="bg-green-400 rounded-lg shadow-2xl p-3 m-12 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
            <img src={French} alt="Card" className="w-20 mb-11 ml-12 rounded-lg" />
            <div className="text-gray-800">
            <h3 className="text-white text-center text-3xl font-extrabold mb-2"> اللغة الفرنسية</h3>
            <p className="text-sm text-black text-center pt-3 ">
                قواعد، دروس و ملخصات، مواضيع، بكالوريات، كتاب المدرسي ...
            </p>
            </div>
        </div>
        </Link>

</div>

    </div>
    
    
      )
}

export default MathTelam