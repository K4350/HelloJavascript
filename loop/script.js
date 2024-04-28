let num = parseInt(prompt("Enter a number")); // Parse the input as an integer

let sum = 0;
for (let i = 1; i <= num; i++) {
    sum += i;
}

alert("The sum is " + sum);