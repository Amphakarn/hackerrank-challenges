function rotLeft(a, d) {
  const rotSection = a.slice(0, d);
  const remSection = a.slice(d);
  return [...remSection, ...rotSection];
}

console.log(rotLeft([1, 2, 3, 4, 5], 4)); // [ 5, 1, 2, 3, 4 ]
console.log(rotLeft([41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51], 10)); // [ 77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84, 77 ]