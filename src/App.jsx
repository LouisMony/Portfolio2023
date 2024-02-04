//GENERAL
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

//COMP
import About from './pages/About';
import Component__Header from './components/Component__Header';
import Component__Cursor from './components/Component__Cursor';
import Component__Loader from './components/Component__Loader';
import Home from './pages/Home';
import Work from './pages/Work/Work';
//STYLE 
import './index.scss';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projectsData } from './js/worklist';
import { AnimatePresence } from 'framer-motion';



//jS 

function App(){
    const [showAbout, setShowAbout] = useState(false)
    const location = useLocation()

    const toggleAbout = (e) => {
      
      if(showAbout === false){
        e.stopPropagation()
        setShowAbout(!showAbout)
        
      }
      else{
        setShowAbout(!showAbout)
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
      
    return (
      <div>
          <Component__Header toggleAboutFunction={toggleAbout}/>
          <Component__Loader />

          {showAbout ? <About toggleAboutFunction={toggleAbout}/> : null }

          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home/>} />
              {projectsData.map((project) => (
                  <Route
                      key={project.path}
                      path={project.path}
                      element={<Work data={project.data} />} // Ensure data prop is passed here
                  />
              ))}
            </Routes>
          </AnimatePresence>
      </div>
    );
}

export default App;

