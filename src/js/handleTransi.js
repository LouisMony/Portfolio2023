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