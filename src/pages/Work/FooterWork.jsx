import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleTransi } from '../../js/handleTransi';

const FooterWork = (props) => {
    const naviguate = useNavigate();

    return (
        <div className='work__footer'>
            <div className='work__footer__hover js_hoverable' onClick={() => handleTransi(naviguate, '/work/'+props.nextLink)} >
                <p>Next Project</p>
                <p className='work__footer__hover__name'>{props.textLink}</p>
            </div>
            <div className='work__footer__img'>
                <img className='nextImg' src="/media/work/primeprono/mockup_B.webp" alt="" />
            </div>
            
        </div>
    );
};

export default FooterWork;
