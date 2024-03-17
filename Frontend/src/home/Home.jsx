import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavoriteBooks from './FavoriveBooks'

const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavoriteBooks/>
    </div>
  )
}

export default Home