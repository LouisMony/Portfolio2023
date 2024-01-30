import React, { useEffect, useRef, useState } from 'react'
import SliderItem from './SliderItem'
import gsap from 'gsap';

const Slider = (props) => {
    const SliderRef = useRef(null)
    let animIsRunning = false
    
    const [activeItem, setActiveItem] = useState(0);

    useEffect(() => {
        if(props.sliderItems){
            document.addEventListener('click', handleClick);
            props.handleChangeActiveItem(activeItem)
            return () => {
                document.removeEventListener('click', handleClick);
            };
        }
    }, [activeItem, props.sliderItems]);

    useEffect(() =>{
        if(props.sliderItems){
            props.handleChangeTitle(props.sliderItems[0].name)
        }
        
    },[props.sliderItems])

    const handleClick = async (event) => {
        if(animIsRunning === false){
            animIsRunning = true
            
            const mouseY = event.clientY;
            const windowHeight = window.innerHeight;
            const isUpperHalf = mouseY < windowHeight / 2;
            await handleAnimSlider(isUpperHalf)
        }
    };

    const handleAnimSlider = async (isUpperHalf) => {
        if(!isUpperHalf){
            //VERS LE BAS
            if((activeItem + 1) === props.sliderItems.length){
                animIsRunning = false
                return
            }

            const newActiveItemTitle = props.sliderItems[activeItem + 1].name
            props.handleChangeTitle(newActiveItemTitle)
            props.handleChangeScroll(props.sliderItems[activeItem + 1].id, props.sliderItems.length)
            const currentHeight = SliderRef.current.offsetTop;
            const newHeight = currentHeight - (window.innerHeight * 0.5);
            
            gsap.to('.Home2__Slider', {
                top: newHeight, 
                duration: .75, 
                ease: "power3.out", 
                onComplete: () => {
                    animIsRunning = false
                    setActiveItem(activeItem + 1)
                }
            })
        }
        else{
            //VERS LE HAUT
            if((activeItem) === 0){
                animIsRunning = false
                return;
            }
            const newActiveItemTitle = props.sliderItems[activeItem - 1].name
            props.handleChangeTitle(newActiveItemTitle)
            props.handleChangeScroll(props.sliderItems[activeItem - 1].id, props.sliderItems.length)
            const currentHeight = SliderRef.current.offsetTop;
            const newHeight = currentHeight + (window.innerHeight * 0.5);
            
            gsap.to('.Home2__Slider', {
                top: newHeight, 
                duration: .75, 
                ease: "power3.out",
                onComplete: () => {
                    animIsRunning = false
                    setActiveItem(activeItem - 1)
                }
            })
        }
    }

    useEffect(()=>{
        
        gsap.from('.Home2__Slider__Item',{y:200, duration: .5, stagger: 0.2, ease:"power3.out"})
        
    },[])


    return (
        <div ref={SliderRef} className='Home2__Slider'>
            {props.sliderItems && props.sliderItems.map((item, index) => (
                <SliderItem key={index} activeItem={activeItem === item.id} thumbnail={item.background} />
            ))}
        </div>
    )
}

export default Slider
