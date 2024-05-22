import React from 'react'
import proj1 from '../assets/campproj.png'
import proj2 from '../assets/bankingapp.png'
import proj3 from '../assets/portfolioproj.png'

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'id="project">My Projects</p>
            <p className='text-gray-400'>Heres some of my projects that I created during College</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group rounded-md flex 
                            justify-center items-center h-[200px] bg-cover relative'>
                <img src={proj1} alt=""/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/60 absolute inset-0 
                                flex flex-col justify-center items-center'>
                <span className='text-2xl font-semibold text-black tracking-wider'>Camping Management</span>
                <div className='pt-8 text center'>
                    <a href="https://github.com/Inuyowo2/Camping" target="_blank" rel="noopener noreferrer">
                        <button className='text-center rounded-lg px-4 py-3 m-2 
                                        bg-white text-black font-bold text-lg'>
                            GO
                        </button>
                    </a>
                      </div>
                 </div>
            </div>


            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group rounded-md flex 
                            justify-center items-center h-[200px] bg-cover relative'>
                <img src={proj2} alt=""/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/60 absolute inset-0 
                                flex flex-col justify-center items-center'>
                <span className='text-2xl font-semibold text-black tracking-wider'>Banking System</span>
                <div className='pt-8 text center'>
                    <a href="https://github.com/Inuyowo2/banking1styear" target="_blank" rel="noopener noreferrer">
                        <button className='text-center rounded-lg px-4 py-3 m-2 
                                        bg-white text-black font-bold text-lg'>
                            GO
                        </button>
                    </a>
                      </div>
                 </div>
            </div>



            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group rounded-md flex 
                            justify-center items-center h-[200px] bg-cover relative'>
                <img src={proj3} alt=""/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/60 absolute inset-0 
                                flex flex-col justify-center items-center'>
                <span className='text-2xl font-semibold text-black tracking-wider'>Portfolio Webpage</span>
                <div className='pt-8 text center'>
                    <a href="https://github.com/Inuyowo2/portfoliofinale" target="_blank" rel="noopener noreferrer">
                        <button className='text-center rounded-lg px-4 py-3 m-2 
                                        bg-white text-black font-bold text-lg'>
                            GO
                        </button>
                    </a>
                      </div>
                 </div>
            </div>




        </div>
    </div>
  )
}

export default Work