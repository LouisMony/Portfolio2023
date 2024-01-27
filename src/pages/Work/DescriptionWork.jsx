import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'
import VisitButton from './VisitButton';

const DescriptionWork = (props) => {

    const [stacks, setStacks] = useState(null)
    
    useEffect(()=>{
        if(props.textContent && props.label){
            console.log(typeof(props.label), props.label);
            //initParaAnimation()
        }
    },[props.paraA, props.paraB])

    useEffect(() =>{
        
    })

    const initParaAnimation = () =>{
        gsap.registerPlugin(ScrollTrigger)
        const splitTypes = document.querySelectorAll('.JsBasicP')

        splitTypes.forEach((char, i) =>{
            const text = new SplitType(char, {types: 'char'})

            gsap.from(text.chars, {
                scrollTrigger:{
                    trigger: char,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    markers: false
                },
                opacity: .2,
                stagger: 0.3
            })
        })


    }
    return (
        <div className='work__desc'>
            <div className='work__desc__line'></div>
            <div className='work__desc__label'>
                {stacks && stacks.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                
            </div>
            <div className='work__desc__text'>
                <p className='JsBasicP'>{props.textContent}</p>
            </div>
        </div>
    )
}

export default DescriptionWork
