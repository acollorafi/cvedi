document.addEventListener("DOMContentLoaded", () => {
  const page = document.body;
  const intro = document.querySelector(".home-intro-demo");

  if (!page.classList.contains("page-home-intro-prova") || !intro) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isDesktop = window.matchMedia("(min-width: 1200px)").matches;

  if (!window.gsap || !window.ScrollTrigger || prefersReducedMotion || !isDesktop) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const canopy = intro.querySelector(".home-intro-canopy");
  const copy = intro.querySelector(".home-intro-copy");
  const techline = intro.querySelector(".home-intro-techline");
  const vignette = intro.querySelector(".home-intro-vignette");
  const scrollHint = intro.querySelector(".home-intro-scroll");
  const title = copy.querySelector("h1");
  const subtitle = copy.querySelector(".hero-subtitle");

  const timeline = gsap.timeline({
    defaults: {
      ease: "none"
    },
    scrollTrigger: {
      trigger: intro,
      start: "top top",
      end: "bottom top",
      scrub: 0.8
    }
  });

  timeline
    .to(
      copy,
      {
        yPercent: 10,
        duration: 0.7
      },
      0
    )
    .to(
      title,
      {
        scale: 1.66,
        yPercent: 20,
        duration: 0.82
      },
      0
    )
    .to(
      subtitle,
      {
        scale: 1.28,
        yPercent: 14,
        duration: 0.78
      },
      0
    )
    .to(
      techline,
      {
        scale: 1.24,
        yPercent: 16,
        duration: 0.78
      },
      0
    )
    .to(
      canopy,
      {
        scale: 4.6,
        yPercent: -2,
        duration: 0.24
      },
      0
    )
    .to(
      vignette,
      {
        opacity: 0.12,
        duration: 0.55
      },
      0.08
    )
    .to(
      canopy,
      {
        opacity: 0,
        duration: 0.08
      },
      0.2
    )
    .to(
      scrollHint,
      {
        opacity: 0,
        yPercent: -18,
        duration: 0.12
      },
      0.08
    );
});
