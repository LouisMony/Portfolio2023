import React, { useEffect, useRef, useState } from "react";
import '../../style/Homev2.scss'
import { useNavigate } from "react-router-dom";
import { handleTransi } from "../../js/handleTransi";

//COMPOSANT
import Title from "./Title";
import ScrollScooter from "./ScrollScooter";
import { worklist } from "../../js/worklist";
import transition from "../../js/transition";
import Component__Cursor from "../../components/Component__Cursor";
import SwiperElement from "./Swiper";

//SLIDER 



const Home = () => {
    const homeRef = useRef(null)
    const sliderItems = worklist
    const naviguate = useNavigate()

    const [activeItem, setActiveItem] = useState(0)
    const [title, setTitle] = useState(null)
    const [scrollInfo, setScrollInfo] = useState({
      id: null,
      length: 10
    })
    
    const handleClickTitle = () => {
      let activeClip = sliderItems.find(item => item.id === activeItem);
      naviguate('/work/'+activeClip.link)
    }

    const handleChangeSlide = (swiper) => {
      const activeIndex = swiper.activeIndex
      const totalSlides = swiper.slides.length;
      let newActiveItem = sliderItems.find(item => item.id === activeIndex);
      setTitle(newActiveItem.name)
      setScrollInfo({
        id: activeIndex,
        length: totalSlides
      })
      setActiveItem(activeIndex)
    }

    useEffect(() =>{
      setTitle(worklist[0].name)
    },[])

    return (
      <div ref={homeRef} className='Home2 gsapMain'>
        <Component__Cursor />
        
        <SwiperElement sliderItems={sliderItems} handleChangeSlide={handleChangeSlide}/>
        <Title title={title} handleClickTitle={handleClickTitle}/>
        <ScrollScooter scrollInfo={scrollInfo}/>
      </div>
    );
  }
  

  export default transition(Home);