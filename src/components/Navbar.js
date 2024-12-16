import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='w-full fixed top-0 left-0 z-[2] bg-black text-white px-4 py-6'>
    <div className='w-full flex  items-center justify-between max-w-[1240px] mx-auto'>
        <div className='logo'>
            <h1 className='md:text-4xl text-2xl'>Madcom <br /> Digital</h1>
        </div>
        <ul className='md:flex hidden items-center gap-6'>
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/">ABOUT</Link></li>
            <li><Link to="/">WHAT WE DO</Link></li>
            <li><Link to="/">PORTFOLIO</Link></li>
            <li><Link to="/">CONTACT</Link></li>
        </ul>
        <div className=' flex-col gap-[4px] md:hidden flex'>
            <div className="line w-[40px] h-[1px] bg-white"></div>
            <div className="line w-[30px] h-[1px] bg-white"></div>
            <div className="line w-[40px] h-[1px] bg-white"></div>
        </div>
    </div>
    </nav>
  )
}

export default Navbar
