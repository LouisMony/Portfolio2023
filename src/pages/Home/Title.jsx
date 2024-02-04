import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { isTablette } from '../../js/helper';

const Title = (props) => {
    const titleBlocRef = useRef(null)
    const [currentTitle, setCurrentTitle] = useState('Kia osb')

    const handleClickTitle = (e) =>{
        e.stopPropagation()
        props.handleClickTitle()
    }
    
    useGSAP(() => {
        if(titleBlocRef){
            gsap.to('.Home2__Title__h2', {
                translateY: !isTablette() ? "-13vw" : "-28vw", 
                duration: .8, 
                ease: "power3.out", 
                onComplete: () => {
                    setCurrentTitle(props.title)
                }
            })
        }
       
    },{dependencies: [props.title, titleBlocRef], scope: titleBlocRef})

    useGSAP(() => {
        if(currentTitle !== 'Kia osb' && titleBlocRef){
            gsap.set('.Home2__Title__h2', {
                translateY: "0%", 
            })
        } 
    },{dependencies: [currentTitle, titleBlocRef], scope: titleBlocRef})

    
    return (
        <div ref={titleBlocRef} className='Home2__Title js_hoverable' onClick={handleClickTitle}>
            <h2 className='Home2__Title__h2 current'>{currentTitle}</h2>
            <h2 className='Home2__Title__h2 next'>{props.title}</h2>
        </div>
    )
}

export default Title
