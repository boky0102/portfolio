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



container.onscroll = () => {
    var scrollPos = container.pageYOffset;
    console.log(scrollPos);
    background.style.backgroundColor = "#EAD2AC"
    circle.style.backgroundColor = "#EABA6B"
    separator.style.backgroundColor = "#EABA6B"
}