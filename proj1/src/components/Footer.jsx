import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaWhatsapp,
  FaTiktok
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div id='footer' className='bg-purple-400 w-full flex flex-col justify-evenly'>
      <div className='flex justify-between mt-16 p-4'>
        <div className='flex flex-col text-white md:ml-16 font-mono font-bold'>
          <a className='p-2 hover:underline' href='#main'>Home</a>
          <a className='p-2 hover:underline' href='#products'>Products</a>
          <a className='p-2 hover:underline' href='#testimony'>Testimonials</a>
          <a className='p-2 hover:underline' href='#main'>Order now</a>
          <a className='p-2 hover:underline' href='#footer'>Contact us</a>
        </div>

        <div className='text-white md:mr-16 font-mono font-bold'>
          <p className='p-2 hover:underline'>Address</p>
          <p className='p-2 hover:underline'>Ethiopia, Addis Ababa, Saris</p>
          <p className='p-2 hover:underline'>+251 111-222-333</p>
          <p className='p-2 hover:underline'>Po.box: 351</p>
          <p className='p-2 hover:underline'>Fax: aa-45</p>
        </div>
      </div>
      <div className='flex justify-center text-white'>
        <a href='#main' className='m-3 md:p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <FaFacebook size={24} />
        </a>
        <a href='#main' className='m-3 md:p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <FaInstagram size={24} />
        </a>
        <a href='#main' className='m-3 md:p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <FaTelegram size={24} />
        </a>
        <a href='#main' className='m-3 md:p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <FaYoutube size={24} />
        </a>
        <a href='#main' className='m-3 md:p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <FaWhatsapp size={24} />
        </a>
        <a href='#main' className='m-3 md:p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <FaTiktok size={24} />
        </a>
      </div>
    </div>
  );
};