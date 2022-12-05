import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col'>
        <p className='text-[#00df9a] w-full h-screen mx-auto'>Daily Tasks</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Most Important
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl text-[#00df9a] font-bold'>
            Daily Tasks:
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl text-[#00df9a] font-bold md:pl-4 pl-2'
            strings={['Item 1', 'Item 2', 'Item 3']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          Start Adding
        </button>
      </div>
    </div>
  )
}

export default Hero
