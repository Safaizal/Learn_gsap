let box = document.querySelector(".box");
let circle = DocumentFragment.querySelector(".circle");

gsap.to([box, circle],
    {
        x: 200,
        rotation: 360,
        duration: 5
    }
)