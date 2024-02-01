import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';
import { useGSAP } from '@gsap/react';
import { isMobile } from '../../js/helper';

const TitleWork = (props) => {
    const titleRef = useRef(null);
    const [triggerAnimTitle, setTriggerAnimTitle] = useState(false)

    useEffect(() => {
        if (titleRef.current) {
            const newTitleElement = document.createElement('h1');
            newTitleElement.textContent = props.title;
            titleRef.current.parentNode.replaceChild(newTitleElement, titleRef.current);
            titleRef.current = newTitleElement;
            setTriggerAnimTitle(!triggerAnimTitle)
        }
    }, [props.title]);

    useGSAP(() => {
        if (titleRef.current) {
            gsap.registerPlugin(ScrollTrigger);
            const splitedTitle = new SplitType(titleRef.current, { charClass: 'charTitleWork' });
            gsap.fromTo('.charTitleWork', { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", yPercent: 50 }, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", yPercent: 0, duration: 1.5, stagger: .01, ease: "power4.out", delay: .5 });

            if(!isMobile()){
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
            }
        }
    }, { scope: titleRef, dependencies: [triggerAnimTitle] }); // Add titleRef.current as a dependency

    return (
        <h1 ref={titleRef}>{props.title}</h1>
    );
};

export default TitleWork;
