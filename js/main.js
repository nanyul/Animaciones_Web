// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    //smooth ScrollSmoother
    ScrollSmoother.create({
        smooth: 2,
        effects: true,
    });


    ////scrolling el robot se desplaza hacia la izquierda
    gsap.to("#robot", {
        scrollTrigger: {
            trigger: "#seccion2",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,

        },
        y: "110%",
        x: "-25%",
        ease: "power1.inOut",
        immediateRender: false,
    });


    gsap.to("#robot", {
        scrollTrigger: {
            trigger: "#seccion3",
            start: "top bottom",
            end: "center center",
            scrub: 1,
        },
        y: "216.5%",
        x: "2%",
        ease: "power1.inOut",
        immediateRender: false,
    });




    gsap.to("#robot", {
        scrollTrigger: {
            trigger: "#seccion5",
            start: "top bottom",
            end: "center center",
            scrub: 1,
            
        },
        y: "420%",
        x: "37%",
        ease: "power1.inOut",
        immediateRender: false,
    });
    
});
    