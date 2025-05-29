import { gsap, ScrollTrigger } from "gsap/all";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);
gsap.registerPlugin(ScrollTrigger);

// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
    smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    normalizeScroll: true
});


let tl = gsap.timeline({
    scrollTrigger:{
      trigger: '.panel',
      start: "top center",
      end: "top 20%",
      pin: false,
      snap: 0.1,
      scrub: 0.3,
    }
});

tl.from('.panel', {
    scale: 1.1,
}).fromTo('.svg-plus-in svg', {
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    rotation: -70,
}, {
    opacity: 1,
    delay: 0.5,
    duration: 0.5,
    rotation: 0,
}, "-=60%")