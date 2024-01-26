//GENERAL
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projectsData } from './js/worklist';

//COMP
import Home from './pages/Home';
import Homev2 from './pages/HomeV2';
import Work from './pages/Work/Work';
import About from './pages/About';
import Component__Footer from './components/Component__Footer';
import Component__Header from './components/Component__Header';
import Component__Loader from './components/Component__Loader';
import Component__Cursor from './components/Component__Cursor';

import ComponentTransi from './components/ComponentTransi';

//STYLE 
import './index.scss';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

//jS 
import importAll from './js/loadImages';




function App(){
    const [showAbout, setShowAbout] = useState(false)
    const [showLoader, setShowLoader] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    const [allImg, setAllImg] = useState(null)

    const location = useLocation();

    const toggleAbout = (e) => {
      if(showAbout === false){
        setShowAbout(!showAbout)
      }
      else{
        setShowAbout(!showAbout)
      }
    }

    const toggleLoader = () => {
      if(showLoader === false){
        setShowLoader(!showLoader)
      }
      else{
        setShowLoader(!showLoader)
        sessionStorage.setItem('load', true)
      }
    }
    
    useEffect(() =>{
      if(showAbout === false){
        gsap.fromTo('.gsapMain, .header, .footer', {opacity: 0}, {opacity: 1, duration:1, ease: "expo.out"})
      }
      else{
        gsap.fromTo('.gsapMain, .header, .footer', {opacity: 1}, {opacity: 0, duration: 1, ease: "expo.out"})
      }
    },[showAbout])
      


    useEffect(() => {
      const allImages = [
        "https://louismony.com/media/work/aides/banner.jpg",
        "https://louismony.com/media/work/aides/basicA.png",
        "https://louismony.com/media/work/aides/basicB.png",
        "https://louismony.com/media/work/aides/basicC.png",
        "https://louismony.com/media/work/aides/mac.png",
        "https://louismony.com/media/work/aides/title.png",
        "https://louismony.com/media/work/aides/trioMockup.png",
        "https://louismony.com/media/work/eqlips/banner.jpg",
        "https://louismony.com/media/work/eqlips/basicA.png",
        "https://louismony.com/media/work/eqlips/basicB.png",
        "https://louismony.com/media/work/eqlips/basicC.png",
        "https://louismony.com/media/work/eqlips/mac.png",
        "https://louismony.com/media/work/eqlips/title.png",
        "https://louismony.com/media/work/eqlips/trioMockup.png",
        "https://louismony.com/media/work/eventapp/banner.jpg",
        "https://louismony.com/media/work/eventapp/basicA.png",
        "https://louismony.com/media/work/eventapp/basicB.png",
        "https://louismony.com/media/work/eventapp/basicC.png",
        "https://louismony.com/media/work/eventapp/mac.png",
        "https://louismony.com/media/work/eventapp/title.png",
        "https://louismony.com/media/work/eventapp/trioMockup.png",
        "https://louismony.com/media/work/kia/banner.jpg",
        "https://louismony.com/media/work/kia/basicA.png",
        "https://louismony.com/media/work/kia/basicB.png",
        "https://louismony.com/media/work/kia/basicC.png",
        "https://louismony.com/media/work/kia/mac.png",
        "https://louismony.com/media/work/kia/title.png",
        "https://louismony.com/media/work/kia/trioMockup.png",
        "https://louismony.com/media/work/primeprono/banner.jpg",
        "https://louismony.com/media/work/primeprono/basicA.png",
        "https://louismony.com/media/work/primeprono/basicB.png",
        "https://louismony.com/media/work/primeprono/basicC.png",
        "https://louismony.com/media/work/primeprono/mac.png",
        "https://louismony.com/media/work/primeprono/title.png",
        "https://louismony.com/media/work/primeprono/trioMockup.png",
        "https://louismony.com/media/work/rolland/banner.jpg",
        "https://louismony.com/media/work/rolland/basicA.png",
        "https://louismony.com/media/work/rolland/basicB.png",
        "https://louismony.com/media/work/rolland/basicC.png",
        "https://louismony.com/media/work/rolland/mac.png",
        "https://louismony.com/media/work/rolland/title.png",
        "https://louismony.com/media/work/rolland/trioMockup.png",
      ]

      const loadImage = image => {
        return new Promise((resolve, reject) => {
          const loadImg = new Image()
          loadImg.src = image
          loadImg.onload = () => {
            resolve()
          }
          loadImg.onerror = err => {
            console.log(err);
            reject(err)
          }
        })
      }
  
      Promise.all(allImages.map(image => loadImage(image)))
      .then(() => {
        setIsLoading(false)
      })
      .catch(err => console.log("Failed to load images", err))
    }, [])
    
    return (
      <div>
        {
          isLoading ? 
            <div></div>
          :
          <div>
            <Component__Header toggleAboutFunction={toggleAbout}/>
            {location.pathname === "/hometest" ? <Component__Footer /> : null}
            <ComponentTransi />
            <Component__Cursor />
            {showLoader && location.pathname === '/' ? <Component__Loader toggleLoader={toggleLoader} /> : null }
            {showAbout ? <About toggleAboutFunction={toggleAbout}/> : null }

            <Routes location={location} key={location.pathname}>
              <Route path={'hometest'} element={<Homev2/>} />
              {projectsData.map((project, index) => (
                <Route key={index} path={project.path} element={<Work {...project.data} />}/>
              ))}
            </Routes>
          </div>
        }
        
      </div>
    );
}

export default App;

