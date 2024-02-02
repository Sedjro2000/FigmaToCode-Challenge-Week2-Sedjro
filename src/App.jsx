import React  from 'react'

import './App.css'
import Presentation from './components/Presentation'
import Brand from './components/Brand'
import Hotcategory from './components/Hotcategory'
import Products from './components/Products'
import BrandBanner from './components/BrandBanner'
import BestSellers from './components/BestSellers'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  

  return (
    <>
      <Presentation />
      <Brand />
      <Hotcategory />
      <Products />
      <BrandBanner />
      <BestSellers />
      <Newsletter />
      <Footer />

      
    </>
  )
}

export default App
