window.addEventListener("load", () => {
  // Hero Animations
  gsap.from(".hero-icons i", {
    opacity: 0,
    y: -30,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".hero-title", {
    opacity: 0,
    y: 30,
    delay: 0.6,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".hero-subtitle", {
    opacity: 0,
    y: 30,
    delay: 0.9,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".hero-link", {
    opacity: 0,
    delay: 1.3,
    duration: 1
  });
});

// About Role
gsap.from(".role-text h2", {
  scrollTrigger: "#role",
  x: -50,
  opacity: 0,
  duration: 1
});
gsap.from(".role-text p", {
  scrollTrigger: "#role",
  x: -30,
  opacity: 0,
  delay: 0.3,
  duration: 1
});
gsap.from(".role-image img", {
  scrollTrigger: "#role",
  x: 100,
  opacity: 0,
  duration: 1
});

// About Section
gsap.from(".about-image img", {
  scrollTrigger: "#about",
  x: -50,
  opacity: 0,
  duration: 1
});
gsap.from(".about-text", {
  scrollTrigger: "#about",
  x: 50,
  opacity: 0,
  duration: 1
});

// Skills
gsap.from(".skills-list li", {
  scrollTrigger: "#skills",
  opacity: 0,
  x: -30,
  stagger: 0.2,
  duration: 0.8
});

// Projects
gsap.from(".project-card", {
  scrollTrigger: "#projects",
  opacity: 0,
  y: 40,
  stagger: 0.2,
  duration: 1
});

// Resume
gsap.from(".resume h2, .resume-btn", {
  scrollTrigger: "#resume",
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2
});

// Contact
gsap.from(".contact h2, .contact p, .contact-icons a", {
  scrollTrigger: "#contact",
  opacity: 0,
  y: 20,
  duration: 0.8,
  stagger: 0.2
});
