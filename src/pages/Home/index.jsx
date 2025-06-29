import { useEffect, useRef, useState } from "react";
import '../../style/Home.scss'
import { useNavigate } from "react-router-dom";

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

    const [slideToGo, setSlideToGo] = useState(0)
    const [activeItem, setActiveItem] = useState(0)
    const [title, setTitle] = useState(null)
    const [scrollInfo, setScrollInfo] = useState({
      id: null,
      length: 5
    })
    
    const handleClickTitle = () => {
      let activeClip = sliderItems.find(item => item.id === activeItem);
      naviguate('/work/'+activeClip.link)
    }

    const handleClickScooter = (number) => {
      if(number !== activeItem) setSlideToGo(number)
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
        
        <SwiperElement sliderItems={sliderItems} handleChangeSlide={handleChangeSlide} slideToGo={slideToGo}/>
        <Title title={title} handleClickTitle={handleClickTitle}/>
        <ScrollScooter scrollInfo={scrollInfo} handleClickScooter={handleClickScooter}/>
      </div>
    );
  }
  

  export default transition(Home);