import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'

const TitleWork = (props) => {
    
    useEffect(() =>{
        console.log(props.title);
        if(props.title){
            initAnim()
        }
        
    },[props.title])

    const initAnim = () =>{
        const splitedTitle = new SplitType('#js_splitedTitle', { charClass: 'charTitleWork' })
        gsap.fromTo('.charTitleWork',{clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", yPercent: 50}, {clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", yPercent: 0,duration: 1.5, stagger: .01,ease: "power4.out", delay: .5})
    
        gsap.registerPlugin(ScrollTrigger)
        
        gsap.fromTo('#js_splitedTitle', {
            y: 0,
        },
        {
            scrollTrigger:{
                trigger: '#js_splitedTitle',
                start: 'top 50%',
                end: 'top 0%',
                scrub: true,
                markers: false
            },
            y: 150,
        })
    }

    return (
        <h1 id='js_splitedTitle'>{props.title}</h1>
    )
}

export default TitleWork

