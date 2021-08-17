function similarStrings(s, t) {
  let finalResult = '';
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let currentS = s[i];
    let currentT = t[i];

    if (currentS.length === currentT.length) {
      currentS = currentS.split('');
      currentT = currentT.split('');

      for (let j = 0; j < currentS.length; j++) {
        console.log(currentS[j]);
        let countMatchedS = currentS.filter((ch) => ch === currentS[j]).length;
        console.log('S: ', countMatchedS);

        let countMatchedT = currentT.filter((ch) => ch === currentS[j]).length;
        console.log('T: ', countMatchedT);

        currentS = currentS.filter((ch) => ch !== currentS[j]);
        // currentT = currentT.filter((ch) => ch !== currentS[j]);

        j = 0;

        Math.abs(countMatchedS - countMatchedT) <= 3
          ? result.push('yes')
          : result.push('no');
      }
    } else {
      result.push('no');
    }

    finalResult += result.includes('no')
      ? `s[${i}] is NOT similar to t[${i}]. `
      : `s[${i}] is SIMILAR to t[${i}]. `;
  }
  return finalResult;
}

// function countChar(strS, strT) {
//   const arrS = strT.split('');
//   console.log(arrS);
//   arrSort = arrS.sort((a, b) => a.attr.localeCompare(b.attr));
//   console.log(arrSort);
// }

// console.log(
//   'Final Results: \n',
//   similarStrings(['aaabbccc', 'aaaabb'], ['aabbbbaa', 'bbbbcc'])
// );

console.log(
  'Final Results: \n',
  similarStrings(['aaabcdef', 'aaaabb'], ['aabggggg', 'bbbbcc'])
);

/*
function containsCommonSubstring(a, b) {
  // Since a one character common substring is still a substring, we can just check for
  // a character in common.  A map should be easy way to do that.
  var map = {};
  for (var i = 0; i < a.length; i++) {
    // We could count it, but just having an entry should be sufficient.  Seems like a boolean.
    map[a[i]] = true;
  }
  for (var i = 0; i < b.length; i++) {
    if (map[b[i]]) return true;
  }
  return false;
}

function processData(input) {
  var lines = input.split('\n');
  console.log(lines);
  var T = lines[0];
  console.log(T);
  for (var i = 0; i < T; i++) {
    var a = lines[2 * i + 1];
    var b = lines[2 * i + 2];
    if (containsCommonSubstring(a, b)) {
      process.stdout.write('YES\n');
    } else {
      process.stdout.write('NO\n');
    }
  }
}

// console.log(processData('aaabcdef', 'aabggggg'));

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function (input) {
  _input += input;
});

process.stdin.on('end', function () {
  processData(_input);
});
*/
