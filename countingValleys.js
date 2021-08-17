/*
An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps, for every step it was noted if it was an uphill, , or a downhill, step. Hikes always start and end at sea level, and each step up or down represents a

unit change in altitude. We define the following terms:

    A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
    A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

Given the sequence of up and down steps during a hike, find and print the number of valleys walked through. 
*/

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  let y = 0;
  let valleyTravel = 0;

  for (const i of path) {
    if (i === 'U') {
      y++;
    } else if (i === 'D') {
      // if we're at sea level
      if (y === 0) {
        valleyTravel++;
        y--;
      } else {
        y--;
      }
    }
  }
  return valleyTravel;
}

console.log(`Number of valleys traversed is ${countingValleys(8, 'UDDDUDUU')}`); // 1
console.log(
  `Number of valleys traversed is ${countingValleys(12, 'DDUUDDUDUUUD')}`
); // 2
