import React, { useState } from 'react'
import Menu from '../../assets/menu.png'
import Delete from '../../assets/x.png'
import Icon from '../../assets/a.png'
export default function Navbar() {
   const [dropDown, setDropDown] = useState(false)
  return (
   <div className='wrap'>
            <nav className={dropDown ?'w-60 bg-slate-800 h-screen fixed right-0 top-0 flex flex-col py-32 px-10 justify-around transition duration-1000' : 'fixed left-48 top-0 sm:w-3/4 flex justify-between px-5 sm:px-12 py-1 sm:py-3 sm:bg-slate-800 m-auto sm:rounded-full sm:mt-5'}>
               <div className={dropDown ? 'flex flex-col' : 'menu hidden sm:block'}>
                  <a href="#" className={dropDown? 'mb-5 text-white hover:text-[#ff1e00]' : 'mr-5 text-white hover:text-[#ff1e00]'}>Home</a>
                  <a href="#" className={dropDown?'mb-5 text-white hover:text-[#ff1e00]' : 'mr-5 text-white hover:text-[#ff1e00]'}>About</a>
                  <a href="#" className='text-white hover:text-[#ff1e00]'>Services</a>
               </div>
               <div className={dropDown ? 'flex flex-col' : 'menu hidden sm:block'}>
                  <a href="#" className={dropDown ? 'text-white flex hover:text-[#ff1e00]' : ' text-white flex hover:text-[#ff1e00]'}>Muhamad <span><img src={Icon} className='w-6 mx-2' /></span> Mujib</a>
               </div>
               <div className={dropDown ? 'flex flex-col' : 'menu hidden sm:block'}>
                  <a href="" className={dropDown ? 'mb-5 text-white hover:text-[#ff1e00]' : 'mr-5 text-white hover:text-[#ff1e00]'}>Projects</a>
                  <a href="" className={dropDown ? 'mb-5 text-white hover:text-[#ff1e00]' : 'mr-5 text-white hover:text-[#ff1e00]'}>Blog</a>
                  <a href="" className='text-white hover:text-[#ff1e00]'>Contact</a>
               </div>
           </nav>   
      <button onClick={() => setDropDown((prev) => !prev)}><img src={dropDown ? Delete : Menu} className='w-7 opacity-95 sm:opacity-0 absolute top-5 right-5'/></button>
   </div>
  )
}
