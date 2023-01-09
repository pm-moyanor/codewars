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

// const reverseLetter = str => str.match(/[a-zA-Z]/g).reverse().join('')

//   console.log(reverseLetter("krishan"))
//   console.log(reverseLetter("ultr53o?n"))

/////////////////////////////////////////////////////////////


//   # Calculate the original price by dividing the sale price by the
//   # discount percentage and then multiplying by 100
//   original_price = sale_price / (1 - sale_percentage / 100)

//   # Round the original price to two decimal places
//   return round(original_price, 2)


// function discoverOriginalPrice(discountedPrice, salePercentage){

//     originalPrice = discountedPrice / (1 - salePercentage / 100)
//     return +(Math.round(num + "e+2")  + "e-2")
 
//   }

// console.log(discoverOriginalPrice(75,25))
// console.log(discoverOriginalPrice(25,73,75))


const consonantCount=(str) => {
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  let count = 0;
  for(const ch of str){
    if(consonants.includes(ch)){
      count += 1
    }
  }
  return count
  } 
//   if (str === ''){return 0}
//   let filtered = str.match(/[^aeiouAEIOU ,.]/g)

//   if(filtered === null ){return 0}
//   console.log(filtered)
//   return filtered.length
 



console.log(consonantCount('change'))
console.log(consonantCount("this noun is not checked"))
console.log(consonantCount ('impresive, but the first section brakes when clicked'))
console.log(consonantCount(''))
console.log(consonantCount('aaaa'))