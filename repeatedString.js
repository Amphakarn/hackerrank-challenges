function repeartedString(s, n) {
  const regex = /a/g;

  // Count number of 'a' in n (not include remainder)
  const counta = (s.match(regex) || []).length * Math.floor(n / s.length);

  const remainder = n % s.length;

  // Count number of 'a' in the remainder
  const countRemain = (s.substring(0, remainder).match(regex) || []).length;

  return counta + countRemain;
}

console.log(repeartedString('aba', 10)); // 7
console.log(repeartedString('ceebbcb', 1000)); // 0
console.log(repeartedString('aab', 882787)); // 588525
console.log(repeartedString('gfcaaaecbg', 547602)); // 164280
console.log(repeartedString('jdiacikk', 899491)); // 112436
console.log(
  repeartedString(
    'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm',
    736778906400
  )
); // 51574523448
console.log(
  repeartedString(
    'epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq',
    549382313570
  )
); // 16481469408

console.log(
  repeartedString(
    'ojowrdcpavatfacuunxycyrmpbkvaxyrsgquwehhurnicgicmrpmgegftjszgvsgqavcrvdtsxlkxjpqtlnkjuyraknwxmnthfpt',
    685118368975
  )
); // 41107102139
