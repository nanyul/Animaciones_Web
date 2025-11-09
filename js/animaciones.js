
if (document.querySelector(".fundamentos")) {
gsap.registerPlugin(ScrollTrigger);

// Header animación
gsap.from("header", { y: -80, opacity: 0, duration: 1, ease: "power2.out" });

// Animación de secciones al hacer scroll
gsap.utils.toArray(".demo-section").forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});

// Animación de títulos
gsap.utils.toArray(".fundamentos h2, .fundamentos h3, .fundamentos h4").forEach(title => {
    gsap.from(title, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});

// Animación de listas
gsap.utils.toArray(".sub-section ul").forEach(list => {
    gsap.from(list.children, {
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
            trigger: list,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});

// Hover avanzado en cajas (escala, rotación, sombra, cambio de color)
document.querySelectorAll(".demo-box").forEach(box => {
    box.addEventListener("mouseenter", () => {
        gsap.to(box, {
            scale: 1.3,
            rotation: 15,
            boxShadow: "0 8px 30px rgba(255,255,255,0.5)",
            background: "linear-gradient(45deg, #FF6B6B, #FFD93D)",
            duration: 0.4,
            ease: "power2.out"
        });
    });
    box.addEventListener("mouseleave", () => {
        gsap.to(box, {
            scale: 1,
            rotation: 0,
            boxShadow: "0 4px 15px rgba(255,255,255,0.1)",
            background: "linear-gradient(90deg, #E75C84, #FBB040)",
            duration: 0.4,
            ease: "power2.out"
        });
    });

    // Animación flotante ligera constante
    gsap.to(box, {
        y: 10,
        duration: 2 + Math.random(), // diferentes duraciones para cada caja
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });
});

// Duration demo
gsap.to("#duration-demo .demo-box:nth-child(1)", { x: 400, duration: 1.5, repeat: -1, yoyo: true, ease: "power1.inOut" });
gsap.to("#duration-demo .demo-box:nth-child(2)", { x: 400, duration: 3, repeat: -1, yoyo: true, ease: "power1.inOut" });

// Delay demo
gsap.to("#delay-demo .demo-box:nth-child(1)", { x: 400, duration: 2, repeat: -1, yoyo: true, delay: 0 });
gsap.to("#delay-demo .demo-box:nth-child(2)", { x: 400, duration: 2, repeat: -1, yoyo: true, delay: 0.5 });
gsap.to("#delay-demo .demo-box:nth-child(3)", { x: 400, duration: 2, repeat: -1, yoyo: true, delay: 1 });

// Easing demo
gsap.to("#easing-demo .demo-box:nth-child(1)", { x: 400, duration: 2, repeat: -1, yoyo: true, ease: "linear" });
gsap.to("#easing-demo .demo-box:nth-child(2)", { x: 400, duration: 2, repeat: -1, yoyo: true, ease: "bounce.out" });
gsap.to("#easing-demo .demo-box:nth-child(3)", { x: 400, duration: 2, repeat: -1, yoyo: true, ease: "back.inOut(1.7)" });

gsap.registerPlugin(ScrollTrigger);
}


if (document.querySelector(".principios")) {
// Animación de entrada del header
gsap.from("header", { y: -80, opacity: 0, duration: 1, ease: "power2.out" });

// Micro-interacción de clic
const microBtn = document.querySelector(".micro-btn");

microBtn.addEventListener("click", () => {
    // animación de rebote y color
    gsap.fromTo(microBtn,
        { scale: 1, rotate: 0 },
        {
            scale: 1.3,
            rotate: 3,
            duration: 0.25,
            ease: "back.out(2)",
            yoyo: true,
            repeat: 1
        }
    );

    // efecto de brillo radial detrás
    const flash = document.createElement("div");
    flash.classList.add("click-flash");
    microBtn.appendChild(flash);
    gsap.fromTo(flash,
        { scale: 0, opacity: 1 },
        { scale: 3, opacity: 0, duration: 0.6, ease: "power2.out", onComplete: () => flash.remove() }
    );

    microBtn.style.background = "linear-gradient(90deg,#FF7A00,#FF3D7F)";
    microBtn.textContent = "¡Listo!";
});

// Animaciones GSAP para cada principio
gsap.utils.toArray(".demo-card").forEach((card, i) => {
    gsap.from(card, {
        opacity: 0,
        y: 80,
        duration: 1,
        delay: i * 0.2,
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});

// Animaciones de los principios
gsap.to(".squash", { scaleY: 0.6, yoyo: true, repeat: -1, duration: 1, ease: "elastic.out(1,0.4)" });
gsap.to(".anticipacion", { x: 25, yoyo: true, repeat: -1, duration: 1.2, ease: "back.inOut(2)" });
gsap.to(".escena", { opacity: 0.4, repeat: -1, yoyo: true, duration: 2 });
gsap.to(".accion", { rotation: 15, repeat: -1, yoyo: true, duration: 1.5 });
gsap.to(".seguimiento", { x: 20, y: 10, repeat: -1, yoyo: true, duration: 1.8 });
gsap.to(".easing", { x: 40, repeat: -1, yoyo: true, duration: 2, ease: "power4.inOut" });
gsap.to(".arcos", { x: 50, y: -25, yoyo: true, repeat: -1, duration: 1.8, ease: "sine.inOut" });
gsap.to(".secundaria", { rotation: 10, scale: 1.1, repeat: -1, yoyo: true, duration: 1.4 });
gsap.to(".tiempo", { scale: 1.5, repeat: -1, yoyo: true, duration: 0.8, ease: "steps(3)" });
gsap.to(".exageracion", { scale: 1.6, repeat: -1, yoyo: true, duration: 1, ease: "bounce.out" });
gsap.to(".solido", { y: 15, repeat: -1, yoyo: true, duration: 1.4 });
gsap.to(".atractivo", { rotation: 5, scale: 1.2, repeat: -1, yoyo: true, duration: 1.5 });

// Interacción completa
const likeBtn = document.getElementById("like-btn");
const sparkle = document.getElementById("sparkle");
const contenedor = document.querySelector(".interaccion-completa");
contenedor.style.position = "relative";

likeBtn.addEventListener("click", () => {
    // Rebote y brillo
    gsap.fromTo(likeBtn,
        { scale: 1 },
        { scale: 1.4, duration: 0.2, ease: "back.out(3)", yoyo: true, repeat: 1 }
    );

    // Efecto de chispa dorada principal
    gsap.fromTo(sparkle,
        { opacity: 1, scale: 0 },
        { scale: 3, opacity: 0, duration: 1, ease: "power2.out" }
    );

    // Pequeñas partículas extra
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        contenedor.appendChild(particle);
        gsap.set(particle, {
            x: likeBtn.offsetLeft + likeBtn.offsetWidth / 2,
            y: likeBtn.offsetTop + likeBtn.offsetHeight / 2,
            scale: Math.random() * 0.5 + 0.5
        });
        gsap.to(particle, {
            x: `+=${(Math.random() - 0.5) * 200}`,
            y: `+=${(Math.random() - 0.5) * 200}`,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => particle.remove()
        });
    }

    // Cambia texto brevemente
    likeBtn.textContent = "💖 ¡Gracias!";
    setTimeout(() => likeBtn.textContent = "❤️ Me gusta", 1000);
});


// Scroll reveal de secciones
gsap.utils.toArray(".demo-section").forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});
}

 // Animación flotante del robot
const robot = document.getElementById("robot");

// Movimiento suave de flotación
gsap.to(robot, {
    y: 10,
    yoyo: true,
    repeat: -1,
    duration: 2,
    ease: "sine.inOut"
});

// Movimiento sutil con el mouse
document.addEventListener("mousemove", e => {
    gsap.to(robot, {
        x: e.clientX / 15,
        y: e.clientY / 20,
        duration: 1,
        ease: "power2.out"
    });
});