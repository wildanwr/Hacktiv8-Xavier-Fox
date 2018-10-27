function palindrome(kata) {
  var kataArr = []
  kataArr.push(kata)
  for (var i = kataArr[0].length - 1; i >= 0; i--) {
    return kataArr[0][i]
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
