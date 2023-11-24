import React from 'react'
import Drh from '../../assets/wi.png'
export default function Home() {
  return (
    <div className='wrap flex flex-col w-full h-screen pt-20 px-32 pb-0'>
      <div className='top w-full flex flex-col items-center'>
         <p className='border p-2 w-14 font-body rounded-lg'>Hello</p>
         <h1 className='text-6xl text-center font-body -z-10'>I'm <span className='text-[#ff3c00] font-body'>Mujib,</span><br />Frontend Developer</h1>
      </div>
      <div className='w-full bottom mt-3 flex justify-between'>
         <div className='bottom-left flex-1 flex flex-col justify-center'>
            <p className='font-body text-base mb-4 w-96 bg-slate-100 p-5 shadow-md rounded-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, veniam doloremque. Aperiam ea vel non ipsum dolor ex.</p>
            <p className='font-semibold bg-slate-100 shadow-md p-3 mb-4 w-20'>450+</p>
            <p className='bg-slate-100 shadow-md p-3 w-32 z-40 rounded-md'>Client served</p>
         </div>
         <div className=' w-full bottom-center flex-1 flex justify-center items-baseline relative'>
            <img src={Drh} className='w-96 z-10 -mt-28 overflow-hidden ml-4'/>
            <div className='w-96 h-96 rounded-full absolute -bottom-40 left-8 bg-[#ff3c00] -z-10'></div>
            <div className='flex justify-between bg-slate-50 rounded-full absolute -bottom-3 left-28 z-40 p-1'>
               <button className=' bg-[#ff3c00] py-1 px-5 text-white rounded-full mr-3'>Portofolio</button>
               <button className='py-1 px-5 text-black bg-transparent border-2 rounded-full'>Hire Me</button>
            </div>
         </div>
         <div className='bottom-right flex-1 flex justify-center flex-col items-center'>
            <p className='text-xl text-[red] bg-slate-100 p-3 shadow-md mb-4 w-24 text-center'>****</p>
            <p className='text-xl font-semibold bg-slate-100 p-3 shadow-md mb-4 w-32 text-center'>10 Years</p>
            <p className='text-lg bg-slate-100 p-3 shadow-md w-24 text-center'>Expert</p>
         </div>
      </div>
    </div>
  )
}
