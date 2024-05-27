// let random = Math.random()
// console.log(random)

// let a = prompt("enter 1st no :")
// let b = prompt("enter 2snd no :")
// let c = prompt("enter operation :")

// let obj = {
//   "+": "-",
//   "/": "*",
//   "*": "+",
//   "-": "**",
// }

// if (random > 0.1) {
//     alert(`result is :${eval(`${a}  ${c} ${b}`)}`)
// } else {
//     c=obj[c]
//   alert(`result is :${eval(`${a}  ${c} ${b}`)}`)
// }

let random = Math.random();
console.log(random);

let a = parseFloat(prompt("Enter 1st number:"));
let b = parseFloat(prompt("Enter 2nd number:"));
let c = prompt("Enter operation:");

let obj = {
  "+": "-",
  "-": "+",
  "*": "/",
  "/": "*",
};

if (random <= 0.1) {
    c = obj[c];
    alert(`Result is: ${eval(`${a} ${c} ${b}`)}`);
} else {
    alert(`Result is: ${eval(`${a} ${c} ${b}`)}`);
}

