let num = prompt("Enter a number!");


if (num >= 80 && num <= 100) {
    alert("A");
} else if (num >= 70 && num <= 89) {
    alert("B");
} else if (num >= 60 && num <= 69) {
    alert("C");
} else if (num >= 50 && num <= 59) {
    alert("D");
} else if (num >= 0 && num <= 49) {
    alert("F");
} else {
    alert("Invalid input!");
}

// if(num % 5 == 0){
//     alert("this number is divisible by 5");
// }
// else{
//     alert("this number is not divisible by 5");
// }