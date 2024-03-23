import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
  return (
    <div>
      <BookCards books={"Book1"} headline={"Other Books"}/>
    </div>
  )
}

export default OtherBooks