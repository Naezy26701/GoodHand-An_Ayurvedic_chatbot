// locomotive and scrolltrigger js
function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locoScroll()

// navbarAnimation
function navbarAnimation(){
    gsap.to(".nav-part1 img",{
        transform:"translateY(-100%)",
        opacity: 0,
        scrollTrigger:{
            trigger: ".page1",
            scroller: ".main",
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    })
    
    gsap.to(".nav .nav-part2",{
        transform:"translateY(-100%)",
        opacity: 0,
        scrollTrigger:{
            trigger: ".page1",
            scroller: ".main",
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    })
}
navbarAnimation()


// loadingAnimation
function loadingAnimation(){
    gsap.from(".page1 h1", {
        y:100,
        opacity: 0,
        delay: 0.6,
        duration: 0.9,
        stagger: 0.2
    })
    gsap.from(".page1 h2", {
        y:100,
        opacity: 0,
        delay: 0.7,
        duration: 0.9,
        stagger: 0.2
    })
    gsap.from(".page1 p", {
        y:100,
        opacity: 0,
        delay: 0.8,
        duration: 0.9,
        stagger: 0.2
    })
 
}

gsap.to(".main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})


loadingAnimation()

//mouse cursor animations
Shery.mouseFollower();
//logo animation
Shery.makeMagnet(".magnet");

