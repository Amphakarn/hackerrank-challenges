function hourglassSum(arr) {
  let sum = 0;
  let highestSum = 0;
  for (let row = 0; row <= 3; row++) {
    for (let col = 0; col <= 3; col++) {
      sum = arr[row][col] + arr[row][col + 1] + arr[row][col + 2];
      sum += arr[row + 1][col + 1];
      sum += arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2];

      if (sum > highestSum || (col === 0 && row === 0)) {
        highestSum = sum;
      }
    }
  }
  return highestSum;
}

console.log(
  `The highest hourglass sum is ${hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])}`
); // The highest hourglass sum is 19

console.log(
  `The highest hourglass sum is ${hourglassSum([
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])}`
); // The highest hourglass sum is 28

console.log(
  `The highest hourglass sum is ${hourglassSum([
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5],
  ])}`
); // The highest hourglass sum is -6

console.log(
  `The highest hourglass sum is ${hourglassSum([
    [-1, 1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [-7, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0],
  ])}`
); // The highest hourglass sum is 0
