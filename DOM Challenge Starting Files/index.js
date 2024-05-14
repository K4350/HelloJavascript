let h1  = document.querySelector("h1");
h1.innerText = h1.innerText + " Kaushik";

let checkBox = document.querySelector("button");
console.log(checkBox);
checkBox.style.color = "blue";

checkBox.addEventListener("click",function(){
    h1.innerText = " Button Clicked";
});




let divs = document.querySelectorAll(".list");

let num = 0;
for (let div of divs){
    div.innerText = `First line ${num}`;
    num++;
}
