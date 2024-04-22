import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import slide from "../assets/brown-bread-home.jpg";

// import required modules
import { Autoplay } from "swiper/modules";

const HomeProductSlider = () => {
  //
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide} alt="" className="w-[500px] " />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={slide} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={slide} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={slide} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={slide} alt="" />
        </SwiperSlide>{" "}
      </Swiper>
    </div>
  );
};
export default HomeProductSlider;
