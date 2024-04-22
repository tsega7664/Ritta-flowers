import React,{useState} from "react";
import { AiOutlineMenu} from "react-icons/ai"
import { Link } from 'react-router-dom';

export const Nav = () => {
  
  const [nav,setNav] = useState(false);
  const handleNav = () =>{
      setNav(!nav);
  }
  return  (
    <div id="main">
     <img className=" w-full h-screen object-cover object-left" src="https://t4.ftcdn.net/jpg/02/07/80/23/360_F_207802308_VrXubUKcOneHGtGHxzBlNTND6tKFqolB.jpg" />
       <div className="w-full h-screen absolute bg-white/30 top-0">
       
            <AiOutlineMenu size={24} onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden text-purple-900"/>

              {
                nav ? <div onClick={handleNav} className="fixed w-full h-screen flex flex-col justify-center items-center z-20 bg-white/30">
                   
                            <a href="#main" className="w-[75%]   flex justify-center items-center rounded-full shadow-lg bg-white text-purple-400 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            
                            <span className="pl-4">Home</span>
                            </a>
                            <a href="#products" onClick={handleNav}  className="w-[75%]   flex justify-center items-center rounded-full shadow-lg bg-white text-purple-400 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                           
                            <span className="pl-4">Products</span>
                            </a>
                            <a href="#testimony" onClick={handleNav}  className="w-[75%]   flex justify-center items-center rounded-full shadow-lg bg-white text-purple-400 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            
                            <span className="pl-4">Testimonials</span>
                            </a>
                           
                            <a href="#footer" onClick={handleNav}  className="w-[75%]  flex justify-center items-center rounded-full shadow-lg bg-white text-purple-400 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            
                            <span className="pl-4">Contact</span>
                            </a>
                    </div>
                    :
                    ''//empty
              }
                  <div className='hidden md:flex justify-end text-white'>
              <div className='p-12 font-bold hover:underline hover:text-purple-300 hover:scale-105 transition-all duration-300 ease-in-out'>
                <a href='#main'>Home</a>
              </div>
              <div className='p-12 font-bold hover:underline hover:text-purple-300 hover:scale-105 transition-all duration-300 ease-in-out'>
                <a href='#products'>Products</a>
              </div>
              <div className='p-12 font-bold hover:underline hover:text-purple-300 hover:scale-105 transition-all duration-300 ease-in-out'>
                <a href='#testimony'>Testimonials</a>
              </div>
            
              <div className='p-12 font-bold hover:underline hover:text-purple-300 hover:scale-105 transition-all duration-300 ease-in-out'>
                <a href='#footer'>Contact us</a>
              </div>
            </div>
          <div >
            <div className='flex flex-col text-center mt-32 text-white justify-center '>  
                   <h1 className='text-6xl font-mono  font-bold py-4'>Rita Flowers</h1>
                    <h2 className='text-2xl font-bold font-mono py-2'>- PURE COLLECTIONS -</h2>
                    <h3 className='text-sm font-'>"Flowers are the music of the ground. From earth's lips spoken without sound." - Edwin Curran</h3>
                     <div className='mt-8'>
                     <Link to="/buy" ><button className='p-2 border border-shadow-lg rounded-lg hover:bg-purple-400 hover:border-none hover:scale-105 transition-all duration-300 ease-in-out">'>Order Now</button>
                 </Link>
                     </div>
            </div>
          </div>
       </div>
    </div>
  )
};