import React from 'react'
import ItemCategory1 from '../assets/image-category-1.png'
import ItemCategory2 from '../assets/item-category-2.png'
import ItemCategory3 from '../assets/item-category-3.png'
import ItemCategory4 from '../assets/item-category-4.png'
import ItemCategory5 from '../assets/item-category-5.png'

const Hotcategory = () => {
  return (
    <div>
            {/**Conteneur */}
            <div className=' relative mx-4 md:mx-32 mb-4 flex flex-col md:flex-row md:space-x-4 '>

            <p className="absolute top-1/2 -left-24 transform -translate-y-1/2  ">
                    <span className="block transform -rotate-90 text-black font-semibold text-base  ">EXPLORE NEW AND POPULAR STYLES</span>
                    </p>
                <div className=' relative p-1  flex-1  w-full md:w-auto'>
                   
                    <img src={ItemCategory1} alt="Image Category" className='ml-8' />
                </div> 
                <div className=' p-1 flex-1  w-full md:w-auto'>
                    <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                        <img src={ItemCategory2} alt="Image Category" />
                        <img src={ItemCategory3} alt="Image Category" />
                        <img src={ItemCategory4} alt="Image Category" />
                        <img src={ItemCategory5} alt="Image Category" />

                    </div>
                </div>
            </div>
    </div>
  )
}

export default Hotcategory