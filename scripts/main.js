
//this makes a really funny broken animation
// gsap.from("*", {
//     duration: 2, 
//     x: -200,
//     stagger: 0.5
// });

//makes my name and the page name slide in from off the screen. Isn't too busy.
gsap.from("h1", {
    duration: 2, 
    x: -200,
    stagger: 0.5,
    ease: "none"
});


//it makes each item fade in from below.
//looks cool, but also is busy and really laggy/choppy.
// gsap.from("#portfolioItemsLeft li", {
//     duration: 2,
//     opacity: 0, 
//     y: 200,
//     stagger: 2,
//     ease: "none"
// });

// gsap.from("#portfolioItemsRight li", {
//     delay: 1,
//     duration: 2, 
//     opacity: 0, 
//     y: 200,
//     stagger: 2,
//     ease: "none"
// });