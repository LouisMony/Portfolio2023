import React, { useEffect, useRef, useState } from 'react'
import '../style/Work.scss';
import { Link, useNavigate } from 'react-router-dom';
import Component__SelectPic from '../components/Component__SelectPic';
import Component__ScrollScooter from '../components/Component__ScrollScooter';

//STYLE
import SplitType from 'split-type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HandleCursorAnimation from '../js/HandleCursorAnimation';
import { HandleWorkAnimation } from '../js/HandleWorkAnimation';

const Work = (props) => {
    const naviguate = useNavigate()

    const [activeImageLink, setActiveImageLink] = useState(`/media/work/${props.directory}/mac.png`)
    const [previousImageLink, setPreviousImageLink] = useState(`/media/work/${props.directory}/mac.png`)
    const [normalOrder, setNormalOrder] = useState(true)
    const [forceEffectUpdate, setForceEffectUpdate] = useState(false);
    const [isMobile, setIsMobile] = useState(null)

    //let normalOrder = null
    
    let animationRunning = false

    useEffect(() =>{
        if(normalOrder == true){
            if(!animationRunning){
                animationRunning = true
                const tl = new gsap.timeline()
                tl.to('.displayed', {xPercent: 100, duration: .5, ease: "expo.inOut"})
                tl.to('.hided', {xPercent: 100, duration: .5, ease: "expo.inOut"}, '<')
                tl.set('.displayed', {xPercent: -100})
                tl.call(()=>{animationRunning=false})
                setNormalOrder(false)
            }
        }
        else{
            if(!animationRunning){
                animationRunning = true
                const tl = new gsap.timeline()
                tl.to('.hided', {xPercent: 200, duration: .5, ease: "expo.inOut"})
                tl.to('.displayed', {xPercent: 0, duration: .5, ease: "expo.inOut"}, '<')
                tl.set('.hided', {xPercent: 0})
                tl.call(()=>{animationRunning=false})
                setNormalOrder(true)
            }
        }
    },[previousImageLink, activeImageLink, forceEffectUpdate])

    useEffect(() =>{
        window.scrollTo(0, 0);
        checkScreenSize()

        
        fixHeight()
        HandleCursorAnimation()
    },[])

    useEffect(()=>{
        if(isMobile !== null){
            initAnimWorkPage()
        }
    },[isMobile])

    const fixHeight = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    }

    const checkScreenSize = () =>{
        if (window.matchMedia('(min-width: 768px)').matches) {
            setIsMobile(true)
        }
        else{
            setIsMobile(false)
        }
    }

    const handleChangeImage = (imgUrl) => {
        if (normalOrder === null || normalOrder === true) {
          setPreviousImageLink(imgUrl);
        } else {
          setActiveImageLink(imgUrl);
        }
        setForceEffectUpdate((prev) => !prev);
    };

    const handleNextProject = () => {
        // Faites défiler la page vers le bas
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        
            const nextContent = document.querySelector(".work__next__content");
            gsap.to(nextContent, {
                height: "100%",
                width: "100%",
                duration: 1.2,
                ease: "expo.inOut",
                onComplete: () => {
                    // Naviguez vers l'URL spécifiée après l'animation
                    naviguate("/work/" + props.link);
                }
            });
         // ajustez la durée d'attente selon vos besoins
    }

    const initAnimWorkPage = () =>{
        HandleWorkAnimation(isMobile)
    }

    return (
        <div className='work gsapMain' style={{
            backgroundImage: `url('/media/work/${props.directory}/banner.jpg')`
          }}>
            <Component__ScrollScooter />
            <div className='work__banner'>
                <div className='work__banner__content' >
                    <span className='gspScnd'>{props.date} - {props.type} <br/>{props.stack}</span>
                    <h1 className='gsapSplit'>{props.projectName}</h1>
                    <a target='_blank' href={props.demolink}><span className='gspScnd visitlink'>Visit website</span></a>
                </div>
            </div>
            <div className='work__spacer'></div>
            <div className='work__content'>
                <div className='work__content__blocsolo'>
                    <div className='work__content__blocsolo__item'>
                        <img className='work__content__blocsolo__item__img displayed' src={activeImageLink} alt="Image du Projet" />
                        <img className='work__content__blocsolo__item__img hided' src={previousImageLink} alt="Image du Projet" />
                    </div>
                </div>
                <Component__SelectPic directory={props.directory} handleChangeImage={handleChangeImage} />
            </div>
            <div className='work__desc'>
                <div className='work__desc__text'>
                    <p className='JsBasicP'>{props.paraA}</p>
                </div>
                <div className='work__desc__text'>
                    <p className='JsBasicP'>{props.paraB}</p>
                </div>
                
            </div>
            <div className='work__next'>
                <p className='work__next__p'>Next Work</p>
                <p className='work__next__p'>{props.linkname}</p>
                <div className='work__next__content animEnter link_cursor' onClick={handleNextProject} style={{
                    backgroundImage: `url('/media/work/${props.link}/banner.jpg')`
                }}></div>
            </div>
        </div>
    )
}

export default Work
