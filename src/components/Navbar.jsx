import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
        <nav className=' mb-20 flex items-center justify-between py-6'>
          <div className='flex flex-shrink-0 items-center'>
            <p className='text text-4xl mx-2 w-10'> abc</p>

          </div>
          <div className='m-8 items-center justify-center gap-4 text-2xl flex'>
          <FaGithub />
          <BsLinkedin />
          </div>
          </nav>
    </>
  )
}

export default Navbar