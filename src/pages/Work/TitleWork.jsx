import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';

const TitleWork = (props) => {
    const titleRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
            const newTitleElement = document.createElement('h1');
            newTitleElement.textContent = props.title;
            titleRef.current.parentNode.replaceChild(newTitleElement, titleRef.current);
            titleRef.current = newTitleElement;
            initAnim();
        }
    }, [props.title]);

    const initAnim = () => {
        const splitedTitle = new SplitType(titleRef.current, { charClass: 'charTitleWork' });
        gsap.fromTo('.charTitleWork', { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", yPercent: 50 }, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", yPercent: 0, duration: 1.5, stagger: .01, ease: "power4.out", delay: .5 });

        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(titleRef.current, {
            y: 0,
        },
        {
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 50%',
                end: 'top 0%',
                scrub: true,
                markers: false
            },
            y: 150,
        });
    };

    return (
        <h1 ref={titleRef} id='js_splitedTitle'>{props.title}</h1>
    );
};

export default TitleWork;
