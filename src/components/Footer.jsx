import React from 'react'
import Logo from './Logo'
import Facebook from '../assets/icon.png'
import X from '../assets/icon (1).png'
import LinkedIn from '../assets/icon (2).png'
import Instagram from '../assets/icon (3).png'
import IconPayment from '../assets/icons_payment 1.png'
import GotoTop from '../assets/icon (5).png'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row md:justify-center lg:justify-center md:space-x-6 lg:space-x-6  pt-16 pb-16 '>
            <div className=' flex flex-col  max-w-md   p-8 space-y-6 '>
                <Logo />
                <p className='font-OpenSans font-normal text-base tracking-normal capitalize leading-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua
                </p>
                <div  className='flex items-center space-x-4'>
                    <a href="#" className='hover:opacity-80' > <img src={Facebook} alt="Facebook" /> </a>
                    <a href="#" className='hover:opacity-80' > <img src={X} alt="X" /> </a>
                    <a href="#" className='hover:opacity-80' > <img src={LinkedIn} alt="LinkedIn" /> </a>
                    <a href="#" className='hover:opacity-80' > <img src={Instagram} alt="Instagram" /> </a>

                </div>
            </div>
            <div className=' flex flex-col  max-w-md   p-8 space-y-2'>
                <h3 className='text-xl font-semibold  tracking-normal capitalize leading-normal'>catalog</h3>
                <a href="" className='font-OpenSans font-normal text-base tracking-normal capitalize leading-normal'>Necklaces</a>
                <a href="" className='font-OpenSans font-normal text-base tracking-normal capitalize leading-normal' >Hoodies</a>
                <a href="" className='font-OpenSans font-normal text-base tracking-normal capitalize leading-normal'>jewerly box</a>
                <a href="" className='font-OpenSans font-normal text-base tracking-normal capitalize leading-normal'>T-shirt</a>
                <a href="" className='font-OpenSans font-normal text-base tracking-normal capitalize leading-normal'>Jacket</a>
            </div>
            <div className='flex flex-col  max-w-md   p-8  space-y-2'>
                
                <h3 className='text-xl font-semibold  tracking-normal capitalize leading-normal'>About Us</h3>
                <a href="" className='font-OpenSans font-normal text-base tracking-normal capitalize leading-normal'>Our products</a>
                <a href="" className='font-OpenSans font-normal text-base tracking-normal capitalize leading-normal'>Sitemap</a>
                <a href="" className='font-OpenSans font-normal text-base tracking-normal capitalize leading-normal'>FAQ</a>
                <a href="" className='font-OpenSans font-normal text-base tracking-normal capitalize leading-normal'>About us </a>
                <a href="" className='font-OpenSans font-normal text-base tracking-normal capitalize leading-normal'>Term & Conditions</a>
            </div>
            <div className=' flex flex-col  max-w-md   p-8 space-y-2'>
                <h3 className='text-xl font-semibold  tracking-normal capitalize leading-normal'>Customers Services</h3>
                <a href="" className='font-OpenSans font-normal text-base tracking-normal capitalize leading-normal'>Contact us </a>
                <a href="" className='font-OpenSans font-normal text-base tracking-normal capitalize leading-normal'>Track your order</a>
                <a href="" className='font-OpenSans font-normal text-base tracking-normal capitalize leading-normal'>Product care and repair </a>
                <a href="" className='font-OpenSans font-normal text-base tracking-normal capitalize leading-normal'>Book an appointement </a>
                <a href="" className='font-OpenSans font-normal text-base tracking-normal capitalize leading-normal'>Shipping & Returns</a>
            </div>
        </div>
        <div className='bg-black text-white p-4 flex justify-between items-center  w-full hidden sm:flex '>
            <div className='flex-none'>© 2022 Coral , Inc.e</div>
            <img src={IconPayment} alt="icone " />
            <div className='flex-none'> 
                <button className='flex items-center bg-black text-white py-1 px-2'>
                    <span className='font-normal text-base tracking-normal capitalize leading-normal'>scroll to the top</span>
                    <img src={GotoTop} alt=" Scroll to the top" />
               

                </button>
            </div>
        </div>
    </div>
  )
}

export default Footer