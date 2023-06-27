const fan = document.getElementById("fan")
const bone = document.getElementById("bone")
const skull = document.getElementById("skull")
const pizza = document.getElementById("pizza")
const drop = document.getElementById("drop")
const dragon = document.getElementById("dragon")

// e1.addEventListener("click", function() {
//     setTimeout(animateEarrings(), 1000)
// })

setInterval(animateEarrings1, 1000);
setInterval(animateEarrings2, 3000);
setInterval(animateEarrings3, 2000);
setInterval(animateEarrings4, 4000);
setInterval(animateEarrings5, 1000);
setInterval(animateEarrings6, 3000);
setInterval(animateEarrings7, 2000);
setInterval(animateEarrings8, 4000);
setInterval(animateEarrings9, 1500);
setInterval(animateEarrings10, 3200);
setInterval(animateEarrings11, 3200);
setInterval(animateEarrings12, 5200);


function animateEarrings1() {
    fan.style.transform = "scale(1.1)";
}

function animateEarrings2() {
    fan.style.transform = "scale(1)";
}

function animateEarrings3() {
    bone.style.transform = "rotate(35deg)";
}

function animateEarrings4() {
    bone.style.transform = "rotate(0deg)";
}

function animateEarrings5() {
    skull.style.transform = "rotate(-30deg)";
}

function animateEarrings6() {
    skull.style.transform = "rotate(0deg)";
}

function animateEarrings7() {
   pizza.style.transform = "scale(1.1)";
}

function animateEarrings8() {
    pizza.style.transform = "scale(1)";
}

function animateEarrings9() {
   drop.style.transform = "scale(1.1)";
}

function animateEarrings10() {
    drop.style.transform = "scale(1)";
}

function animateEarrings11() {
   dragon.style.transform = "rotate(-45deg)";
}

function animateEarrings12() {
    dragon.style.transform = "rotate(45deg)";
}
