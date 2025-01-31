import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import Kitchen from '@/components/Kitchen'
import Navbar from '@/components/Navbar'
import Recipes from '@/components/Recipes/Index'
import Subscribe from '@/components/Subscribe'
import React from 'react'

function HomePage() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Categories />
            <Recipes />
            <Kitchen />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default HomePage