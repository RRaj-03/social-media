import React from 'react'
import { Link } from 'react-router-dom'
import Alert from './Alert';

const Navbar = (props) => {
  return (
    <>
    <header className="z-50  bg-white sticky top-0 body-font my-navBoxShadow ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Social-app</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center md:border-r md:mr-4 md:border-gray-400">
      <Link to={"/"} className="mr-5 hover:text-gray-900">Dashboard</Link>
      
    </nav>
    <div><Link to={"signup"} className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none text-white hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 mr-5">Sign Up
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
    <Link to={"login"} className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none text-white hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">Log In
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link></div>
  </div>
<Alert alert={props.alert}/>
</header>
    </>
  )
}

export default Navbar