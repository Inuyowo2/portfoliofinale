import React from 'react'
import aboutpic from '../assets/rafaelramos.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12'>

      <div className='md:grid md:grid-cols-2 sm:py-16'>

        <div className="mt-4 md:mt-0 text-left">
            <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
                I am currently studying at Dr. Yanga's Colleges Inc as a ComSci student
                I've been interested at computers since I was a kid, its my dream to become
                a game developer one day and hopefully change the gaming landscape. Furthermore,
                i'm still learning new things along the way, hope to god I can use it in the near future.
                <br/>
                Want to contact me? Here's my email for inquiries:
                <br/>
                tylermcspoons2020@gmail.com
            </p>
            </div>
        </div>

        <img className="mx-auto rounded-3xl py-8 md:py-0" src={aboutpic} width={300} height={300} alt=""/>

      </div>

    </div>
  )
}

export default About