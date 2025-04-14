let container = document.querySelector('.container');

function createcircle(){
    let circle = document.createElement('div');
    circle.classList.add('circle');
    container.appendChild(circle);
}

for(let i = 0; i < 100; i++){
    createcircle();
}

gsap.to('.circle', {
    scale: 0.1,
    y: 40,
    duration: 0.5,
    opacity: 0,
    lazy: true,
    stagger: {
        amount: 0.5, 
        from: "edges",
        grid: [10, 10],
        yoyo: true,
        repeat: -1
    }
})