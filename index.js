
function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  } else {
    return fromN + sum(fromN + 1, toN);
  }
}

console.log(sum(1, 5));
// Expected output: 15

module.exports = sum;
