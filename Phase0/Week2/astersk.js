//1.
var rows1 = 5
while (rows1 > 0) {
  console.log('*')
  rows1 = rows1 - 1
  }

//2.
var rows2;

for( rows2 = 5; rows2 > 0; rows2--){
  for(var column2 = 5; column2 > 0; column2--){
    console.log('*');
  }
console.log('');
}

//3.
var rows3 = 5
var counter = 0
while ( counter < rows3 ) {
  var temp = ''
  var counterDalam = 0
  while ( counterDalam <= counter) {
    temp = temp + '*'
    counterDalam = counterDalam + 1
    }
console.log(temp)
counter = counter + 1
}


