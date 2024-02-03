import React, { useEffect, useRef, useState } from 'react'
import '../style/cursor.scss';
import gsap from 'gsap'
import { useLocation } from 'react-router-dom';

const Component__Cursor = () => {
    const cursorRef = useRef(null)
    const [activeCursor, setActiveCursor] = useState(false)
    const location = useLocation();

    useEffect(() => {
      initHoverAbleItems();
      InitCursor();
      
  }, [location]);

    const initHoverAbleItems = () =>{
      console.log('je relance');
        const hoverableItem = document.querySelectorAll('.js_hoverable')
        console.log(hoverableItem ? hoverableItem : null);

        hoverableItem.forEach(item =>{
          item.addEventListener("mouseover", (event) => {
            setActiveCursor(true)
          });
          item.addEventListener("mouseleave", (event) => {
            setActiveCursor(false)
          });
          item.addEventListener("click", (event) => {
            setActiveCursor(false)
            const tl = new gsap.timeline()
            tl.to(cursorRef.current, { duration: .1, width: '60px', backgroundColor: 'rgb(27, 47, 111)', ease: 'power3.out' });
            tl.to(cursorRef.current, { duration: .3, width: '100px', backgroundColor: 'rgb(48, 83, 197)', ease: 'power2.out' });
            tl.call(() => gsap.set(cursorRef.current, { clearProps: 'width,backgroundColor' }));
          });
        })
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
        <div ref={cursorRef} className={`cursor ${activeCursor ? 'ishovering' : ''}`}>
          <p className={`cursor_p`}>VIEW</p>
        </div>
    )
}

export default Component__Cursor

