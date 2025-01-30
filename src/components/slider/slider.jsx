

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import modules from 'swiper/modules'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const slideImages = [
  '/slider/img_1.jpg',
  '/slider/img_2.jpg',
  '/slider/img_3.jpg',
  '/slider/img_4.jpg',
  '/slider/img_5.jpg',
  '/slider/img_6.jpg',
  '/slider/img_7.jpg',
];

function Slider() {
    return (
      <div className="slider-wrapper">
        <div className="container">
          <h1 className="heading">Flower Gallery</h1>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}  // Fixes image cropping issue
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
