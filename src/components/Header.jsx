import React from 'react'
import Logo from './Logo'
import Search from './Search'
import ShopIcon from '../assets/shop.svg'
import UserIcon from '../assets/user.svg'


const Header = () => {
  return (
    <div >
      <div className='pt-4flex flex-col h-full justify-between mx-16 '>
            <div className="flex justify-between n-800 mb-4">
                    <Search />
                    <Logo />
                    <div className=' py-2'>
                        <button className='inline-flex text-black text-18 font-normal capitalize focus:outline-none mr-4'> 
                            <img src={UserIcon} alt="Account" className='mr-2' />
                            Account
                        </button>
                        <button className='inline-flex text-black text-18 font-normal capitalize focus:outline-none mr-4'> 
                            <img src={ShopIcon} alt="Shopping" className='mr-2' />
                            Shopping
                        </button>
                    </div>
                </div>
                
                <nav className="flex justify-between mt-4">
                <a href="#" className="text-black text-16 font-OpenSans font-normal capitalize leading-24 break-words">
                    Jewelry & Accessories
                </a>
                <a href="#" className="text-black text-16 font-OpenSans font-normal capitalize leading-24 break-words">
                    Clothing & Shoes
                </a>
                <a href="#" className="text-black text-16 font-OpenSans font-normal capitalize leading-24 break-words">
                    Home & Living
                </a>
                <a href="#" className="text-black text-16 font-OpenSans font-normal capitalize leading-24 break-words">
                    Wedding & Party
                </a>
                <a href="#" className="text-black text-16 font-OpenSans font-normal capitalize leading-24 break-words">
                    Toys & Entertainment
                </a>
                <a href="#" className="text-black text-16 font-OpenSans font-normal capitalize leading-24 break-words">
                    Art & Collectibles
                </a>
                <a href="#" className="text-black text-16 font-OpenSans font-normal capitalize leading-24 break-words">
                    Craft Supplies & Tools
                </a>
                        
                </nav>


            </div>
    </div>
  )
}

export default Header