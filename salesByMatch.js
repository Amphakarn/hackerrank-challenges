'use strict';

function sockMerchant(n, ar) {
  const sortedArr = ar.sort((a, b) => a - b);
  let pairs = 0;
  for (let i = 0; i < n - 1; i++) {
    if (ar[i] === ar[i + 1]) {
      pairs++;
      i++;
    }
  }
  return pairs;
}

console.log(
  `Number of pairs = ${sockMerchant(9, [1, 2, 1, 2, 1, 3, 2, 1, 3])}`
); // Number of pairs = 4

console.log(
  `Number of pairs = ${sockMerchant(9, [1, 2, 1, 4, 1, 3, 6, 1, 5])}`
); // Number of pairs = 2
