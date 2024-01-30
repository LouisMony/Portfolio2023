import React, { useEffect, useRef, useState } from "react";
import '../../style/Homev2.scss'
import { useNavigate } from "react-router-dom";
import { handleTransi } from "../../js/handleTransi";

//COMPOSANT
import Slider from "./Slider";
import Title from "./Title";
import ScrollScooter from "./ScrollScooter";
import { worklist } from "../../js/worklist";


function Home(){
    const homeRef = useRef(null)
    const sliderItems = worklist
    const naviguate = useNavigate()

    const [title, setTitle] = useState(null)
    const [scrollInfo, setScrollInfo] = useState({
      id: null,
      length: 6
    })
    const [activeItem, setActiveItem] = useState(0)

    const handleChangeTitle = (title) =>{
      setTitle(title)
    }
    
    const handleChangeScroll = (id, length) =>{
      setScrollInfo({
        id: id,
        length: length
      })
    }

    const handleClickTitle = () => {
      let activeClip = sliderItems.find(item => item.id === activeItem);
      handleTransi(naviguate, '/work/'+activeClip.link)
    }

    const handleChangeActiveItem = (id) => {
      setActiveItem(id)
    }

    return (
      <div ref={homeRef} className='Home2 gsapMain'>
        <Slider sliderItems={sliderItems} handleChangeActiveItem={handleChangeActiveItem} handleChangeTitle={handleChangeTitle} handleChangeScroll={handleChangeScroll}/>
        <Title title={title} handleClickTitle={handleClickTitle}/>
        <ScrollScooter scrollInfo={scrollInfo}/>
      </div>
    );
  }
  
  export default Home;