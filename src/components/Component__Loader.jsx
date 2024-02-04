import React, { useEffect, useRef } from 'react'
import '../style/Loader.scss';
import gsap from 'gsap';
import { CountUp } from 'countup.js';

const Component__Loader = (props) => {
    const animatedTextRef = useRef(null);

    return (
        <div className='loader'>
            <div className='loader__line'>
                <div className='loader__line__inner'></div>
            </div>
        </div>
    )
}

export default Component__Loader
