import React, { useEffect, useRef, useState } from 'react';
import '../../style/Work.scss';

// COMPOSANT
import TitleWork from './TitleWork';
import DescriptionWork from './DescriptionWork';
import Gallery from './Gallery';
import Info from './Info';
import transition from '../../js/transition';
import FooterWork from './FooterWork';
import Component__Cursor from '../../components/Component__Cursor';
// JS
import { initLenis, fixHeight } from './helper/helper';

const Work = (props) => {
    const { data } = props;
    const { date, type, stack, projectName, demolink, directory, paraA, paraB, link, linkname } = data;

    const [isMobile, setIsMobile] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        initLenis();
        checkScreenSize();
        fixHeight();
    }, []);

    const checkScreenSize = () => {
        if (window.matchMedia('(min-width: 768px)').matches) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    return (
        <div className='work gsapMain' style={{
            backgroundImage: `url('/media/work/${directory}/banner.webp')`
        }}>
            <Component__Cursor />
            <div className='work__banner'>
                <div className='work__banner__content' >
                    <Info date={date} demolink={demolink} stack={stack} />
                    <TitleWork title={projectName}></TitleWork>
                </div>
            </div>
            <div className='work__spacer'></div>
            <DescriptionWork textContent={paraA} label={'Context'} />
            <Gallery directory={directory} />
            <div className='work__spacer'></div>
            <DescriptionWork textContent={paraA} label={'Context'} />
            <FooterWork directory={directory} nextLink={link} textLink={linkname}/>
        </div>
    );
};

// Enveloppez votre composant avec la fonction de transition ici
export default transition(Work);
