import React from 'react'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import vbnet from '../assets/vbnet_logo.png'
import mysql from '../assets/mysqlwork_logo.png'

const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid
                    grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>
    
    
    <h2 className="text-gray-700 text-xl md:text-4xl font-bold m4">
        What <br/> I've <br/> Learned
        </h2>

            <a href="https://html.com/html5/" 
            target="_blank" rel="noopener noreferrer">
            <button className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={html} alt=""/>
            <p className='mt-2'>html</p>
            </button>
            </a>
            
            <a href="https://tailwindcss.com/" 
            target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={tailwind} alt=""/>
            <p className='mt-2'>Tailwind</p>
            </div>
            </a>


            <a href="https://www.javascript.com/" 
            target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={javascript} alt=""/>
            <p className='mt-2'>Javascript</p>
            </div>
            </a>


            <a href="https://visualstudio.microsoft.com/" 
            target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={vbnet} alt=""/>
            <p className='mt-2'>Visual Basic</p>
            </div>
            </a>


            <a href="https://www.mysql.com/" 
            target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={mysql} alt=""/>
            <p className='mt-2'>MySQL</p>
            </div>
            </a>
    </div>
  )
}

export default Skills