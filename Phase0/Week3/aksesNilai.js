function balikString(arr) {
  var balik = ''
  for (var i = arr[0].length - 1; i >= 0; i--) {
    balik = balik + arr[0][i]
  }
  return balik
}

//test cases
console.log(balikString(['Hello World!']));
