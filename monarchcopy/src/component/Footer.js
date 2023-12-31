import React from 'react'
import { Link } from 'react-router-dom'
import Monarch from '../assets/Monarch.png'

export const Footer = () => {
  return (
    <footer className="p-4 bg-black md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
          <Link to="/" target="_blank" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white ">
              <img target="_blank" className='w-20 h-20 ml-10' src={Monarch} alt='Monarch Logo'/>
              Flowbite    
          </Link>
          
          <span className="text-sm mr-11 text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" target='_blank' className="hover:underline">Monarch™</Link>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}


