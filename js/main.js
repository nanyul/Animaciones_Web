// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    //smooth ScrollSmoother
    ScrollSmoother.create({
        smooth: 2,
        effects: true,
    });


    ////scrolling el robot se desplaza hacia la izquierda
    ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 1024px)": function () {
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
        },

        // Mobile
        "(max-width: 1023px)": function () {
            const robot = document.querySelector("#robot");
            const imageHeight = robot.offsetHeight;
            gsap.to("#robot", {
                scrollTrigger: {
                    trigger: "#seccion2",
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 1,

                },
                y: "200%",
                x: "-65%",
                ease: "power1.inOut",
                immediateRender: false,
            });
        },

        // Mobile
        "(max-width: 640px)": function () {
            const robot = document.querySelector("#robot");
            const imageHeight = robot.offsetHeight;
            gsap.to("#robot", {
                scrollTrigger: {
                    trigger: "#seccion2",
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 1,

                },
                y: "1%",
                x: "1%",
                ease: "power1.inOut",
                immediateRender: false,
            });
        },
    });


    //seccion 3 y 5
    ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 1024px)": function () {
            gsap.to("#robot", {
                scrollTrigger: {
                    trigger: "#seccion3",
                    start: "top bottom",
                    end: "center center",
                    scrub: 1,
                },
                y: "195%",
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
                y: "375%",
                x: "37%",
                ease: "power1.inOut",
                immediateRender: false,
            });
        },

        // Mobile
        "(max-width: 1023px)": function () {
            gsap.to("#robot", {
                scrollTrigger: {
                    trigger: "#seccion3",
                    start: "top bottom",
                    end: "center center",
                    scrub: 1,
                },
                y: "385%",
                x: "3%",
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
                y: "600%",
                x: "55%",
                ease: "power1.inOut",
                immediateRender: false,
            });
        },

        // Mobile
        "(max-width: 640px)": function () {
            gsap.to("#robot", {
                scrollTrigger: {
                    trigger: "#seccion3",
                    start: "top bottom",
                    end: "center center",
                    scrub: 1,
                },
                y: "600%",
                x: "3%",
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
                y: "1800%",
                x: "-65%",
                ease: "power1.inOut",
                immediateRender: false,
            });
        },
    });

});
