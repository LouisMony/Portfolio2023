import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'
import VisitButton from './VisitButton';
import { useGSAP } from '@gsap/react';

const DescriptionWork = (props) => {
    const textContainerRef = useRef(null)
    const textRef = useRef(null)

    useGSAP(() => {
        if(props.textContent && props.label && textRef && textContainerRef){
            gsap.registerPlugin(ScrollTrigger)
            const text = new SplitType(textRef.current, {types: 'words'})

            gsap.from(text.words, {
                scrollTrigger:{
                    trigger: textContainerRef.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    markers: false
                },
                opacity: .2,
                stagger: 0.3
            })
        }
    }, { dependencies: [props.textContent, props.label, textContainerRef, textRef], scope: textContainerRef});

    return (
        <div className='work__desc' ref={textContainerRef}>
            <div className='work__desc__line'></div>
            <div className='work__desc__label'>
                <p>Context : </p>
                
            </div>
            <div className='work__desc__text'>
                <p ref={textRef} className='JsBasicP'>{props.textContent}</p>
            </div>
        </div>
    )
}

export default DescriptionWork
