function jumpingOnClouds(c) {
  let jump = 0;
  for (let i = 0; i < c.length - 1; i++) {
    if (c[i + 2] === 0) i += 1;
    jump++;
  }
  return jump;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])); // 4
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0])); // 3
console.log(jumpingOnClouds([0, 1, 0, 0, 0, 0, 0])); // 3
