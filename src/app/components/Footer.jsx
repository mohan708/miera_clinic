import React from 'react'
import { FcCompactCamera } from "react-icons/fc";
import { IoBagRemove } from "react-icons/io5";
import { IoCarSport } from "react-icons/io5";
import { LuNotebook } from "react-icons/lu";




const Footer = () => {
  return (
   <footer className='bg-green-200 text-black py-4'>
      <div className='flex flex-col justify-center items-center'>
         <div className='text-3xl'>Revealing Soon</div>
         <div className='flex py-4 gap-4'>
            <span className=' bg-gray-50 rounded-[50%] p-2'><FcCompactCamera /></span>
            <span className=' bg-gray-50 rounded-[50%] p-2'><IoBagRemove /></span>
            <span className=' bg-gray-50 rounded-[50%] p-2'><IoCarSport /></span>
            <span className=' bg-gray-50 rounded-[50%] p-2'><LuNotebook /></span>
         </div>
         <div>
             <ul className='flex gap-4'>
                <li className='bor'>Privacy</li>
                <li>Terms</li>
                <li>Contact</li>
             </ul>
         </div>

      </div>
   </footer>
  )
}

export default Footer