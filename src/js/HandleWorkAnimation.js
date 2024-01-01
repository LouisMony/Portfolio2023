import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export function HandleWorkAnimation(isMobile){
    window.scrollTo(0, 0)
    const MyTitle = new SplitType('.gsapSplit', { charClass: 'charTitle' })
    
    gsap.registerPlugin(ScrollTrigger)

    let nextStart = 0
    if(isMobile === true){
        gsap.to('.work',{scrollTrigger:{trigger: ".work__banner", scrub: .5, start: '0px top', end: 'bottom top'},backgroundPositionY: "60%"})
        
        gsap.to('.gsapSplit',{scrollTrigger:{trigger: ".work__banner", scrub: 1, start: '0 top', end: '100% top'},height
        : "200vh", translateY: "15vh"})

        document.querySelectorAll(".charTitle").forEach(item=>{
            nextStart = nextStart + 15
            let newStart = nextStart+"px"
            gsap.to(item,{scrollTrigger:{trigger: ".work__banner", scrub: 1, start: ''+newStart+'top', end: '100% top'},translateY: "77vh"})
        })
        

        gsap.fromTo('.gspScnd',{opacity: 1, height: "40px"},{scrollTrigger:{trigger: ".work__banner", scrub: .5, start: '0px top', end: '100px top'},opacity: 0, height: "0px"})
    }
    
    gsap.fromTo('.work__content__blocsolo',{clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"},{scrollTrigger:{trigger: ".work__content__blocsolo", start: 'top 60%', end: '0px center'}, duration: 0.8, clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "power3.inOut"})

    let nextdelay = 0
    document.querySelectorAll(".selector__item").forEach(item=>{
        nextdelay = nextdelay + 0.08
        gsap.fromTo(item,{clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",opacity:0},{scrollTrigger:{trigger: ".work__content__blocsolo", start: 'top 20%', end: '0px center'}, delay: nextdelay,opacity:1, duration: 1, ease: "power3.out",clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})
    })

    document.querySelectorAll(".JsBasicP").forEach(item=>{
        gsap.fromTo(item,{y:100, opacity:0},{scrollTrigger:{trigger: item, start: 'top bottom'},duration: 1.5, opacity:1, y:0})
    })

    gsap.fromTo('.work__next__content',{height: "0%"},{scrollTrigger:{trigger: ".work__next__content", scrub: .5, start: 'top bottom'},height: "60%"})
    if(isMobile === true){
        gsap.fromTo('.work__next__p',{opacity: 0, xPercent: 100},{scrollTrigger:{trigger: ".work__next__content", scrub: .5, start: 'top bottom'},opacity: 1, xPercent: -30})
    }
    gsap.to('.work', {backgroundSize: "cover",duration: 1.5, delay: 0.3, ease: "power4.inOut"})
    gsap.fromTo('.work__banner__content',{opacity: 0}, {opacity: 1,duration: 1, ease: "power1.inOut"})
    gsap.fromTo('.gspScnd',{yPercent: -70, opacity: 0}, {yPercent:0, opacity: 1, stagger: 0.015,duration: 1, ease: "power3.inOut", delay: 1})
    
    
    gsap.fromTo('.charTitle',{yPercent: 100}, {yPercent:0,duration: 2,stagger: 0.03, delay:0, ease: "power4.inOut"})

}