import React, { useEffect, useRef } from 'react'
import '../style/Loader.scss';
import gsap from 'gsap';
import { CountUp } from 'countup.js';

const Component__Loader = (props) => {
    const animatedTextRef = useRef(null);

    useEffect(() =>{
        const options = {
            duration: 3,
        };
        let demo = new CountUp(animatedTextRef.current, 100, options);

        if (!demo.error) {
            demo.start();
        } else {
            console.error(demo.error);
        }

        const tl = new gsap.timeline()
        
        if(!sessionStorage.getItem('load')){
            tl.fromTo('.loader__line', {scaleX: 0}, {scaleX: 1, duration: 3, ease:"expo.inOut"})
            tl.fromTo('.loader__p', {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -10, duration: .6, ease:"power2.Out"})
            tl.fromTo('.loader', {opacity: 1}, {opacity: 0, duration: 1, ease:"power2.Out"})
            tl.call(()=>{props.toggleLoader()})
        }else{
            tl.call(()=>{props.toggleLoader()})
        }
        
    },[])

    

    return (
        <div className='loader'>
            <p className='loader__p'><span ref={animatedTextRef}></span>%</p>
            <div className='loader__line' id='loaderLine1'></div>
            <div className='loader__line' id='loaderLine2'></div>
            <div className='loader__line' id='loaderLine3'></div>
            <div className='loader__line' id='loaderLine4'></div>
        </div>
    )
}

export default Component__Loader
