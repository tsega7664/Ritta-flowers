
import { Products } from "./components/Products";
import {  Routes, Route } from 'react-router-dom';
import Buy from "./components/Buy";
import Orders from "./components/Orders";


export default function App() {
  return (
    <>
    <div>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/buy' element={<Buy/>}/>
          <Route path="/your-Order/:productId" element = {<Orders />} />
          <Route path="/main" element ={<Products />} />
          <Route path="/products" element ={<Buy />} />

        </Routes>
    </div>
    
    </>
  )
}
