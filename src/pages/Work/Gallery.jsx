import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Gallery = () => {

    const initGalleryAnimation = () =>{
        gsap.registerPlugin(ScrollTrigger)
        const imageContainers = document.querySelectorAll('.js_container')
        const imageItems = document.querySelectorAll('.gallery_image')

        imageContainers.forEach(container =>{
            gsap.fromTo(container, {
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
        <img className='gallery_image' src='https://images.unsplash.com/photo-1683009427037-c5afc2b8134d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='photo du porjet' />
      </div>
      <div className='work__gallery__container  work__gallery__containerdouble '>
        <div className='js_container'>        
            <img className='gallery_image' src='https://images.unsplash.com/photo-1683009427037-c5afc2b8134d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='photo du porjet' />
        </div>
        <div className='js_container'>        
            <img className='gallery_image' src='https://images.unsplash.com/photo-1683009427037-c5afc2b8134d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='photo du porjet' />
        </div>
      </div>
      <div className='work__gallery__container js_container'>
            <img className='gallery_image' src='https://images.unsplash.com/photo-1683009427037-c5afc2b8134d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='photo du porjet' />
      </div>
    </div>
  )
}

export default Gallery
