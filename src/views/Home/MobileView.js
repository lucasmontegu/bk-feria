import React from "react";
import { Carousel } from "../../components/common";
import { SwiperSlide } from "swiper/react";

import Experimenta from "../../assets/images/edificios/experimenta-21.jpg";

export const MobileView = () => {
  return (
    <div className="PageHomeMobile top-bg">
      <div className="carousel-container">
        <Carousel
          PerView="auto"
          centerSlide={true}
          Loop={true}
          spaceBetween={30}
        >
          <SwiperSlide>
            <div className="cardCarousel">
              <figure>
                <img
                  className="img-fluid"
                  src={Experimenta}
                  alt="Experimenta 21"
                />
              </figure>

              <div></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardCarousel">
              <figure>
                <img
                  className="img-fluid"
                  src={Experimenta}
                  alt="Experimenta 21"
                />
              </figure>

              <div></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardCarousel">
              <figure>
                <img
                  className="img-fluid"
                  src={Experimenta}
                  alt="Experimenta 21"
                />
              </figure>

              <div></div>
            </div>
          </SwiperSlide>
        </Carousel>
      </div>
    </div>
  );
};
