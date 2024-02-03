import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';

const SwiperElement = (props) => {
  return (
    <Swiper
        direction={'vertical'}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
        clickable: true,
        }}
        modules={[Pagination]}
        className="Home2__swiper"
        rewind={true}
        onSlideChange={(swiper) => props.handleChangeSlide(swiper)}
    >
        {props.sliderItems && props.sliderItems.map((item, index) => (
            <SwiperSlide key={index} className="swiperItem">
            <img src={item.background} alt="Vignette" />
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default SwiperElement
