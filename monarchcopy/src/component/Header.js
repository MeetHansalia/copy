import React, { useState } from 'react'
import Monarch from "../assets/Monarch.png"
import Logo from "../assets/Logo.png"
import {NavLink, Link} from "react-router-dom"

export const Header = () => {
  const [hidden, setHidden] = useState(true)
  const activeClass = "text-base block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
  const inActiveClass = "text-base block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <header>      
      <nav className="bg-emerald-200 border-gray-200 dark:bg-gray-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="" className="flex items-center">
            <img src={Monarch} className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Monarch</span>
        </NavLink >
        <div className="flex items-center md:order-2">
            <button  onClick={()=>setHidden(!hidden)} type="button" className={` flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600`} id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src={Logo} alt="user"/>
            </button>
            {/* -- Dropdown menu -- */}
            <div  className={`z-50 ${hidden ? "hidden" : ""} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Meet Hansalia</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">killerhyper2@gmail.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link >
                </li>
                <li>
                  <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link >
                </li>
                <li>
                  <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</Link >
                </li>
                <li>
                  <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link >
                </li>
              </ul>
            </div>
             <button onClick={()=>setHidden(!hidden)} data-collapse-toggle="navbar-user" type="button" className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`} aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button> 
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-emerald-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-emerald-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? activeClass : inActiveClass } end>DashBoard</NavLink>
            </li>            
            <li>
              <NavLink to="home/reports" className={({isActive}) => isActive ? activeClass : inActiveClass }>Reports</NavLink>
            </li>
            <li>
              <NavLink to="home/Crm" className={({isActive}) => isActive ? activeClass : inActiveClass }>CRM</NavLink>
            </li>
            <li>
              <NavLink to="home/staff" className={({isActive}) => isActive ? activeClass : inActiveClass }>Staff</NavLink>
            </li>
            <li>
              <NavLink to="home/campaign" className={({isActive}) => isActive ? activeClass : inActiveClass }>Campaign Media</NavLink>
            </li>
            <li>
              <NavLink to="home/support" className={({isActive}) => isActive ? activeClass : inActiveClass }>Support</NavLink>
            </li>
          </ul>
        </div>
        </div>
      </nav>

    </header>
  )
}


