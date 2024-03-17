import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [book, setBooks] = useState([]);

    useEffect(() => {
        fetch
    })
  return (
    <div>
      <BookCards books={"Book1"} headline={"Best Seller Books"}/>
    </div>
  )
}

export default BestSellerBooks