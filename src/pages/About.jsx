import React, { useEffect } from "react";
import '../style/About.scss';
import gsap from "gsap";
import SplitType from 'split-type';

function About(props){

    const carreerData = [
      { role: 'WEB DEVELOPPER', company: 'TKORP - INTERNSHIP', date: '2023.2024' },
      { role: 'WEB DEVELOPPER & WEB DESIGNER', company: 'INNOCEAN FRANCE - INTERNSHIP', date: '2022.2023' },
      { role: 'WEB INTEGRATOR & WEB DESIGNER', company: 'INNOCEAN FRANCE - INTERNSHIP', date: '2021.2023' },
    ];
    const scolarData = [
      { role: 'MBA UX/UI Design', company: 'My Digital School', date: '2022.2024' },
      { role: "Bachelor's in Digital Project Management", company: 'IIM Paris', date: '2021.2022' },
      { role: 'DUT MMI', company: 'IUT VELIZY', date: '2019.2021' },
    ];

    const workData = [
      { skills: 'React JS', name: 'Portfolio 2024', date: '01.2024', type:'Personal', link: null },
      { skills: 'React JS', name: 'Rolland Gamos', date: '11.2023', type:'Personal', link: 'https://rollandgames.netlify.app/' },
      { skills: 'React JS', name: 'Prime Prono App', date: '10.2023', type:'Personal', link: "https://primeprono.netlify.app/" },
      { skills: 'REACT JS', name: 'HorsTrace Aventures', date: '09.2023', type:'Professional', link: null },
      { skills: 'Astro JS', name: 'KIA OSB', date: '04.2023', type:'Professional', link: "https://www.kia.com/fr/services/rendez-vous-atelier/?step=vehicle" },
      { skills: 'FIGMA', name: 'GetAways', date: '02.2023', type:'School', link: null },
      { skills: 'Vue JS', name: 'Event App', date: '12.2022', type:'School', link: "https://events-lesfousduroy.netlify.app/me-connecter" },
      { skills: 'React JS', name: 'Portfolio 2022', date: '04.2022', type:'Personal', link: "https://louis-mony-portfilio.netlify.app/" },
      { skills: 'Vue JS', name: 'AIDES', date: '04.2022', type:'Professional', link: "https://don.aides.org/" },
      { skills: 'HTML/CSS/JS', name: 'Eqlips', date: '10.2021', type:'Personal', link: "https://eqlips-steaming.netlify.app/" },
      { skills: 'FL Studio', name: 'Music production', date: 'Since 2018', type:'Personal', link: 'https://soundcloud.com/user-937117132' },
      
    ];

    const initAnim = () => {
        gsap.fromTo('.lineAbout',{width: "0"},{width: "100%", duration: 2, ease: "expo.inOut"})
        gsap.fromTo('.gsapAboutItem',{yPercent: 100},{yPercent: 0, stagger: .035, duration: 2, delay: .6, ease: "expo.out"})
        gsap.fromTo('.gsapLink, .close',{opacity: 0, yPercent: 50},{opacity: 1, yPercent: 0, stagger: .2, duration: .5, delay: 1})
        gsap.fromTo('.gsapH1About',{yPercent: 30, opacity: 0}, {yPercent:0, opacity: 1,duration: 1, ease: "power3.inOut"})
    }

    const handleClose = (e) =>{
      e.stopPropagation()
      gsap.fromTo('.gsapLink, .close',{opacity: 1, yPercent: 0},{opacity: 0, yPercent: 50, duration: .4})
      gsap.fromTo('.gsapH1About',{yPercent: 0, opacity: 1}, {yPercent:30, opacity: 0,duration: .4, ease: "power3.inOut"})
      gsap.fromTo('.lineAbout',{width: "100%"},{width: "0%", duration: .5, ease: "expo.inOut"})
      gsap.fromTo('.gsapAboutItem',{yPercent: 0},{yPercent: 100, duration: .5, ease: "expo.out", onComplete: () =>{
        props.toggleAboutFunction()
      }})
    }

    useEffect(() =>{
      initAnim()
    },[])

    return (
      <div className='About'>
        <div className="About__content">
          <span className="close" onClick={handleClose}>
            <div className='close__hoverable'>
              <p>Close</p>
              <p>Close</p>
            </div>
          </span>
          <h2 className="gsapH1About">Louis Mony</h2>
          <div className="Gsap_container"><p className="gsapAboutItem">French front-end developper & webdesigner based in Paris</p></div>

          <div className="lineAbout"></div>

          {carreerData.map((item, index) => (
            <div className="About__content__item" key={index}>
              <div className="Gsap_container">
                <p className="gsapAboutItem">{item.role}<br/><span>{item.company}</span></p>
              </div>
              <div className="Gsap_container">
                <p className="gsapAboutItem">{item.date}</p>
              </div>
            </div>
          ))}

          <div className="lineAbout"></div>

          {scolarData.map((item, index) => (
            <div className="About__content__item" key={index}>
            <div className="Gsap_container">
              <p className="gsapAboutItem">{item.role}<br/><span>{item.company}</span></p>
            </div>
            <div className="Gsap_container">
              <p className="gsapAboutItem">{item.date}</p>
            </div>
          </div>
          ))}          
        </div>
        <div className="About__work">
          <h2 className="gsapH1About">All works</h2>
          <div className="lineAbout"></div>
          {workData.map((item, index) => (
            item.link ? (
              <a className="About__work__item linkable" target="_blank" key={index} href={item.link}>
                <div className="Gsap_container">
                  <p className="gsapAboutItem">{item.name}<br/><span>{item.skills} - {item.type}</span></p>
                </div>
                <div className="Gsap_container">
                  <p className="gsapAboutItem">{item.date}</p>
                </div>
              </a>
            ) : (
              <div className="About__work__item" key={index}>
                <div className="Gsap_container">
                  <p className="gsapAboutItem">{item.name}<br/><span>{item.skills} - {item.type}</span></p>
                </div>
                <div className="Gsap_container">
                  <p className="gsapAboutItem">{item.date}</p>
                </div>
              </div>
            )
          ))}
          <ul>
            <li className="gsapLink"><a target='_blank' href="mailto:louis.mony2@gmail.com">Email</a></li>
            <li className="gsapLink"><a target='_blank' href="https://www.linkedin.com/in/louis-mony-2505331a2/">Linkedin</a></li>
            <li className="gsapLink"><a target='_blank' href="https://github.com/LouisMony">Github</a></li>
            <li className="gsapLink"><a target='_blank' href="https://soundcloud.com/user-937117132">SoundCloud</a></li>
          </ul>
        </div>
          
      </div>
    );
  }
  
  export default About;