const valoresslider = document.querySelector(".values-slider");
const dot=document.querySelectorAll(".dot");
const rightAngle=document.querySelector(".fa-angle-right");
const leftAngle=document.querySelector(".fa-angle-left");

const cards= document.querySelectorAll(".value-card").length;
const cardwidth=valoresslider.scrollWidth/cards;
console.log("=>", cardwidth)


const scrollareas = {
    left: 0,
    middle: cardwidth*3,
    right: cardwidth*7,
};

valoresslider.addEventListener("scroll",function(){
    const left =valoresslider.scrollLeft;
    const scrollMax=valoresslider.scrollWidth - valoresslider.clientWidth;

    dot.forEach((d) => d.classList.remove("active"));

    const pixels=5;

    if(left<=pixels){
        dot[0].classList.add("active");
    }else if(left>pixels && left<scrollMax-pixels){
        dot[1].classList.add("active");     
    }else if(left>=scrollMax-pixels){
        dot[2].classList.add("active");  
    }
});

dot.forEach((d, area)=> {
    d.addEventListener("click",()=>{
        valoresslider.scrollLeft=
        scrollareas[area===0?"left":area===1?"middle":"right"];
    })
})

function moveRight(amount){
    console.log("=>ri", amount, valoresslider.scrollLeft)
    valoresslider.scrollLeft+=amount;
}

function moveLeft(amountLeft){
    valoresslider.scrollLeft+=amountLeft;
}

rightAngle.addEventListener("click", function(){
    // moveRight(600);
    moveRight(350);
})

leftAngle.addEventListener("click", function(){
    moveLeft(-350);
})