import React, { useEffect, useRef } from 'react'

const ScrollScooter = (props) => {
    const graduationDivs = [];
    const pointerRef = useRef(null)

    useEffect(() => {
      pointerRef.current.style.height = (100/props.scrollInfo.length)+"%"
      let newTopValue = (props.scrollInfo.id*(100/props.scrollInfo.length))+"%"
      pointerRef.current.style.top = newTopValue

    },[props.scrollInfo])
  
    for (let index = 0; index < 41; index++) {
      graduationDivs.push(
        <div className='Home2__ScrollScooter__Graduation' key={index}>
        </div>
      );
    }

    const handleClickScrollScooter = (event) => {
      const scrollScooter = event.currentTarget;
      const clickPositionY = event.clientY - scrollScooter.getBoundingClientRect().top;
      const clickPercentage = (clickPositionY / scrollScooter.clientHeight);
      const newSlide = Math.trunc(props.scrollInfo.length*clickPercentage)
      props.handleClickScooter(newSlide)
    };

    return (
      <div className='Home2__ScrollScooter' onClick={handleClickScrollScooter}>
        <div ref={pointerRef} className='Home2__ScrollScooter__pointer'></div>
        {graduationDivs}
      </div>
    );
  };

export default ScrollScooter
