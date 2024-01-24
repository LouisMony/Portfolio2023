import gsap from "gsap"

let transiIsRunning = false

export const handleTransi = (naviguate, dest) => {
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