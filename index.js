let box = document.querySelector(".box");
let circle = document.querySelector(".circle");
let rec = document.querySelector(".rectangle");

const slider = document.querySelector(".slider");
const progress = document.querySelector(".progress");
const label = document.querySelector(".label");

slider.addEventListener('input', function() {
    gsap.to(progress, {
        width: `${this.value}%`,
        duration: 0.2,
        onUpdate:  function(){
            label.textContent = `${Math.round(gsap.getProperty(progress , "width"))}%`;
        }
    });
});

gsap.to(box,
    {
        y: 200,
        rotation: 360,
        duration: 2.5,
        yoyo: true,
        // repeat:-1
    }
)
gsap.to(circle,
    {
    x: 0,
    y: 200,
    repeat: -1,
    yoyo:true, 
    duration: 2.5,
    ease: "bounce.out"
}
)

gsap.to(rec, {
    x: 200,
    y: -200,
    rotation: 360,
    // repeat: -1,
    yoyo: true,
    duration: 2.5
})

let bs = document.querySelector(".big_square");

gsap.to(bs, {
    x:200,
    // repeat:-1, This will repeat the animation infinitely
    repeat: -1,
    duration: 2.5,
    //delay: 2, It is for delaying the animation by seconds
    yoyo: true,
    // onComplete: () =>{
    //     alert("Animation completed!"); It will only work when the repeat is defined to finite.
    // }
    ease: "elastic.out"
})
