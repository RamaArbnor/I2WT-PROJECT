console.log("te lutem");
var dotEls = document.getElementsByClassName("cssProp");
var pointerEl = document.getElementById("pointer");
var pointerBEl = document.getElementById("pointerB");
var slidesEl = document.getElementById("slides");
var starterEl = document.getElementById("starter");
var footerEl = document.getElementsByClassName("footer");

console.log(dotEls);
console.log(footerEl);

function movePointer() {
    slidesEl.style.display = "block";
    pointerEl.style.display = "block";
    pointerBEl.style.display = "block";
    starterEl.style.display = "none";
    footerEl[0].style.top = 110 + "%";
    console.log("nonen ta ..");
    console.log("sasdfsdf");
    console.log(this.style.getPropertyValue("top"));
    console.log(window.getComputedStyle(this).top);
//    
    pointerEl.style.top = parseFloat(window.getComputedStyle(this).top) - 11 + "px";
    console.log(pointerEl.style.top);
    pointerBEl.style.top = parseFloat(window.getComputedStyle(this).top) - 11 + "px";
}
for (var i = 0; i < dotEls.length; i++){
    dotEls[i].addEventListener("click", movePointer);
}
var gifEls = document.getElementsByClassName("gifat");
console.log(gifEls);


function showGif1(){
    gifEls[0].style.display = "block";
    setTimeout(() => {
        gifEls[0].style.opacity = 100 + "%";
    }, 1);
    
}
function hideGif1(){
    gifEls[0].style.opacity = 0;
    setTimeout(() => {
        gifEls[0].style.display = "none";
    }, 200);   
}
function showGif2(){
    gifEls[1].style.display = "block";
    setTimeout(() => {
        gifEls[1].style.opacity = 100 + "%";
    }, 1);
    
}
function hideGif2(){
    gifEls[1].style.opacity = 0;
    setTimeout(() => {
        gifEls[1].style.display = "none";
    }, 200);   
}
function showGif3(){
    gifEls[2].style.display = "block";
    setTimeout(() => {
        gifEls[2].style.opacity = 100 + "%";
    }, 1);
    
}
function hideGif3(){
    gifEls[2].style.opacity = 0;
    setTimeout(() => {
        gifEls[2].style.display = "none";
    }, 200);   
}
function showGif4(){
    gifEls[3].style.display = "block";
    setTimeout(() => {
        gifEls[3].style.opacity = 100 + "%";
    }, 1);
    
}
function hideGif4(){
    gifEls[3].style.opacity = 0;
    setTimeout(() => {
        gifEls[3].style.display = "none";
    }, 200);   
}
function showGif5(){
    gifEls[4].style.display = "block";
    setTimeout(() => {
        gifEls[4].style.opacity = 100 + "%";
    }, 1);
    
}
function hideGif5(){
    gifEls[4].style.opacity = 0;
    setTimeout(() => {
        gifEls[4].style.display = "none";
    }, 200);   
}
function showGif6(){
    gifEls[5].style.display = "block";
    setTimeout(() => {
        gifEls[5].style.opacity = 100 + "%";
    }, 1);
    
}
function hideGif6(){
    gifEls[5].style.opacity = 0;
    setTimeout(() => {
        gifEls[5].style.display = "none";
    }, 200);   
}

dotEls[0].addEventListener("mouseover", showGif1);
dotEls[0].addEventListener("mouseleave", hideGif1);

dotEls[1].addEventListener("mouseover", showGif2);
dotEls[1].addEventListener("mouseleave", hideGif2);

dotEls[2].addEventListener("mouseover", showGif3);
dotEls[2].addEventListener("mouseleave", hideGif3);

dotEls[3].addEventListener("mouseover", showGif4);
dotEls[3].addEventListener("mouseleave", hideGif4);

dotEls[4].addEventListener("mouseover", showGif5);
dotEls[4].addEventListener("mouseleave", hideGif5);

dotEls[5].addEventListener("mouseover", showGif6);
dotEls[5].addEventListener("mouseleave", hideGif6);