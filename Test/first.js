let reverseString = name => {
    let str = "";
    for(let i = name.length - 1; i >= 0; i--){
        str = str + name[i];
    }
    return str;
}

let name = prompt("Enter Your name");

console.log(`The reverse of ${name} is ${reverseString(name)}`);