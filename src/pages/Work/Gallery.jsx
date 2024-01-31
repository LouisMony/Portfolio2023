import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

const Gallery = (props) => {

    const galleryRef = useRef()

    useGSAP(() =>{
      gsap.registerPlugin(ScrollTrigger)
      gsap.fromTo('.work__gallery__container', {
        y: 200,
        opacity: 0,
        clipPath:"polygon(0% 50%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        scrollTrigger:{
            trigger: '.work__gallery__container',
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false
        },
        y: 0,
        opacity: 1,
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      })

    },{scope: galleryRef})

  return (
    <div className='work__gallery' ref={galleryRef}>
      <div className='work__gallery__container js_container'>
        <img className='gallery_image' src={`/media/work/${props.directory}/mockup_A.webp`} alt="Vignette" />
      </div>
      <div className='work__gallery__container  work__gallery__containerdouble '>
        <div className='js_container'>  
          <img className='gallery_image' src={`/media/work/${props.directory}/mockup_B.webp`} alt="Vignette" />
        </div>
        <div className='js_container'>        
          <img className='gallery_image' src={`/media/work/${props.directory}/mockup_C.webp`} alt="Vignette" />
        </div>
      </div>
      <div className='work__gallery__container js_container'>
          <img className='gallery_image' src={`/media/work/${props.directory}/mockup_D.webp`} alt="Vignette" />
      </div>
    </div>
  )
}

export default Gallery
