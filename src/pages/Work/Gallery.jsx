import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from '../../components/Magnetic'

const Gallery = (props) => {

    const initGalleryAnimation = () =>{
        gsap.registerPlugin(ScrollTrigger)
        const imageContainers = document.querySelectorAll('.js_container')
        const imageItems = document.querySelectorAll('.gallery_image')

        imageContainers.forEach(container =>{
            gsap.fromTo(container, {
                    y: 200,
                    opacity: 0,
                    transformOrigin: "left",
                    clipPath:"polygon(0% 50%, 100% 100%, 100% 100%, 0% 100%)",
                },
                {
                scrollTrigger:{
                    trigger: container,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    markers: false
                },
                y: 0,
                transformOrigin: "left",
                opacity: 1,
                clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            })
        })

        imageItems.forEach(item =>{
          gsap.fromTo(item, {
                  width: "130%",
                  height: "130%"
              },
              {
              scrollTrigger:{
                  trigger: item,
                  start: 'top 100%',
                  end: 'top 0%',
                  scrub: true,
                  markers: false
              },
              width: "100%",
              height: "100%"
          })
      })

        
    }

    useEffect(() =>{
        initGalleryAnimation()
    },[])

  return (
    <div className='work__gallery'>
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
