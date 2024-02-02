import React from 'react'
import Brand1 from '../assets/brand-1.png'
import Brand2 from '../assets/brand-2.png'
import Brand3 from '../assets/brand-3.png'
import Brand4 from '../assets/brand-4.png'
import Brand5 from '../assets/brand-5.png'

const Brand = () => {
  return (
    <div className='  my-16 mx-32 '>
        <div className='flex flex-wrap justify-center md:justify-between lg:justify-around'>
            <img src={Brand1} alt="Brand" className='w-full md:w-1/2 lg:w-1/4 xl:w-1/5 ' />
            <img src={Brand2} alt=""  className='w-full md:w-1/2 lg:w-1/4 xl:w-1/5 '/>
            <img src={Brand3} alt="" className='w-full md:w-1/2 lg:w-1/4 xl:w-1/5 ' />
            <img src={Brand4} alt=""  className='w-full md:w-1/2 lg:w-1/4 xl:w-1/5 '/>
            <img src={Brand5} alt=""  className='w-full md:w-1/2 lg:w-1/4 xl:w-1/5 '/>

        </div>

        
    </div>
  )
}

export default Brand