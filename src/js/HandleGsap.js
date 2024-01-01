import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function InitAnimationHome(){
  // gsap.fromTo('.Home__main__center__center',{height: "0%"}, {height: "40%",duration: 4, delay:1, ease: "elastic.out(1,)"})
  // gsap.fromTo('.Home__main__center',{width: "0%"}, {width: "40%",duration: 4, delay:1, ease: "elastic.out(1,0.3)"})
}
export function initScrollTriggerHome(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".sideDesktop", {
      width: "0px",
      opacity: 0,
      scrollTrigger: {
        trigger: ".Home__main",
        start: "center center",
        end: "bottom center",
        scrub: .5,
        markers: false,
      },
    });

    gsap.to(".Home__main__center",{
      width: "100%",
      scrollTrigger: {
        trigger: ".Home__main",
        start: "center center",
        end: "bottom center",
        scrub: .5,
        markers: false,
      },
    });

    gsap.to(".topSide, .bottomSide", {
      height: "0px",
      opacity: 0,
      scrollTrigger: {
        trigger: ".Home__main",
        start: "center center",
        end: "bottom center",
        scrub: .5,
        markers: false,
      },
    });  
}

export function HandleClickProject(completeFunction){  
    gsap.to(".sideDesktop",{width: "0px", duration: .2});
    gsap.to(".topSide",{height: "0px", opacity: 0, duration: .6, });
    gsap.to(".Home__main__center",{width: "100%",duration: 1.2, delay:.5, ease: "expo.inOut"});
    gsap.to(".Home__main__center__center", {height: "100%",duration :1.2, delay:.5, ease: "expo.inOut", onComplete: () => completeFunction()});      
};