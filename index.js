let box = document.querySelector(".box");
let circle = document.querySelector(".circle");
let rec = document.querySelector(".rectangle");

const slider = document.querySelector(".slider");
const progress = document.querySelector(".progress");
const label = document.querySelector(".label");

slider.addEventListener('input', function() {
    gsap.to(progress, {
        width: `${this.value}%`,
        duration: 0.5,
        onUpdate:  function(){
            label.textContent = `${Math.round(gsap.getProperty(progress , "width"))}%`;
        }
    });
});

gsap.to(box,
    {
        x: 200,
        rotation: 360,
        duration: 5
    }
)

gsap.fromTo(circle, { x: 0, y:0 }, { x: 200, y:200, duration: 5 });

gsap.set(rec, { x:0, y:0})