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
    },[])
   
    const checkScreenSize = () =>{
        if (window.matchMedia('(min-width: 768px)').matches) {
            setIsMobile(true)
        }
        else{
            setIsMobile(false)
        }
    }

    useEffect(()=>{

    },[props])

    return (
        <div className='work gsapMain' style={{
            backgroundImage: `url('/media/work/${props.directory}/banner.jpg')`
          }}>
            <div className='work__banner'>
                <div className='work__banner__content' >
                    <Info date={props.date} demolink={props.demolink} stack={props.stack} />
                    <TitleWork title={props.projectName}></TitleWork>
                </div>
            </div>
            <div className='work__spacer'></div>
            <DescriptionWork textContent={props.paraA} label={props.stack} />
            <Gallery directory={props.directory} />
            <div className='work__spacer'></div>
            <DescriptionWork textContent={props.paraA} label={'Context'} />
            {/* <VisitButton textContent={'Visit Website'} /> */}
            <FooterWork nextLink={props.link} textLink={props.linkname}/>
        </div>
    )
}

export default Work
