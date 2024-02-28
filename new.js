let tl = gsap.timeline();


tl.from(".nav", {
    opacity: 0,
    delay: 0.4
})
tl.from(".nav h1, .nav h2, .nav i", {
    opacity: 0,
    duration: 0.4,
    delay: 0.3,
    stagger: 0.3,
    y: -50,
})
tl.from(".left h1, .right img", {
    y: 50,
    opacity: 0,
    duration: 0.4,
    delay: 0.3,
    stagger: 0.3
})
gsap.from(".page-2 .box1, .page-2 .box2, .page-2 .box3", {
    scale: 1.5,
    opacity: 0,
    duration: 0.7,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".page-2",
        scroller: "body",
        start: "top 50%"
    }
});


gsap.to(".page-3 img", {
    duration: 1,
    width: "100%",
    scrollTrigger: {
        trigger: ".page-3",
        scroller: "body",
        start: "top 0%",
        end:"top -100%",
        pin:true,
        scrub:2,
    }
});
gsap.to(".page-4 h1", {
    duration:4,
   transform:"translateX(-75%)",
   fontWeight: 600,
    scrollTrigger: {
        trigger: ".page-4",
        scroller: "body",
        start: "top 0%",
        // markers:true,
        start:"top 0",
        end:"top -200%",
        pin:true,
        scrub:3,
    }
});
