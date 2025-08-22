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