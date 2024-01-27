import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Info = (props) => {

    const infoBloc = useRef(null)

    useEffect(() =>{
        if (infoBloc)initAnimationInfo()
    },[infoBloc])

    const initAnimationInfo = () =>{
        gsap.fromTo('.info__item',{yPercent: 100}, {yPercent: 0,duration: 1, stagger: .1,ease: "power3.out", delay: 1})

        gsap.registerPlugin(ScrollTrigger)
        
        gsap.fromTo('.work__banner__content__info', {
            y: 0,
            opacity: 1
        },
        {
        scrollTrigger:{
            trigger: '.work__banner__content__info',
            start: 'top 50%',
            end: 'top 0%',
            scrub: true,
            markers: false
        },
        y: -100,
        opacity: 0
    })

    }
    return (
        <div ref={infoBloc} className='work__banner__content__info'>
            <div className='work__banner__content__info__stack info__item'>WebDesign - Front-end Development</div>
            <div className='work__banner__content__info__date info__item'>01. 2024</div>
            <div className='work__banner__content__info__visit info__item'><a href="#">View Project</a></div>
        </div>
    )
}

export default Info
