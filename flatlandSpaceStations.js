/*
Flatland is a country with a number of cities, some of which have space stations. 
Cities are numbered consecutively and each has a road of 1 km length connecting it to the next city. 
It is not a circular route, so the first city doesn't connect with the last city. 
Determine the maximum distance from any city to its nearest space station.

flatlandSpaceStations has the following parameter(s):

    int n: the number of cities
    int c[m]: the indices of cities with a space station

*/

function flatlandSpaceStations(n, c) {
  let maxDistance = 0;

  // Every city has a space station;
  if (n === c.length) {
    return maxDistance;
  }

  const sortedC = c.sort((a, b) => a - b);

  // Calculate distance from the first city to the first space station
  const firstDistance = sortedC[0] - 0;
  // Calculate distance from the last city to the last space station
  const lastDistance = n - 1 - sortedC[sortedC.length - 1];

  maxDistance = firstDistance > lastDistance ? firstDistance : lastDistance;

  // Calculate the middle sections. Between two space stations, find the longest distance from a city to a space station.
  for (let i = 0; i < sortedC.length - 1; i++) {
    let distance = Math.floor((sortedC[i + 1] - sortedC[i]) / 2);
    if (distance > maxDistance) {
      maxDistance = distance;
    }
  }
  return maxDistance;
}

console.log(flatlandSpaceStations(7, [1])); // 5
console.log(flatlandSpaceStations(5, [0, 4])); // 2
console.log(flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5])); // 0
console.log(flatlandSpaceStations(20, [13, 1, 11, 10, 6])); // 6
console.log(flatlandSpaceStations(20, [1, 6, 10, 11, 13])); // 6
console.log(flatlandSpaceStations(100, [93, 41, 91, 61, 30, 6, 25, 90, 97])); // 14
console.log(flatlandSpaceStations(100, [0, 1, 6, 98, 99])); // 46
