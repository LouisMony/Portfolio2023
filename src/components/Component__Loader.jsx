import React, { useEffect, useRef } from 'react'
import '../style/Loader.scss';
import gsap from 'gsap';
import { CountUp } from 'countup.js';

const Component__Loader = (props) => {
    const animatedTextRef = useRef(null);

    useEffect(() =>{

        const easingFn = function (t, b, c, d) {
            var ts = (t /= d) * t;
            var tc = ts * t;
            return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t);
        }

        const options = {
            duration: 5,
            easingFn,
        };
        let count = new CountUp(animatedTextRef.current, 100, options);

        if (!count.error) {
            count.start();
        } else {
            console.error(count.error);
        }

        const tl = new gsap.timeline()

        tl.fromTo('.loader__p', {opacity: 0}, {opacity: 1, duration: .6 ,ease:"power2.Out"})
        tl.fromTo('.loader__p', {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -10, duration: .6, delay:3 ,ease:"power2.Out"})
        tl.fromTo('.loader', {opacity: 1}, {opacity: 0, duration: 1, ease:"power2.Out"})
        tl.set('.loader', {display: 'none'})
        
        
    },[])

    

    return (
        <div className='loader'>
            <p className='loader__p'><span ref={animatedTextRef}></span>%</p>
        </div>
    )
}

export default Component__Loader
