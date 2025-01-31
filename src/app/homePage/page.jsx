import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import InstagramPosts from '@/components/InstagramPosts'
import Kitchen from '@/components/Kitchen'
import Menus from '@/components/Menus'
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
            <InstagramPosts />
            <Menus />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default HomePage