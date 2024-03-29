import React from 'react';
import { motion } from 'framer-motion';
import '../style/StyleTransi.scss'

const transition = (OgComponent) => {
    return (props) => (
        <>
            <OgComponent {...props} />
            <motion.div  //BLANC
                className="slide-in"
                initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
                animate={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }} 
                exit={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                transition={{ duration:  1, ease: [0.72, 0, 0.23, 1] }}
            >
                <p className='Transi__P'>Louis mony - FOLIO 2024</p>
            </motion.div>
            <motion.div //BLANC
                className="slide-out"
                initial={{ clipPath :'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
                exit={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
                transition={{ duration:  .8, delay: 0.4 ,ease: [0.72, 0, 0.23, 1] }}
            >
                <p className='Transi__P'>Louis mony - FOLIO 2024</p>
                <motion.div
                    className="slide-out-scnd"
                    initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}
                    animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
                    transition={{ duration: 1.2, ease: [0.72, 0, 0.23, 1] }}
                />
            </motion.div>
            
        </>
    );
};

export default transition;
