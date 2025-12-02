const circle = [...document.getElementsByClassName("circle")];

let posx_mouse = 0;
let posy_mouse = 0;

window.addEventListener("mousemove", (e) => {
    const posx_mouse = e.clientX;
    const posy_mouse = e.clientY;

    const rot = Math.atan2(posy_mouse, posx_mouse) * 180 / Math.PI;
    
    circle.forEach((o) => {
        o.style.transform = "rotate("+rot+"deg)"
    });
})

