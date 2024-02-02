import React from 'react'
import ProductCard from './ProductCard'
import FilterIcon from '../assets/FilterIcon.png'
import ImageProduct1 from '../assets/image-product-1.png'
import ImageProduct2 from '../assets/image-product-2.png'
import ImageProduct3 from '../assets/image-product-3.svg'
import ImageProduct4 from '../assets/image-product-4.png'
import ImageProduct5 from '../assets/image-product-5.png'
import ImageProduct6 from '../assets/image-product-6.svg'
import ImageProduct7 from '../assets/image-product-7.svg'
import ImageProduct from '../assets/image-product.svg'

const BestSellers = () => {
  return (
        <div className='mx-4 md:mx-8 lg:mx-16 xl:mx-32  mb-16 pb-8'>
          <h2 className='text-center text-xl md:text-3xl lg:text-4xl text-black font-semibold capitalize tracking-normal leading-normal mb-8 mt-16'>Best sellers</h2>
          <div className='flex justify-between items-center'>
          <div className="flex justify-start space-x-4 my-4 ">
            {/* Sélecteur pour les petits écrans */}
            <div className="md:hidden">
              <select className="   py-1 px-2">
                <option value="">All Product</option>
                <option value="">T-shirt</option>
                <option value="">Hoodies</option>
                <option value="">Jacket</option>
              </select>
            </div>
    
            {/* Liens pour les écrans moyens et plus grands */}
            <div className="hidden md:flex space-x-4">
              <a href="" className=" font-semibold ">All Product</a>
              <a href="" className=" ">T-shirt</a>
              <a href="" className=" ">Hoodies</a>
              <a href="" className=" ">Jacket</a>
            </div>
         
          </div>
          <span className="flex-grow "></span> {/* Espace flexible au milieu */}
          <button className='flex items-center bg-black text-white py-1 px-2'>
            <img src={FilterIcon} alt="Filter" />
            <span>Filter</span>
          </button>
          </div>
          
          <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4'>
    
          <ProductCard
                title='Nike Repel Miler'
                category='Dress'
                price='$120.50'
                salePrice='$250'
                imageSrc={ImageProduct7}
                onSale={true}
                
           />
            <ProductCard
                title='Nike Repel Miler'
                category='Dress'
                price='$120.50'
                imageSrc={ImageProduct}
           />
         
            <ProductCard
                title='Nike Repel Miler'
                category='Dress'
                price='$120.50'
                imageSrc={ImageProduct2}
           />
            <ProductCard
                title='Nike Repel Miler'
                category='Dress'
                price='$120.50'
                salePrice='$250'
                imageSrc={ImageProduct3}
                
                
           />
         
    
          </div>
          
        </div>
  )
}

export default BestSellers