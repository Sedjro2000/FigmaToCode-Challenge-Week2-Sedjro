import React from 'react'
import IconLeft from  '../assets/Group 98.svg'
import IconRight from '../assets/Group 98.svg'

const Logo = () => {
  return (
    <div className='inline-flex item-center '>
        <img src={IconLeft} alt="Logo" className='mb-3 mr-2' />
        <div className="text-black text-4xl  font-normal break-words">
                CORAL
        </div>
        <img src={IconRight} alt="Logo" className='mb-3 ml-2'/>


    </div>
  )
}

export default Logo