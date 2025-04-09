let box = document.querySelector(".box");
let circle = document.querySelector(".circle");
let rec = document.querySelector(".rectangle");

gsap.to(box,
    {
        x: 200,
        rotation: 360,
        duration: 5
    }
)

gsap.fromTo(circle, { x: 0, y:0 }, { x: 200, y:200, duration: 5 });

gsap.set(rec, { x:175, y:0})