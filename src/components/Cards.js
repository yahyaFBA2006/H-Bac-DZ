import React from 'react'
import Sceintific from '../assets/sceintific.png'
import MathT from '../assets/MathT.png'
import MathM from '../assets/MathM.png'
import Gesion from '../assets/Gesion.png'
import philo from '../assets/Philo.png'
import languege from '../assets/Langueges.png'
import Idea from '../assets/istockphoto-1150776990-1024x1024.jpg' 
import Check from '../assets/istockphoto-1179512455-1024x1024.jpg'
import Telegram from '../assets/telegram_logo_icon_147228.png'

import { Link } from "react-router-dom";

function Cards() {
    return (
<div className='justify-center' >

<div className='flex flex-wrap  justify-center '>
<Link to="/sceintificPage" >
    <div className=''>
        <div className="bg-slate-400 rounded-lg shadow-2xl p-4 m-14 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
        <img src={Sceintific} alt="Card" className="w-20 mb-4 ml-12 rounded-lg" />
        <div className="text-white text-center">
        <h3 className="text-2xl font-bold mb-2 pb-10 pt-4"> شعبة علوم تجريبية</h3>

        </div>
    </div>
</div>
</Link>

<Link to="/MathTecniquePage" >
<div>
    <div className="bg-red-400 rounded-lg shadow-2xl p-5 m-16 mt-14 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
        <img src={MathT} alt="Card" className="w-20 mb-4 ml-12 rounded-lg" />
        <div className="text-white text-center">
        <h3 className="text-2xl font-bold mb-2 pb-10 pt-3 "> شعبة تقني رياضي</h3>

        </div>
    </div>
</div>
</Link>

<Link to="/MathTelamPage" >
<div>
    <div className="bg-cyan-500 rounded-lg shadow-2xl p-4 m-14 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
        <img src={MathM} alt="Card" className="w-20 mb-4 ml-12 rounded-lg" />
        <div className="text-white text-center">
        <h3 className="text-2xl font-bold mb-2 pb-10 pt-4 ">شعبة رياضيات</h3>

        </div>
    </div>
</div>
</Link>

</div >
<div className='flex flex-wrap  justify-center pt-2'>
<Link to="/GesionPage" >
<div className=''>
    <div className="bg-yellow-300 rounded-lg shadow-2xl p-4 m-14 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
        <img src={Gesion} alt="Card" className="w-20 mb-4 ml-12 rounded-lg" />
        <div className="text-white text-center">
        <h3 className="text-xl font-bold mb-2 pb-10 pt-4"> شعبة تسيير و اقتصاد</h3>

        </div>
    </div>
</div>
</Link>



<Link to="/PhiloPage" >
<div>
    <div className="bg-fuchsia-500 rounded-lg shadow-2xl p-4 pb-0 m-14 mt-14 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
        <img src={philo} alt="Card" className="w-20 mb-4 ml-12  rounded-lg" />
        <div className="text-white text-center">
        <h3 className="text-2xl font-bold mb-2 pb-10 pt-4 first:"> شعبة أداب و فلسفة</h3>

        </div>
    </div>
</div>
</Link>


<Link to="/LanguegesPage" >
<div>
    <div className="bg-green-400 rounded-lg shadow-2xl p-4 m-14 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
        <img src={languege} alt="Card" className="w-20 mb-4 ml-12 rounded-lg" />
        <div className="text-white text-center">
        <h3 className="text-2xl font-bold mb-2 pb-10 pt-4"> شعبة لغات أجنبية</h3>

        </div>
    </div>
</div>
</Link>
</div>


<div className=' flex-wrap flex justify-center'>
    
<Link to="/ToDoListe" >
<div className=''>
    <div className="bg-gray-600 space-x-4 flex rounded-lg shadow-2xl p-4 m-14 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
        <img src={Check} alt="Card" className="w-8 mb-2 ml-4 rounded-lg justify-center " />
        <div className="text-white text-center">
        <h3 className="text-2xl font-bold mb-2 pb-0 pt-0"> To Do Liste </h3>

        </div>
    </div>
</div>
</Link>
<Link to="/Advises" >
<div className=''>
    <div className="bg-orange-500 space-x-4 flex rounded-lg shadow-2xl p-4 m-14 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
        <img src={Idea} alt="Card" className="w-8 mb-2 ml-4 rounded-lg justify-center " />
        <div className="text-white text-center">
        <h3 className="text-lg font-bold  mb-2 pb-0 pt-0"> نصائح و ارشادات </h3>

        </div>
    </div>
</div>
</Link>

</div>

<div className='flex justify-center'>
<Link to="https://t.me/HBacDZ" >
<div className='flex justify-center'>
    <div className="bg-blue-300 space-x-4 flex rounded-full shadow-2xl p-4 m-14 w-56 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
        <img src={Telegram} alt="Card" className="w-8  ml-2 rounded-lg justify-center " />
        <div className="text-white text-center">
        <h3 className="text-xl font-bold  mb-2 pb-0 pt-0">My Telegram </h3>

        </div>
    </div>
</div>
</Link>
</div>
</div>

    )
}

export default Cards