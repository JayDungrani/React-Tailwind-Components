import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='flex flex-col gap-5 bg-slate-100 p-5'>
            <h1>
                Making the world better with React-Tailwind Components
            </h1>
            <div className='flex gap-5'>
                <div className='text-xl text-zinc-400 hover:text-zinc-900 cursor-pointer'>
                    <FaFacebook />
                </div>
                <div className='text-xl text-zinc-400 hover:text-zinc-900 cursor-pointer'>
                    <FaInstagram />
                </div>
                <div className='text-xl text-zinc-400 hover:text-zinc-900 cursor-pointer'>
                    <FaXTwitter />
                </div>
                <div className='text-xl text-zinc-400 hover:text-zinc-900 cursor-pointer'>
                    <FaGithub/>
                </div>
                <div className='text-xl text-zinc-400 hover:text-zinc-900 cursor-pointer'>
                    <FaYoutube/>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold'>Title</h1>
                    <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                    <p>Item 4</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold'>Title</h1>
                    <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                    <p>Item 4</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold'>Title</h1>
                    <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                    <p>Item 4</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold'>Title</h1>
                    <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                    <p>Item 4</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
