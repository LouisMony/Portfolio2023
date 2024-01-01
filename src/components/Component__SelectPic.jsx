import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Component__SelectPic = (props) => {
  const [activeSelectItem, setActiveSelectItem] = useState('jsSelectItm_1')
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const outlineRef = useRef(null)

  const handleItemClick = (itemId) => {
      setActiveSelectItem(itemId);

      const activeIdEl = document.getElementById(itemId)
      
      if(activeIdEl) {
        const activeIdImg = activeIdEl.querySelector("img")
        if(activeIdImg){
          const activeIdImgSrc = activeIdImg.src
          props.handleChangeImage(activeIdImgSrc)
        }
      }
    
  };
  
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(()=>{
    if(activeSelectItem){
      const activeIdEl = document.getElementById(activeSelectItem)
      const parentEl = activeIdEl.parentElement;
      if (activeIdEl && parentEl) {
        const rect = activeIdEl.getBoundingClientRect();
        const parentRect = parentEl.getBoundingClientRect();
        const rect_left = rect.left - parentRect.left;
        gsap.to(outlineRef.current, {left: rect_left, duration: .3, ease: "expo.out"}) 
      }
    }
  },[activeSelectItem, windowSize.width, windowSize.height]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {window.removeEventListener('resize', handleResize);};
  },[]);

  return (
    <div className='selector'>
        <div ref={outlineRef} className='selector__outline'></div>
        <div id="jsSelectItm_1"
          className={`selector__item ${activeSelectItem === 'jsSelectItm_1' ? 'activeVignette' : ''}`}
          onClick={() => handleItemClick('jsSelectItm_1')}>
            <img src={`/media/work/${props.directory}/mac.png`} alt="Vignette" />
        </div>

        <div id="jsSelectItm_2" 
        className={`selector__item ${activeSelectItem === 'jsSelectItm_2' ? 'activeVignette' : ''}`}
        onClick={() => handleItemClick('jsSelectItm_2')}>
          <img src={`/media/work/${props.directory}/basicA.png`} alt="Vignette" />
        </div>

        <div id="jsSelectItm_3" 
        className={`selector__item ${activeSelectItem === 'jsSelectItm_3' ? 'activeVignette' : ''}`}
        onClick={() => handleItemClick('jsSelectItm_3')}>
          <img src={`/media/work/${props.directory}/basicB.png`} alt="Vignette" />
        </div>

        <div id="jsSelectItm_4" 
        className={`selector__item ${activeSelectItem === 'jsSelectItm_4' ? 'activeVignette' : ''}`}
        onClick={() => handleItemClick('jsSelectItm_4')}>
          <img src={`/media/work/${props.directory}/basicC.png`} alt="Vignette" />
        </div> 

        <div id="jsSelectItm_5" 
        className={`selector__item ${activeSelectItem === 'jsSelectItm_5' ? 'activeVignette' : ''}`}
        onClick={() => handleItemClick('jsSelectItm_5')}>
          <img src={`/media/work/${props.directory}/trioMockup.png`} alt="Vignette" />
        </div>

        <div id="jsSelectItm_6" 
        className={`selector__item ${activeSelectItem === 'jsSelectItm_6' ? 'activeVignette' : ''}`}
        onClick={() => handleItemClick('jsSelectItm_6')}>
          <img src={`/media/work/${props.directory}/title.png`} alt="Vignette" />
        </div>
    </div>
  )
}

export default Component__SelectPic
