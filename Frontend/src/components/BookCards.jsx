import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {} from 'react-icons'; 

//import './BookCard.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaCartShopping } from 'react-icons/fa6';

const BookCards = ({headline, books}) => {
  return (
    <div className=' my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
      {/*Cards*/}
      <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide>
          <div className='relative'>
            <img src='src/assets/banner-books/book1.png' alt=''></img>
            <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded lg:right-20'>
              <FaCartShopping className='w-4 h-4 text-white'></FaCartShopping>
            </div>
          </div>
          <div>
            <h3>Young Mungo</h3>
            <p>Douglas Stuart</p>
            <div>
              <p>$10.00</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src='src/assets/banner-books/book2.png' alt=''></img>
            <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded lg:right-20'>
              <FaCartShopping className='w-4 h-4 text-white'></FaCartShopping>
            </div>
          </div>
          <div>
            <h3>An Immese World</h3>
            <p>Ed Yong</p>
            <div>
              <p>$20.00</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src='src/assets/banner-books/book3.png' alt=''></img>
            <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded lg:right-20'>
              <FaCartShopping className='w-4 h-4 text-white'></FaCartShopping>
            </div>
          </div>
          <div>
            <h3>Contructing a Nervous System</h3>
            <p>Maago Jefferson</p>
            <div>
              <p>$15.00</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src='src/assets/banner-books/book4.png' alt=''></img>
            <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded lg:right-20'>
              <FaCartShopping className='w-4 h-4 text-white'></FaCartShopping>
            </div>
          </div>
          <div>
            <h3>I'm Glad My Mom Died</h3>
            <p>Jennette McCurdy</p>
            <div>
              <p>$13.00</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src='src/assets/banner-books/book5.png' alt=''></img>
            <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded lg:right-20'>
              <FaCartShopping className='w-4 h-4 text-white'></FaCartShopping>
            </div>
          </div>
          <div>
            <h3>Remarkably Bright Creatures</h3>
            <p>Shelby Van Relt</p>
            <div>
              <p>$27.00</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src='src/assets/banner-books/book4.png' alt=''></img>
            <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded lg:right-20'>
              <FaCartShopping className='w-4 h-4 text-white'></FaCartShopping>
            </div>
          </div>
          <div>
            <h3>I'm Glad My Mom Died</h3>
            <p>Jennette McCurdy</p>
            <div>
              <p>$10.00</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src='src/assets/banner-books/book4.png' alt=''></img>
            <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded lg:right-20'>
              <FaCartShopping className='w-4 h-4 text-white'></FaCartShopping>
            </div>
          </div>
          <div>
            <h3>I'm Glad My Mom Died</h3>
            <p>Jennette McCurdy</p>
            <div>
              <p>$10.00</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>

  )
}

export default BookCards