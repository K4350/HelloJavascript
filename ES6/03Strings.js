//Reverse A string using ES6 Arrow Function

// let reverseString = name => {
//     let str = "";
//     for(let i = name.length - 1; i >= 0; i--){
//         str = str + name[i];
//     }
//     return str;
// }

// let name = "Kaushik Baruah";
// console.log(`The reverse of ${name} is ${reverseString(name)}`);



// Palindrome String using ES6 Arrow Function

let isPalindrome = name => {
    let str = "";
    for(let i = name.length - 1; i >= 0; i--){
        str = str + name[i];
    }

    return name ===str ? "palindrome" : "NotPalindrome";
}

let name = "madam";
console.log(`The ${name} is a ${isPalindrome(name)} word`);