import React, { useEffect, useState } from "react";
import '../style/Homev2.scss'
import { useNavigate } from "react-router-dom";
//import { handleTransi } from "../js/handleTransi";

//COMPOSANT
import Slider from "./Home/Slider";
import Title from "./Home/Title";
import ScrollScooter from "./Home/ScrollScooter";
import { worklist } from "../js/worklist";


function Homev2(){
    const sliderItems = worklist
    console.log(worklist);

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
      let activeClip = sliderItems.items.find(item => item.order === activeItem);
      //handleTransi(naviguate, '/track/'+activeClip.id)
    }

    const handleChangeActiveItem = (id) => {
      setActiveItem(id)
    }

    return (
      <div className='Home2'>
        <Slider sliderItems={sliderItems} handleChangeActiveItem={handleChangeActiveItem} handleChangeTitle={handleChangeTitle} handleChangeScroll={handleChangeScroll}/>
        <Title title={title} handleClickTitle={handleClickTitle}/>
        <ScrollScooter scrollInfo={scrollInfo}/>
      </div>
    );
  }
  
  export default Homev2;