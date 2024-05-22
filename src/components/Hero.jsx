import React from 'react'
import heroimage from '../assets/herologo.png'
import { TypeAnimation } from 'react-type-animation';
import github from '../assets/githublogo.png'
import fblogo from '../assets/fblogo.png'
import ytlogo from '../assets/ytlogo.png'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>

        <div className='col-span-1 my-auto mx-auto w-[500px] h-auto lg:w-[600px]'>
                <img src={heroimage} alt='hero'/>
        </div>

        <div className='col-span-2 px-5 my-auto'>

            <hl className="text-white text-4x1 sm:text-5xl lg:text-8xl font-extrabold">
                <span className="primary-color text-8x1">
                    I'm a
                </span> <br/>
                <TypeAnimation
                sequence={[
                    "Student",
                    1000,
                    "Developer",
                    1000,
                    "Player",
                    1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
            </hl>
            <p className="text-white sm:text-lg my-6 lg:text-xl">
                Your average college student learning computer science.
            </p>

            <a href="https://web.facebook.com/This.is.not.a.Username.Thanks/" 
                target="_blank" rel="noopener noreferrer">
            <button class="bg-transparent  py-1 px-2 rounded">
            <img src={fblogo} alt="" class="w-12 h-13"/>
                </button>
                </a>
            <a href="https://github.com/Inuyowo2" 
            target="_blank" rel="noopener noreferrer">
            <button class="bg-transparent  py-1 px-2 rounded">
            <img src={github} alt="" class="w-12 h-13"/>
                </button>
                </a>
            <a href="https://www.youtube.com/@inu7369" 
            target="_blank" rel="noopener noreferrer">
            <button class="bg-transparent  py-1 px-2 rounded">
            <img src={ytlogo} alt=""class="w-13 h-11"/>
                </button>
                </a>
            </div>
        </div>
  )
}

export default Hero