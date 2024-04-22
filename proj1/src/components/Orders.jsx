import React from 'react';
import { Footer } from './Footer';
import { Link, useParams } from 'react-router-dom';

const Orders = () => {
  const products = [
    {
      "id":1,
      "image":"https://i.pinimg.com/736x/85/52/3e/85523e911262978bced08e7bc5e7c1c1.jpg",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. ",
      "price":"$50.35"
  },
  {
      "id":2,
      "image":"https://i.pinimg.com/736x/8f/c0/16/8fc0165ae9b2f5f5cee6006bd45f2ff1.jpg",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. ",
      "price":"$57.60"
  },
  {
      "id":3,
      "image":"https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1673917749/vendor/1126/catalog/product/2/0/20220207023607_file_62012e57ccfee_62012e689f6d7.jpg",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      "price":"$40.35"
  },
  {
      "id":4,
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbrRrJVjVCNcyzF6VLvBqLc8kQmwYeYGCXhA_IKlnQYUmR5KfnMwpsX6ajFTlpMtRokI&usqp=CAU",
      "description":"lLorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      "price":"$55.00"
  },
  {
      "id":5,
      "image":"https://www.theflowerspoint.com/data/cache/images/flowers/orchids/orchids-roses-441x441.jpg",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      "price":"$35.99"
  },
  {
      "id":6,
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8tfKtJlWqfbrpnKyoqq8pluydFCo23C2AA&usqp=CAU",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      "price":"$65.99"
  },
  {
      "id":7,
      "image":"https://i2.pickpik.com/photos/829/49/267/lilla-flowers-white-nature-2feb1ab44999231aec64159e84c6d475.jpg",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      "price":"$50.35"
  },
  {
      "id":8,
      "image":"https://s3.envato.com/files/249320542/359.jpg",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      "price":"$44.76"
  },
  {
      "id":9,
      "image":"https://assets.eflorist.com/assets/products/PHR_/T48-3A.jpg",
      "description":"lorem epsum",
      "price":"$59.67"
  },
  {
      "id":10,
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp991eG4zLkRg6U-c5hbw6zFoH_f9mJOSyIsgSUB_-5-i7Adsz_i2hfym9TBj2erLQwoI&usqp=CAU",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      "price":"$44.76"
  },
  {
      "id":11,
      "image":"https://c4.wallpaperflare.com/wallpaper/272/691/812/flowers-lavender-baskets-purple-flowers-wallpaper-preview.jpg",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      "price":"$55.00"
  },
  {
      "id":12,
      "image":"https://i2.pickpik.com/photos/231/416/955/flowers-bouquet-beautiful-flowers-flower-preview.jpg",
      "description":"lorem epsum",
      "price":"$35.99"
  },
  {
      "id":13,
      "image":"https://i.pinimg.com/736x/66/f1/9c/66f19ca171b2aae2f23b7220242f05d3.jpg",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      "price":"$59.67"
  },
  {
      "id":14,
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIr34DeBH-IBRcR-SvtVhnu_Ny2cmEeN4OpA&usqp=CAU",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      "price":"$65.99"
  },
  {
      "id":15,
      "image":"https://i2.pickpik.com/photos/914/340/880/basket-lilac-bow-purple-preview.jpg",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
      "price":"$50.35"
  },
  {
    id: 16,
    image: 'https://w0.peakpx.com/wallpaper/125/650/HD-wallpaper-basket-of-flowers-purple-liliac-basket-pansies-flowers-nature-ribon.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. ',
    price:"$55.60",
  },
  {
    id: 17,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWr9Zhrytya9axrCIm0G5oxSZVz_4J_NS5g&usqp=CAU',
    description: 'PLorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. ',
    price:"$45.99",
  },
  {
    id: 18,
    image: 'https://i.pinimg.com/originals/0e/1d/f9/0e1df9584d48c4f19bf08113d1cde357.webp',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit. ',
    price:"$63.60",
  },
  {
    id: 19,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbrRrJVjVCNcyzF6VLvBqLc8kQmwYeYGCXhA_IKlnQYUmR5KfnMwpsX6ajFTlpMtRokI&usqp=CAU',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.',
    price:"$33.60",
  },
  {
    id: 20,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwdVDMhgy1BpRG5SJjiqYxxRJL861-yUaYw&usqp=CAU',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. ',
    price:"$35.60",
  },
   ];
  const { productId } = useParams();
  const selectedProduct = products.find((product) => product.id === parseInt(productId));
  return (
    <div>
       <div className=' md:m-16 m-8 bg-purple-500 text-white p-2 w-16 rounded-lg text-center hover:bg-purple-300'>
        <Link to= "/products" >Back</Link>
      </div>
      <h2 className="m-4 md:ml-32 text-purple-400 font-bold text-2xl">Sowing smiles, one bloom at a time . . . .</h2>
      <h2 className="m-4 md:ml-32 text-purple-400 font-bold text-lg">Your Order</h2>

      <div className="md:flex justify-between m-8 p-2">
        <div className="mt-16 md:ml-16">
          {selectedProduct ? (
            <>
              <img src={selectedProduct.image} alt="Product Image" className="w-[300px] h-[300px] rounded-lg shadow-2xl" />
              <p className="absolute bg-purple-400 rounded-lg text-white p-2 m-2">{selectedProduct.price}</p>

            </>
          ): <p>No product found.</p>}
        </div>

        <div id="contact" className="md:mr-64">
        <p className="text-purple-400 mt-16 ml-2">Please fill the form, we will send you an email about the payment process. Thank you!</p>

          <form action="mailto:yeabsirazelalem791@gmail.com" method="post" encType="text/plain" className="text-purple-600">
            <div className="grid md:grid-cols-2 gap-4 w-full">
              <div className="flex flex-col py-4">
                <label className="uppercase text-sm py-2">Name</label>
                <input type="text" name="name" className="border-2 rounded-lg p-3 flex border-purple-300" />
              </div>
              <div className="flex flex-col py-4">
                <label className="uppercase text-sm py-2">Phone Number</label>
                <input className="border-2 rounded-lg p-3 flex border-purple-300" type="text" name="phone" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 w-full">
              <div className="flex flex-col py-4">
                <label className="uppercase text-sm py-2">Address</label>
                <input type="text" name="name" className="border-2 rounded-lg p-3 flex border-purple-300" />
              </div>
              <div className="flex flex-col py-4">
                <label className="uppercase text-sm py-2">Date</label>
                <input className="border-2 rounded-lg p-3 flex border-purple-300 text-sm" type="date" name="phone" />
              </div>
            </div>

            <div className="flex flex-col py-4">
                <label className="uppercase text-sm py-2">Email</label>
                <input type="email" name="name" className="border-2 rounded-lg p-3 flex border-purple-300 w-[210px]" />
            </div>
              <input
                  type='submit'
                  className="bg-purple-200 text-purple-800 mt-4 md:w-full w-[210px] p-4 rounded-lg hover:bg-purple-500 hover:text-white"
                  value="Send Message"
               />
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Orders;