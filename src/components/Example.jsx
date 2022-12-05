import React from 'react'
import Image from '../assets/image.jpg'
const Example = () => {
  return (
    <div className='w-full bg-white py-16 px-10'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Image} alt='img' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>Dashboard</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Manage your tasks
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            provident recusandae, distinctio unde iste est dignissimos quo eaque
            delectus animi impedit natus deleniti. Dolorem odit nobis voluptatum
            aliquam, vel et!
          </p>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto md:mx-0 py-3 text-black'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Example
