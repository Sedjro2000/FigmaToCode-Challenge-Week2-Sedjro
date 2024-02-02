import React from 'react'
import ImageProduct8 from '../assets/image-product-8.png'
import ImageProduct9 from '../assets/image-product-9.png'
import ImageProduct10 from '../assets/image-product-10.png'
import ImageProduct11 from '../assets/image-product-11.png'
import ImageProduct12 from '../assets/image-product-12.png'
import ImageProduct13 from '../assets/image-product-13.png'

const Newsletter = () => {
  return (
    <div className='bg-gray-100'>
        <div className='  relative mx-4 md:mx-8 lg:mx-16 xl:mx-32 py-16  mb-2'>
            <h2 className='text-center text-xl md:text-3xl lg:text-4xl text-black font-semibold capitalize tracking-normal leading-normal mt-4 mb-8'>Follow products and discounts on Instagram</h2>
            <div className='flex justify-between border mb-8'>
                <img src={ImageProduct8} alt="Image" className='w-1/6'/>
                <img src={ImageProduct9} alt="Image" className='w-1/6'/>
                <img src={ImageProduct10} alt="Image" className='w-1/6'/>
                <img src={ImageProduct11} alt="Image" className='w-1/6'/>
                <img src={ImageProduct12} alt="Image" className='w-1/6'/>
                <img src={ImageProduct13} alt="Image" className='w-1/6'/>
            </div>

            <div className='flex  flex-col justify-center items-center '>
                    <h2 className='text-center text-xl md:text-3xl lg:text-4xl text-black font-semibold capitalize tracking-normal leading-normal mt-4'>Or subscribe to the newsletter</h2>
                 <div className='flex items-center mt-8'>
                    <input type="text" className='border-b border-black focus:outline-none px-2 py-1' placeholder='Email Address' />
                    <button className='bg-gray-200 border-b text-black py-0 px-4 ml-2 focus:outline-none  shadow-md'>SUBMIT</button>

                 </div>
             </div>
            
        </div>
    </div>
  )
}

export default Newsletter