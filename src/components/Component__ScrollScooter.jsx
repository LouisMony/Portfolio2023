import React, { useState, useEffect } from 'react';

const Component__ScrollScooter = () => {
    const [totalPageLength, setTotalPageLength] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [percentScrolled, setPercentScrolled] = useState(0);

    const updateTotalPageLength = () => {
        const body = document.body;
        const bodyHeight = body.scrollHeight;
        setTotalPageLength(bodyHeight);
    };

    const handleScroll = () => {
        const body = document.body;
        const currentPosition = body.scrollTop || document.documentElement.scrollTop;
        setScrollPosition(currentPosition);
    };

    useEffect(() => {
        updateTotalPageLength();
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateTotalPageLength);

        return () => {
            window.removeEventListener('resize', updateTotalPageLength);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const newPercentScrolled = Math.round((scrollPosition / totalPageLength) * 100) + 22.9;
        setPercentScrolled(newPercentScrolled);
    }, [totalPageLength, scrollPosition]);

    const scrollScooterActiveStyle = {
        height: `${percentScrolled}%`,
    };

    return (
        <div className='scrollScooter'>
            <div className='scrollScooter__active' style={scrollScooterActiveStyle}></div>
        </div>
    );
};

export default Component__ScrollScooter;
