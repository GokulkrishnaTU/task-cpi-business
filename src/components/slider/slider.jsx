import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./slider.css";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import modules from 'swiper/modules'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const slideImages = [
  '/slider/slider (1).jpg',
  '/slider/slider (2).jpg',
  '/slider/slider (3).jpg',
];

function Slider() {
    return (
      <div className="slider-wrapper">
        <div className="container">
          <div className="heading-box">
            <h1 className="heading">Glimpse from Our Last Event</h1>
          </div>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            initialSlide={1}  // Start with the second slide as active
            slidesPerView={'auto'}  // Ensures multiple slides are visible
            spaceBetween={0}  // No extra spacing between slides
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            {slideImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`slide_image_${index + 1}`} />
              </SwiperSlide>
            ))}

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    );
}

export default Slider;