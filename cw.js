function cyclops(n) {
  const binary = n.toString(2).split("");
  const arr = [];

  if (binary.length % 2 === 0 || binary.length <= 1) {
    return false;
  }
  binary.map(e => {
    if (e === "0") {
      arr.push(e);
    }
  })

return binary[Math.floor((binary.length - 1) / 2)] === "0" && arr.length < 1

}

console.log(cyclops(13));
console.log(cyclops(23));
console.log(cyclops(27));
