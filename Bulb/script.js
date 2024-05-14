let bulb = document.querySelector("#bulb");
let button = document.querySelector("button");
let isYellow = false;

console.log(button)

button.addEventListener("click",function(){
    if (isYellow) {
        bulb.style.backgroundColor = "white";
        button.innerHTML = "OFF"
    } else {
        bulb.style.backgroundColor = "yellow";
        button.innerHTML = "ON"
    }
    
    // Update the color state
    isYellow = !isYellow;
})