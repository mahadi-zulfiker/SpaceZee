import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Subscribe from '@/components/Subscribe'
import React from 'react'

function HomePage() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Categories />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default HomePage