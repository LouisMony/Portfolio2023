import React, { useEffect, useRef, useState } from 'react'
import '../style/cursor.scss';
import gsap from 'gsap'
import { useLocation } from 'react-router-dom';

const Component__Cursor = () => {
    const location = useLocation()
    const cursorRef = useRef(null)
    const [isUpperHalf, setIsUpperHalf] = useState(true)
    
    useEffect(()=>{
        InitCursor()
    },[])

    const InitCursor = () => {
        gsap.set(cursorRef.current, {xPercent: -50, yPercent: -50});
  
        let xTo = gsap.quickTo(cursorRef.current, "x", {duration: 0.6, ease: "power3"}),
            yTo = gsap.quickTo(cursorRef.current, "y", {duration: 0.6, ease: "power3"});
  
        window.addEventListener("mousemove", e => {
          xTo(e.clientX);
          yTo(e.clientY);
          if (e.clientY < window.innerHeight / 2) {
            setIsUpperHalf(true)
          }
          else{
            setIsUpperHalf(false)
          }
        });
      }

    return (
        <div>
            {location.pathname === "/hometest" ? 
                <div ref={cursorRef} className="cursorhome">
                    <img src="./media/arrow.svg" alt="Flèche" className={`arrow ${isUpperHalf === true ? 'arrowreverse' : ''}`} />
                </div>
            : 
                <div ref={cursorRef} className="cursor">
                </div>
            }
        </div>
    )
}

export default Component__Cursor
