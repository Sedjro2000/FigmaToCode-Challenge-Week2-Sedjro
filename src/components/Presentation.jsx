import React from 'react'
import Header from './Header'
import Image from '../assets/ImagePresent.png'
import ShopIconW from '../assets/shopwhite.png'

const Presentation = () => {
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundColor: 'lightgray',
    borderRadius: '30% 0 30% 0',
   
  };

  const rectangleStyle = {
    borderRadius: '30% 0 30% 0',
    border: '2px solid var(--Dark-25, rgba(0, 0, 0, 0.25))',
  };
  return (
    <div className='bg-gray-900 bg-opacity-5'>
      <Header />
      <div className='flex items-center justify-center border  mt-8'>
           {/**Card */}
          <div className=' flex w-3/4   ' >
            {/**Titre et Paragraphe */}
            <div className='mt-24 space-y-8 mr-4'>
              <h2 class="text-black  text-5xl leading-14 capitalize">Collections</h2>
                <p class="text-black  text-xl font-normal leading-7 capitalize">
                  you can explore ans shop many differnt collection from various barands here.
                </p>
                <button class="inline-flex items-center justify-center gap-4 p-2 bg-black">
                    <img src={ShopIconW} alt="Bouton" class="w-6 h-6 object-cover" />
                    <span class="text-white  text-base font-normal capitalize">shop now</span>
                </button>
            </div>
              {/**Image */}
              <div class="flex-shrink-0 border  ">
                <div className='relative  '>
                    <img src={Image} alt="Image" style={imageStyle} className='absolute -top-3 -left-3 z-10' />
                    <div className='bg-gray-300 bg-opacity-75 p-8 rounded z-20 w-[424px] h-[542px]' style={rectangleStyle}></div>
                </div>
              
              </div>
             
          </div>
            
             <div>

             </div>

          </div>

      </div>
    
    
  )
}

export default Presentation