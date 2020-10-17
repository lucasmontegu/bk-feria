import React from "react";
import { Swiper } from "swiper/react";

export const Carousel = ({
  children,
  PerView = 3.5,
  Loop = false,
  centerSlide = false,
  spaceBetween = 35,
}) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={PerView}
      loop={Loop}
      centeredSlides={centerSlide}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {children}
    </Swiper>
  );
};
