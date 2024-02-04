import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SwiperElement = (props) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const swiperRef = useRef();

    const handleClick = async (event) => {
        if (isTransitioning) {
            return;
        }

        const mouseY = event.clientY;
        const windowHeight = window.innerHeight;
        const isUpperHalf = mouseY < windowHeight / 2;

        if (isUpperHalf) {
            swiperRef.current.slidePrev();
        } 
        else {
            swiperRef.current.slideNext();
        } 
    };

    useEffect(() => {
        if(swiperRef.current) {
            const handleTransitionStart = () => {
                setIsTransitioning(true);
            };
    
            const handleTransitionEnd = () => {
                setIsTransitioning(false);
            };
    
            swiperRef.current.on('slideChangeTransitionStart', handleTransitionStart);
            swiperRef.current.on('slideChangeTransitionEnd', handleTransitionEnd);
    
            return () => {
                swiperRef.current.off('slideChangeTransitionStart', handleTransitionStart);
                swiperRef.current.off('slideChangeTransitionEnd', handleTransitionEnd);
            };
        }
    }, [swiperRef.current]);

    return (
        <div onClick={handleClick} className='swiper-global'>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={48}
                className="Home2__swiper"
                speed={1000}
                onSlideChange={(swiper) => props.handleChangeSlide(swiper)}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
            >
                {props.sliderItems &&
                    props.sliderItems.map((item, index) => (
                        <SwiperSlide key={index} className="swiperItem">
                            <img src={item.background} alt="Vignette" />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default SwiperElement;
