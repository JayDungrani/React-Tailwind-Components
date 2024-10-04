import React from 'react'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    return (
        <nav className='flex justify-between p-3 bg-slate-100 max-[640px]:p-2 relative'>
            {/* for Mobile or small width devices */}
            <div className='sm:hidden flex items-center justify-center text-2xl cursor-pointer' onClick={() => setMenu(!menu)}>
            {menu?<RxCross1/> : <GiHamburgerMenu />}
            </div>
            <div className={`sm:hidden bg-slate-300 w-full absolute top-14 left-0 py-5 px-2 rounded-br-lg flex flex-col gap-2 ${!menu&&'hidden'}`}>
                <a href='#' className='text-lg font-medium hover:text-blue-400 hover:bg-slate-200 py-1 px-2'>Home</a>
                <a href='#' className='text-lg font-medium hover:text-blue-400 hover:bg-slate-200 py-1 px-2'>Find</a>
                <a href='#' className='text-lg font-medium hover:text-blue-400 hover:bg-slate-200 py-1 px-2'>Contact Us</a>
                <a href='#' className='text-lg font-medium hover:text-blue-400 hover:bg-slate-200 py-1 px-2'>About Us</a>
            </div>

            {/* for other devices */}
            <div className='flex items-center justify-center'>
                <h1 className='text-2xl font-bold cursor-pointer'>LOGO</h1>
            </div>
            <div className='flex items-center justify-center gap-7 max-[640px]:hidden'>
                <a href='#' className='text-lg font-medium hover:text-blue-400'>Home</a>
                <a href='#' className='text-lg font-medium hover:text-blue-400'>Find</a>
                <a href='#' className='text-lg font-medium hover:text-blue-400'>Contact Us</a>
                <a href='#' className='text-lg font-medium hover:text-blue-400'>About Us</a>
            </div>
            <div className='flex items-center justify-center'>
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' className='w-10 rounded-full cursor-pointer'></img>
            </div>
        </nav>
    )
}

export default Navbar
