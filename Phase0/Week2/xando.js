function xo(str) {
  // you can only write your code here!
  var x = str.search('x')
  var o = str.search('o')

  if (x = o) {
    return console.log(true)
  } else {
    return console.log(false)
  }
}

/*
TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
*/
