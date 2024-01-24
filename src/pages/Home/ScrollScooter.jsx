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
        <div className='Home__ScrollScooter__Graduation' key={index}>
        </div>
      );
    }
  
    return (
      <div className='Home__ScrollScooter'>
        <div ref={pointerRef} className='Home__ScrollScooter__pointer'></div>
        {graduationDivs}
      </div>
    );
  };

export default ScrollScooter
