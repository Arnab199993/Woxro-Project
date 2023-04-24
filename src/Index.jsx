import React from 'react'
import Header from './Components/Header/Header'



import "./Index.css"
import Products from './Components/Products/Products'


import Banner from './Components/Banner/Banner'
import Product from './Components/Product/Product'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
const Index = () => {
    return (
        <div className='Index'>
            <Header />
            <Product />
            <Banner />
            <Services />
            <Products />
            <Contact />
        </div>
    )
}

export default Index