import React, { useEffect, useRef, useState } from 'react'
import '../../style/Work.scss'

//COMPOSANT
import TitleWork from './TitleWork';
import DescriptionWork from './DescriptionWork';
import Gallery from './Gallery';
import Info from './Info';
import FooterWork from './FooterWork';


//JS
import { initLenis, fixHeight } from './helper/helper';

const Work = (props) => {
    const [isMobile, setIsMobile] = useState(null)

    useEffect(() =>{
        window.scrollTo(0, 0);
        initLenis()
        checkScreenSize()
        fixHeight()
        //HandleCursorAnimation()
    },[])

    useEffect(()=>{
        if(isMobile !== null){
            initAnimWorkPage()
        }
    },[isMobile])

   
    const checkScreenSize = () =>{
        if (window.matchMedia('(min-width: 768px)').matches) {
            setIsMobile(true)
        }
        else{
            setIsMobile(false)
        }
    }

    const initAnimWorkPage = () =>{
        //HandleWorkAnimation(isMobile)
    }

    return (
        <div className='work gsapMain' style={{
            backgroundImage: `url('/media/work/${props.directory}/banner.jpg')`
          }}>
            <div className='work__banner'>
                <div className='work__banner__content' >

                    <Info />
                    <TitleWork title={props.projectName}></TitleWork>
                </div>
            </div>
            <div className='work__spacer'></div>
            <DescriptionWork textContent={props.paraA} label={props.stack} />
            <Gallery />
            <div className='work__spacer'></div>
            <DescriptionWork textContent={props.paraA} label={'Context'} />
            {/* <VisitButton textContent={'Visit Website'} /> */}
            <div className='work__spacer'></div>
            <FooterWork />
        </div>
    )
}

export default Work
