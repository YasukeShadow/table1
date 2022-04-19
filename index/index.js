const nom = document.getElementById("nom");
const adresse = document.getElementById("adresse");
const colors = document.querySelectorAll(".colors");
const form = document.querySelector("form");
const buttons = document.querySelectorAll(".buttons");

const submit= document.getElementById("submit");

console.log(buttons)
colors.forEach( (color) => {
    color.style.backgroundColor = color.innerHTML;

})


buttons.addEventListener("click",()=>{
    
})