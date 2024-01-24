import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Title = (props) => {
    const titleRef = useRef(null)
    const [currentTitle, setCurrentTitle] = useState('Texte')

    const handleClickTitle = (e) =>{
        e.stopPropagation()
        props.handleClickTitle()
    }
    
    useEffect(() => {
        gsap.to('.Home2__Title__h2', {
            translateY: "-13vw", 
            duration: .5, 
            ease: "power3.out", 
            onComplete: () => {
                setCurrentTitle(props.title)
            }
        })
    },[props.title])

    useEffect(() => {
        if(currentTitle !== 'Texte'){
            gsap.set('.Home2__Title__h2', {
                translateY: "0%", 
            })
        }

        
    },[currentTitle])
    return (
        <div className='Home2__Title' onClick={handleClickTitle}>
            <h2 className='Home2__Title__h2 current'>{currentTitle}</h2>
            <h2 className='Home2__Title__h2 next'>{props.title}</h2>
        </div>
    )
}

export default Title
