import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleTransi } from '../../js/handleTransi';

const FooterWork = (props) => {
    const [popUpBloc, setPopUpBloc] = useState([]);
    const naviguate = useNavigate();
    const [intervalId, setIntervalId] = useState(null);

    const handleMouseEnter = () => {
        setPopUpBloc([]);
        const id = setInterval(() => {
            if (popUpBloc.length === 10) {
                console.log('oups');
                setPopUpBloc(prevPopUps => prevPopUps.slice(1));
            }

            const newPopUp = (
                <div
                    className='work__footer__popUp'
                    key={Date.now()}
                    style={{
                        top: `${Math.random() * 100}%`, // Random top position
                        left: `${Math.random() * 100}%`, // Random left position
                    }}
                >
                   
                </div>
            )
            setPopUpBloc(prevPopUps => [...prevPopUps, newPopUp]);
        }, 300);

        setIntervalId(id);
    };

    const handleMouseLeave = () => {
        console.log('je sors');
        setPopUpBloc([]);
        clearInterval(intervalId);
    };

    useEffect(() => {
        // Clear interval when the component is unmounted
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [intervalId]);

    return (
        <div className='work__footer'>
            <div className='work__footer__hover js_hoverable' onClick={() => handleTransi(naviguate, '/work/'+props.nextLink)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <p>Next Project</p>
                <p className='work__footer__hover__name'>{props.textLink}</p>
            </div>

            {popUpBloc.map(popUp => popUp)}

            <a className='work__footer__link' href="mailto:louis.mony2@gmail.com">
                <span>Contact ME</span>
            </a>
        </div>
    );
};

export default FooterWork;
