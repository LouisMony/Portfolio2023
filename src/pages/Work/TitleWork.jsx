import React, { useEffect } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'

const TitleWork = (props) => {
    useEffect(() =>{
        initAnim()
    },[])

    const initAnim = () =>{
        const splitedTitle = new SplitType('#js_splitedTitle', { charClass: 'charTitleWork' })
        gsap.fromTo('.charTitleWork',{opacity: 0, clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", yPercent: 50}, {opacity: 1, clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", yPercent: 0,duration: 1.5, stagger: .01,ease: "power4.out", delay: .5})
    }

    return (
        <h1 id='js_splitedTitle'>{props.title}</h1>
    )
}

export default TitleWork

