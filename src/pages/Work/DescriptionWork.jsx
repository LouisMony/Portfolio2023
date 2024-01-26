import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'

const DescriptionWork = (props) => {
    useEffect(()=>{
        if(props.paraA && props.paraB){
            initParaAnimation()
        }
    },[props.paraA, props.paraB])

    const initParaAnimation = () =>{
        gsap.registerPlugin(ScrollTrigger)
        const splitTypes = document.querySelectorAll('.JsBasicP')

        splitTypes.forEach((char, i) =>{
            const text = new SplitType(char, {types: 'chars'})

            gsap.from(text.chars, {
                scrollTrigger:{
                    trigger: char,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    markers: false
                },
                opacity: 0.2,
                stagger: 0.3
            })
        })
    }
    return (
        <div className='work__desc'>
            <div className='work__desc__text'>
                <p className='JsBasicP'>{props.paraA}</p>
            </div>
            <div className='work__desc__text'>
                <p className='JsBasicP'>{props.paraB}</p>
            </div>
        </div>
    )
}

export default DescriptionWork
