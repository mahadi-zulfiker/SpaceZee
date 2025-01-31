import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function HomePage() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Categories />
            <Footer />
        </div>
    )
}

export default HomePage