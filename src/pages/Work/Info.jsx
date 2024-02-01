import React, {useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { isMobile } from '../../js/helper';

const Info = (props) => {
    const infoBloc = useRef(null)

    useGSAP(() => {
        if (!isMobile() && infoBloc && props.stack && props.date) {
            gsap.fromTo('.info__item', { yPercent: 100 }, { yPercent: 0, duration: 1, stagger: .1, ease: "power3.out", delay: 1 });
    
            gsap.registerPlugin(ScrollTrigger);
    
            gsap.fromTo('.work__banner__content__info', {
                y: 0,
                opacity: 1
            },
            {
                scrollTrigger: {
                    trigger: '.work__banner__content__info',
                    start: 'top 50%',
                    end: 'top 0%',
                    scrub: true,
                    markers: false
                },
                y: -100,
                opacity: 0
            });
        }
    }, { dependencies: [infoBloc, props.stack, props.date], scope: infoBloc.current });
    
    return (
        <div ref={infoBloc} className='work__banner__content__info'>
            <div className='work__banner__content__info__stack info__item'>{props.stack}</div>
            <div className='work__banner__content__info__date info__item'>{props.date}</div>
            <div className='work__banner__content__info__visit info__item'><a target='_blanck' href={props.demolink}>View Project</a></div>
        </div>
    )
}

export default Info
