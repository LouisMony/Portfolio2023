import gsap from "gsap"

export const handleTransi = (naviguate, dest) => {
    try {
        const tl = new gsap.timeline();
        tl.set('.transi', { height: '100vh' });
        tl.set('.transi__line', { height: '0vh' });
        tl.fromTo('.transi__line', { height: '0vh' }, {
            height: '100vh',
            duration: 1,
            stagger: .04,
            ease: 'expo.out',
            onComplete: () => {
                window.scrollTo(0, 0);
                naviguate(dest);
            },
            
        });

        tl.fromTo('.transi__line', { height: '100%' }, {
            height: '0%',
            duration: 1,
            stagger: 0.04,
            ease: 'expo.inOut',
        });

        tl.set('.transi', { height: '0vh' });
    } catch (error) {
        console.error('An error occurred in handleTransi:', error);
    }
};

let transiIsRunning = false

export const handleTransiv2 = (naviguate, dest) => {
    if(!transiIsRunning){
        const globalEase = 'power3.inOut'
        try {
            transiIsRunning = true
            gsap.fromTo('.Transi',{clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"}, { clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1.2, ease: globalEase, onComplete: () => {
                
                gsap.fromTo('.Transi__scnd',{clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"}, { clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1.3, ease: globalEase} )
    
                gsap.fromTo('.Transi',{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}, { clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", duration: .9, delay: .4, ease: globalEase, onComplete: () => {
                    gsap.set('.Transi__scnd',{clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"})
                    gsap.set('.Transi',{clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"})
                    transiIsRunning = false
                }} )
    
                window.scrollTo(0, 0);
                naviguate(dest);
                
            }});
            
        } catch (error) {
            console.error('An error occurred in handleTransi:', error);
        }
    }
    
};