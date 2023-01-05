// function cyclops(n) {
//   const binary = n.toString(2).split("");
//   const arr = [];

//   if (binary.length % 2 === 0 || binary.length <= 1) {
//     return false;
//   }
//   binary.map(e => {
//     if (e === "0") {
//       arr.push(e);
//     }
//   })

// return binary[Math.floor((binary.length - 1) / 2)] === "0" && arr.length < 1

// }

// console.log(cyclops(13));
// console.log(cyclops(23));
// console.log(cyclops(27));

/////////////////////////////////////////////////////////////

// function collatz(n) {
//   const sequence = [];

//   while (n > 1) {
//     n % 2 === 0 ? (n = n / 2) : (n = n * 3 + 1);
//     sequence.push(n);
//   }
//   return sequence.length + 1;
// }

// console.log(collatz(20)); //8
// console.log(collatz(15)); //18


/////////////////////////////////////////////////////////////

const reverseLetter = str => str.match(/[a-zA-Z]/g).reverse().join('')

  console.log(reverseLetter("krishan"))
  console.log(reverseLetter("ultr53o?n"))