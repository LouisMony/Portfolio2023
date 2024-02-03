import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { isTablette } from '../../js/helper';

const SliderItem = (props) => {
  const imgRef = useRef(null)
  useEffect(() =>{
    if(props.activeItem && imgRef && props.thumbnail && !isTablette()){
      initAnimImage()
    }

    return () => {
      document.removeEventListener("mousemove", handleMousePMove);
    };
  },[props.activeItem, imgRef, props.thumbnail])

  const initAnimImage = () =>{
    document.addEventListener("mousemove", handleMousePMove);
  }

  function handleMousePMove(event) {
    if (event) {
      var largeurFenetre = window.innerWidth;
      var hauteurFenetre = window.innerHeight;
      var x = event.clientX;
      var y = event.clientY;

      var pourcentageX = (((x - largeurFenetre / 2) / largeurFenetre) * 100)/30;
      var pourcentageY = (((y - hauteurFenetre / 2) / hauteurFenetre) * 100)/30;

      gsap.to(imgRef.current, { x: pourcentageX + '%', y: pourcentageY + '%', duration: 0.2, ease: "power3.out", });
    }
  }

  return (
    <div className={`Home2__Slider__Item ${props.activeItem === true ? 'activeItem' : ''}`} >
        {/* <img ref={imgRef} src={props.thumbnail} alt="Vignette" /> */}
    </div>
  )
}

export default SliderItem
