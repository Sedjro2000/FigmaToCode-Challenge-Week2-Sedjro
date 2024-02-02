import React from 'react'

const ProductCard = ({ title, price, category, imageSrc, onSale, salePrice }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg mx-auto relative'>
            {onSale && (
                <div className="absolute top-5 left-0 w-12 h-6 bg-black text-white  font-OpenSans font-semibold text-xs capitalize tracking-normal  flex items-center justify-center">
                     SALE
                </div>
            )}
        <img src={imageSrc} alt="Image Product" className='w-full' />
        <div className='px-2 mt-4 '>
            <h6 className='text-black font-OpenSans font-semibold text-base leading-normal capitalize tracking-normal'>{title} </h6>
            <div className='flex mt-4'>
                <span className='font-OpenSans font-normal text-base tracking-normal capitalize leading-normal'>{category} </span>
                <span className='flex-grow'></span>
                {onSale ? (
                    <>
                    <span className='line-through text-gray-600 pr-2'>{price}</span>
                    <span className='font-OpenSans font-semibold text-base tracking-normal capitalize leading-normal text-red-500'>{salePrice}</span>
                    </>
                 ) : (
                    <span className='font-OpenSans font-semibold text-base tracking-normal capitalize leading-normal text-black'>{price}</span>
                )}
            </div>

        </div>
    </div>
  )
}

export default ProductCard