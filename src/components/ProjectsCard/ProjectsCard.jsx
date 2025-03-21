import React from 'react'
import bannerImg from "../../assets/photo-C8q0KQHG.webp"

function ProjectsCard({title, main}) {
  return (
    <div className='pb-3 flex flex-col w-90 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
        <img src={bannerImg} alt="Banner Image" className='mb-3 rounded-xl' />
        <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>{title}</h3>
        <p className='px-4 text-sm md:text-md leading-tight py-2'>{main}</p>
        <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4'>
            <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
            duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] cursor-pointer'>Demo</button>
            <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
            duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] cursor-pointer'>Spurce Code</button>
        </div>
    </div>
  )
}

export default ProjectsCard