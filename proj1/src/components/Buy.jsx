import React from 'react';
import { Footer } from './Footer';
import BoughtInfo from './BoughtInfo';
import { Link } from 'react-router-dom';

const Buy = () => {

  return (
    <div >
      <div className=' md:m-16 m-8 bg-purple-500 text-white p-2 w-16 rounded-lg text-center hover:bg-purple-300'>
        <Link to= "/main" >Back</Link>
      </div>
      <div className='p-2 text-purple-400 font-mono font-bold text-2xl'>
        <h2 className='md:ml-32 m-2'>Our Products.....</h2>
        <h3 className='text-lg md:ml-32'>"The rose speaks of love silently, in a language known only to the heart."</h3>
      </div>
      <div >
        <BoughtInfo />
      </div>
      <Footer />
    </div>
  );
};

export default Buy;