function vowelCOunt(x) {
  let count = 0;
  for (let v of x) {
    if (v === "a" || v === "e" || v === "i" || v === "o" || v === "u") {
      count++;
    }
  }
  console.log(count);
}

// The includes() method checks if the character v is present in the string "aeiou".
function vowel(x) {
  let count = 0;
  for (let v of x) {
    if ("aeiou".includes(v)) {
      count++;
    }
  }
  console.log(count);
}

// Arrow Function


const vowelArrow = x => {
    let count = 0;
    for (let v of x) {
      if ("aeiou".includes(v)) {
        count++;
      }
    }
    console.log(count);
  };
  

// filter the toppers from an Array

let marks = [33,97,65,96,86];

let toppers = marks.filter((val) => {
    return val>90;
})
console.log(toppers);