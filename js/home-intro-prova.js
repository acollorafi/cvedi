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

  gsap.set([canopy, copy, title, subtitle, techline, scrollHint], {
    force3D: true,
    willChange: "transform, opacity"
  });

  gsap.set([title, subtitle, techline], {
    transformOrigin: "50% 50%"
  });

  const timeline = gsap.timeline({
    defaults: {
      ease: "none"
    },
    scrollTrigger: {
      trigger: intro,
      start: "top top",
      end: "+=95%",
      scrub: 0.35,
      fastScrollEnd: true,
      invalidateOnRefresh: true
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
        scale: 1.48,
        yPercent: 16,
        duration: 0.58
      },
      0
    )
    .to(
      subtitle,
      {
        scale: 1.16,
        yPercent: 10,
        duration: 0.54
      },
      0
    )
    .to(
      techline,
      {
        scale: 1.12,
        yPercent: 10,
        duration: 0.5
      },
      0
    )
    .to(
      canopy,
      {
        scale: 3.65,
        yPercent: -1,
        duration: 0.2
      },
      0
    )
    .to(
      vignette,
      {
        opacity: 0.1,
        duration: 0.38
      },
      0.04
    )
    .to(
      canopy,
      {
        opacity: 0,
        duration: 0.1
      },
      0.16
    )
    .to(
      scrollHint,
      {
        opacity: 0,
        yPercent: -12,
        duration: 0.1
      },
      0.04
    );
});
