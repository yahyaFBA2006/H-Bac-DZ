import React from 'react';
import Instagram from '../assets/Instagram.png'
import { Link } from "react-router-dom";
import Telegram from '../assets/telegram_logo_icon_147228.png'

const Footer = () => {
  return (
    <footer className=" bg-gray-900 py-2 mt-8 text-center text-white font-bold">
      <div className="text-2xl font-bold mb-4">Contact Information:</div>
      <div className="text-xl mb-3">Mahdi Yahya </div>
      <div className="text-lg mb-6">
        <a href="mailto:yahyamahdi4242@gmail.com" className="text-red-600 hover:underline">
          yahyamahdi4242@gmail.com
        </a>
      </div>
      <div className=' flex justify-center space-x-6 mb-6 flex-wrap'>
<h1>Don't forget to follow me in my social media accounts :</h1>
      </div>
      <div className='flex justify-center flex-wrap space-x-8 '>
      <Link to="https://www.instagram.com/3_as_study_with_me/" >
<img src={Instagram} alt="Card" className=" flex w-8 rounded-lg justify-center  mb-2  " />
</Link>
<Link to="https://t.me/HBacDZ" >
<img src={Telegram} alt="Card" className=" flex w-8 rounded-lg justify-center  mb-2  " />
</Link>
      </div>
      <div className="text-lg leading-relaxed flex-wrap">
        Thank you for visiting my website! If you have any questions, requests, or collaboration opportunities, feel free to reach out to me.
      </div>
      <div className="text-sm mt-8 opacity-80">&copy; {new Date().getFullYear()} Mahdi. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
