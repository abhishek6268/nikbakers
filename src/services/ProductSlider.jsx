import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import slide from "../assets/crispy-cake-rusk-home.png";

// import required modules
import { Autoplay } from "swiper/modules";

const ProductSlider = () => {
  //
  return (
      <>
        <Swiper
    spaceBetween={30} // Space between slides
    centeredSlides={true} // Center the active slide
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    navigation={true}
    modules={[Autoplay]}
    className="mySwiper"
    slidesPerView={1} // Number of slides per view
    breakpoints={{ // Adjust number of slides per view for different screen sizes
      640: {
        slidesPerView: 1, // Number of slides per view on small screens
      },
      768: {
        slidesPerView: 2, // Number of slides per view on medium screens
      },
      1024: {
        slidesPerView: 3, // Number of slides per view on large screens
      },
    }}
  >
    <SwiperSlide>
      <img src={slide} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={slide} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={slide} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={slide} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={slide} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={slide} alt="" />
    </SwiperSlide> <SwiperSlide>
      <img src={slide} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={slide} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={slide} alt="" />
    </SwiperSlide> <SwiperSlide>
      <img src={slide} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={slide} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={slide} alt="" />
    </SwiperSlide>
  </Swiper>

      </>
  );
};
export default ProductSlider;
