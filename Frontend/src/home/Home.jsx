import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavoriteBooks from './FavoriveBooks'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'
import MyFooter from '../components/MyFooter'

const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavoriteBooks/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
      <MyFooter/>
    </div>
  )
}

export default Home