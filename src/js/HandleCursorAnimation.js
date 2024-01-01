import gsap from "gsap"

export default function HandleCursorAnimation(){
    gsap.to('.cursor', {scale:1, mixBlendMode: "difference", duration: 0.5})
    document.querySelector('.cursor').classList.remove('activeCursor')

    const links = Array.from(document.querySelectorAll('.link_cursor'))
    links.forEach(link  => {
        link.addEventListener('mouseenter', function(){
            gsap.to('.cursor', {scale:7, mixBlendMode: "normal", duration: 0.5})
            document.querySelector('.cursor').classList.add('activeCursor')
        })
        link.addEventListener('mouseleave', function(){
            gsap.to('.cursor', {scale:1, mixBlendMode: "difference", duration: 0.5})
            document.querySelector('.cursor').classList.remove('activeCursor')
        })
    })
}