import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Peolples } from './Peolples';
import { Footer } from './Footer';
import { Nav } from './Nav';
export const Products = () => {
  const products = [
    {
      id: 1,
      image: 'https://w0.peakpx.com/wallpaper/125/650/HD-wallpaper-basket-of-flowers-purple-liliac-basket-pansies-flowers-nature-ribon.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. ',
      price:"$55.60",
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWr9Zhrytya9axrCIm0G5oxSZVz_4J_NS5g&usqp=CAU',
      description: 'PLorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. ',
      price:"$45.99",
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/originals/0e/1d/f9/0e1df9584d48c4f19bf08113d1cde357.webp',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit. ',
      price:"$63.60",
    },
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbrRrJVjVCNcyzF6VLvBqLc8kQmwYeYGCXhA_IKlnQYUmR5KfnMwpsX6ajFTlpMtRokI&usqp=CAU',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.',
      price:"$33.60",
    },
    {
      id: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwdVDMhgy1BpRG5SJjiqYxxRJL861-yUaYw&usqp=CAU',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. ',
      price:"$35.60",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, products.length - 1));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); 
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="product-carousel" id="products">
      <Nav/>
      <div className='text-center mt-32'>
        <h1 className='text-4xl font-mono font-bold text-purple-500'>- Our Products -</h1>
      </div>
      <div className="carousel-content flex">
        <button
          className="carousel-button md:ml-12 px-6  py-4 absolute mt-64 bg-purple-500 text-white font-bold text-2xl rounded-full shadow-2xl shadow-gray-600  hover:scale-105 transition-all duration-300 ease-in-out"
          onClick={handlePrevClick}
          disabled={currentIndex === 0}>
          &lt;
        </button>
        <div className="product-info flex mt-16 md:m-32 m-8">
          {isSmallScreen ? (
            <div key={products[currentIndex].id} className="product-item hover:scale-105 transition-all duration-300 ease-in-out rounded-2xl shadow-2xl shadow-gray-600 m-4">
              <div className='absolute m-4  bg-purple-400 text-white p-1 rounded-lg'>
                  <span>{products[currentIndex].price}</span>
                 </div>
              <img src={products[currentIndex].image} alt="Product" className='md:w-full md:h-auto w-[400px] h-[300px] rounded-lg p-8' />
              <p className='text-purple-600 p-4 text-center font-light'>{products[currentIndex].description}</p>
              <Link to="/buy"className=" md:ml-32 p-2 m-8 border border-shadow-lg rounded-lg bg-purple-400 text-white hover:bg-purple-100 hover:border-none hover:scale-105 transition-all duration-300 ease-in-out">Order Now
                 </Link>
            </div>
          ) : (
            products.slice(currentIndex, currentIndex + 3).map((product) => (
              
              <div key={product.id} className="product-item flex-1  hover:scale-105 transition-all duration-300 ease-in-out rounded-2xl shadow-2xl shadow-gray-600 m-4">
                <div className='absolute m-4  bg-purple-400 text-white p-1 rounded-lg'>
                  <span>{product.price}</span>
                 </div>
                <img src={product.image} alt="Product" className='md:w-[500px] md:h-[400px] w-[400px] h[300px] rounded-lg p-8' />
                <p className='text-purple-600 p-4 text-center font-light'>{product.description}</p>
                 <Link to="/buy"className=" ml-32 p-2 m-2 border border-shadow-lg rounded-lg bg-purple-400 text-white hover:bg-purple-100 hover:border-none hover:scale-105 transition-all duration-300 ease-in-out">Order Now
                 </Link>
                 
              </div>
            ))
          )}
        </div>
        <button
          className="carousel-button md:mr-12 px-6 py-4 absolute right-0 mt-64 bg-purple-500 text-white font-bold text-2xl rounded-full  hover:scale-105 transition-all duration-300 ease-in-out"
          onClick={handleNextClick}
          disabled={currentIndex >= products.length - 1}
        >
          &gt;
        </button>
      </div>
      <Peolples/>
      <Footer/>
    </div>
  );
};