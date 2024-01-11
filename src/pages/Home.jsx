import React, { useEffect, useRef, useState } from "react";
import '../style/Home.scss';
import gsap from 'gsap';
import HandleCursorAnimation from "../js/HandleCursorAnimation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { initScrollTriggerHome, HandleClickProject } from "../js/HandleGsap";
import { worklist } from "../js/worklist";

gsap.registerPlugin(ScrollTrigger)

function Home(){
    const navigate = useNavigate();
    const nextWorkLink = useRef(null)

    const [currentSelectedWork, setCurrentSelectedWork] = useState(worklist[Math.floor(Math.random() * 6)])
   
    useEffect(() => {
        HandleCursorAnimation()
        initScrollTriggerHome();
        gsap.fromTo(
          ".Home__main__center__center",
          {
            height: '40%',
          },
          {
            height: "100%",
            scrollTrigger: {
              trigger: ".Home__main",
              start: "center center",
              end: "bottom center",
              scrub: 0.5,
              markers: false,
              pin: true,
              pinSpacing: false,
              onLeave: () => {
                handleChangePage();
              },
            },
          }
        );
    }, []);
    

    useEffect(() =>{
      gsap.fromTo('.Home__main__center__center__curtain', {clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}, {clipPath:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", duration: .8, ease: "power3.inOut"})

      gsap.fromTo('.projectinfo', {opacity:0, yPercent: -80}, {
        opacity:1, yPercent: 0, stagger: 0.2,
        duration: .8, 
        ease: "power3.inOut"
      })

    },[currentSelectedWork])

    const handleChangePage = () =>{
      if(nextWorkLink.current){
        let link = '/work/'+nextWorkLink.current.textContent
        navigate(link)
      }
    }

    const handleChangeWork = (order) => {
      let currentID = currentSelectedWork.id
      let nextid;
      if(order === "next"){nextid = currentID === 5 ? 0 : currentID + 1}
      else{nextid = currentID === 0 ? 5 : currentID - 1}

      let nextWork = worklist.find(objet => objet.id === nextid);

      gsap.fromTo('.projectinfo', {opacity:1, yPercent: 0}, {
        opacity:0, yPercent: 80, stagger: 0.2,
        duration: .8, 
        ease: "power3.inOut"
      })

      gsap.fromTo('.Home__main__center__center__curtain', {clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"}, {clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
      duration: .8, 
      onComplete: () => setCurrentSelectedWork(nextWork) ,
      ease: "power3.inOut"})
    }

    const HandleClickWork = () => {
      HandleClickProject(handleChangePage)      
    };
    
    return (
      <div className='Home gsapMain'>        
        <div className="Home__main">
          <div className="Home__main__left sideDesktop">
            <div style={{width: 0, opacity: 0}} ref={nextWorkLink}>{currentSelectedWork.link}</div>
          </div>
          <div className="Home__main__center">
            <div className="Home__main__center__top topSide">
              <span className="projectinfo">{currentSelectedWork.name} </span>
              <span className="projectinfo">{currentSelectedWork.type} - {currentSelectedWork.date}</span>
            </div>
            <div className="Home__main__center__center link_cursor" onClick={HandleClickWork} style={{
              backgroundImage: `url(${currentSelectedWork.background})`
            }}>
              <div className="Home__main__center__center__curtain"></div>
            </div>
            <div className="Home__main__center__bottom topSide ">
              <div className="Home__main__center__bottom__item " onClick={() => handleChangeWork('prev')}>
                <span>Previous work</span>
                
              </div>
              <div className="Home__main__center__bottom__item " onClick={() => handleChangeWork('next')}>
                <span>Next work</span>
              </div>
            </div>
          </div>
          <div className="Home__main__right sideDesktop"></div>
        </div>
        <div className="Home__scroll"></div>
      </div>
    );
  }
  
  export default Home;