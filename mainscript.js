console.log("Skripta radi");


const container = document.getElementsByClassName('content')[0];

const background = document.getElementById("landing-section");


container.onscroll = () => {
    background.background.style.backgroundColor = "#EABA6B"
}