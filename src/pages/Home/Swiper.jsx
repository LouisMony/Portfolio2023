import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SwiperElement = (props) => {
    
    // useEffect(() => {
    //     if (props.sliderItems) {
    //         document.addEventListener('click', handleClick);
    //         return () => {
    //             document.removeEventListener('click', handleClick);
    //         };
    //     }
    // }, [props.sliderItems]);

    const handleClick = async (event, swiper) => {
        const mouseY = event.clientY;
        const windowHeight = window.innerHeight;
        const isUpperHalf = mouseY < windowHeight / 2;
        if (isUpperHalf) swiperRef.current.slidePrev();
        else swiperRef.current.slideNext();
    };

    const swiperRef = useRef();

    return (
        <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            className="Home2__swiper"
            rewind={true}
            speed={1000}
            onSlideChange={(swiper) => props.handleChangeSlide(swiper)}
            onSwiper={(swiper) => {swiperRef.current = swiper}}
            onClick={(swiper) => handleClick(swiper)}
        >
            {props.sliderItems &&
                props.sliderItems.map((item, index) => (
                    <SwiperSlide key={index} className="swiperItem">
                        <img src={item.background} alt="Vignette" />
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default SwiperElement;
