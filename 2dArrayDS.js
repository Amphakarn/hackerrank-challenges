function extractArray(startX, startY, arr) {
  let subArr = [];

  for (let y = startY; y < startY + 3; y++) {
    for (let x = startX; x < startX + 3; x++) {
      // Push values in the subArr if x & y positions are in the hourglass shape
      if ((x < startX + 3 && y === startY)|| 
          (x === startX + 1 && y === startY + 1) || 
          (x < startX + 3 && y === startY + 2)) {
        subArr.push(arr[y][x]);
      }
    }
  }
  return subArr;
}

function calSum(arr) {
  const sum = (accumulator, currentValue) => accumulator + currentValue;
  return arr.reduce(sum);
}

function hourglassSum(arr) {
  let sum = 0;
  let highestSum = 0;
  for (let startY = 0; startY <= 3; startY++) {
    for (let startX = 0; startX <= 3; startX++) {
      sum = calSum(extractArray(startX, startY, arr));
      if ((sum > highestSum) || (startX === 0 && startY === 0)){
        highestSum = sum;
      }
    }
  }
  return highestSum;
}

console.log(
  hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
);

console.log(
  hourglassSum([
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
);

console.log(
  hourglassSum([
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5],
  ])
);

console.log(
  hourglassSum([
    [-1, 1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [-7, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0],
  ])
);
