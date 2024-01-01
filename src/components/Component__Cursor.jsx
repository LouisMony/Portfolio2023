import React, { useEffect, useRef } from 'react'
import '../style/cursor.scss';
import gsap from 'gsap'

const Component__Cursor = () => {
    const cursorRef = useRef(null)
    useEffect(()=>{
        InitCursor()
    },[])

    const changeCursorStyle = () =>{
    
    }

    const InitCursor = () => {
        gsap.set(cursorRef.current, {xPercent: -50, yPercent: -50});
  
        let xTo = gsap.quickTo(cursorRef.current, "x", {duration: 0.6, ease: "power3"}),
            yTo = gsap.quickTo(cursorRef.current, "y", {duration: 0.6, ease: "power3"});
  
        window.addEventListener("mousemove", e => {
          xTo(e.clientX);
          yTo(e.clientY);
        });
      }

    return (
        <div>
            <div ref={cursorRef} className="cursor"></div>
        </div>
    )
}

export default Component__Cursor
