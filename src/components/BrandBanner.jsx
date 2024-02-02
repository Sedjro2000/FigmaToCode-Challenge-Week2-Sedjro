import React from 'react'
import BrandBannerBg from '../assets/BrandBannerBg.svg'
import ZaraLogo from '../assets/1024px-Zara_Logo 2.svg'

const BrandBanner = () => {
  return (
    <div 
    className='relative bg-cover bg-center h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full flex items-center text-white mt-32'
    style={{ backgroundImage: `url(${BrandBannerBg})` }}
    >
        <div className='absolute right-0 p-4 sm:p-8   text-left w-full lg:w-auto md:mr-32 lg:mr32'>
            <div className="max-w-sm mx-auto shadow-md overflow-hidden rounded-md">
                <div className="px-6 py-4">
                    <img src={ZaraLogo} alt="Zara" className='mb-8'/>
                    <p className=" text-base font-normal leading-normal capitailze tracking-normal">
                        Lustrous yet understated. The new evening
                        wear collection exclusively offered at the
                        reopened Giorgio Armani boutique in Los
                        Angeles.
                    </p>
                </div>
                <div className="px-6 py-4">
                    <button className="bg-white  text-black font-normal py-2 px-4 rounded">
                    See collections
                    </button>
                </div>
            </div>
        </div>
       
        
    </div>
  )
}

export default BrandBanner