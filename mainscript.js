console.log("Skripta radi");


const container = document.getElementsByClassName('content')[0];

const background = document.getElementById("landing-section");

const circle  = document.getElementsByClassName("circ")[0];

const work = document.getElementById("work-section")

const workBtn = document.getElementById("work-button")

const separator = document.getElementsByClassName("separator")[0];

workBtn.onclick = () => {
    console.log("Clicked")
    work.scrollIntoView(({behavior: "smooth", block: "end"}))
}

var currentColorIndex = 1;

const colors = [
    {
        background: "#EAD2AC",
        circle: "#EABA6B"
    },
    {
        background: "#2DC7FF",
        circle: "#EAD2AC"
    },
    {
        background: "#EAD2AC",
        circle: "#2DC7FF"
    }
]



container.onscroll = () => {

    background.style.backgroundColor = colors[0].background;
    circle.style.backgroundColor = colors[0].circle;
    separator.style.backgroundColor = colors[0].circle;
        
}

