import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'

import { MdOutlineEmail } from 'react-icons/md'


function Footer() {
  return (
    <div id='Footer' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
        <div>
            <h1 className='text-2xl md:text-6xl font-bold mb-2'>Contact</h1>
            <h2 className='text-sm md:text-2xl font-normal'>Feel Free To reach out</h2>
        </div>

        <ul className='text-sm md:text-xl'>
            <li className='flex gap-2 items-center mb-3'>
                <MdOutlineEmail size={20} />
                myeamil@gmail.com
            </li>
            <li className='flex gap-2 items-center mb-3'>
                <CiLinkedin size={20}  />
                linkedin.com
            </li>
            <li className='flex gap-2 items-center mb-3'>
                <FaGithub size={20} />
                github.com
            </li>
        </ul>
    </div>
  )
}

export default Footer