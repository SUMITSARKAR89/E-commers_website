
function mousOver(){
    document.querySelector(".head-b").style.color = "#242a01";

}
function mousOut(){
    document.querySelector(".head-b").style.color = "green";

}

function mouseOver(){
    document.querySelector(".head-c").style.color = "#dda26e";

}
function mouseOut(){
    document.querySelector(".head-c").style.color = "#edc198";

}

// this is for menu 

let menu = document.querySelector("#menu-icon");
let nav = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('open');
}