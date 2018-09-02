//1. Melakukan Looping Menggunakan While

console.log('LOOPING PERTAMA')
var counterPertama = 0
while (counterPertama < 20) {
  counterPertama = counterPertama + 2
  console.log (counterPertama + ' ' + '-' + ' ' + 'I love coding')
}


console.log('LOOPING KEDUA')
var counterKedua = 20
var jumlah = 2
while (counterKedua >= 2) {
  console.log(counterKedua + ' ' + '-' + ' ' + 'I will become fullstack developer')
  counterKedua = counterKedua - jumlah
}

//2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA')
for (var counterPertama = 1; counterPertama <= 20; counterPertama++) {
  console.log(counterPertama + ' ' + '-' + ' ' + 'I love coding')
}

console.log('LOOPING KEDUA')
for (var counterKedua = 20; counterKedua >= 1; counterKedua--) {
  console.log(counterKedua + ' ' + '-' + ' ' + 'I will become fullstack developer')
}

//3. Angka Ganjil dan Genap

//1.
for (var counter = 1; counter <= 100; counter = counter + 1) {
  if ((counter % 2)===0) {
    console.log('GENAP')
  } else {
    console.log ('GANJIL')
  }
  {}
}

//2.

for (var counterAdd2 = 1; counterAdd2 <= 100; counterAdd2 = counterAdd2 + 2) {
  if ((counterAdd2 % 3)===0) {
    console.log('3 kelipatan 3')
  } else {
    console.log('')
  }
}
//3.

for (var counterAdd5 = 1; counterAdd5 <= 100; counterAdd5 = counterAdd5 + 5) {
  if ((counterAdd5 % 6)===0) {
    console.log('6 kelipatan 6')
  } else {
    console.log('')
  }
}

//4.
for (var counterAdd9 = 1; counterAdd9 <= 100; counterAdd9 = counterAdd9 + 9) {
  if ((counterAdd9 % 10)===0) {
    console.log('10 kelipatan 10')
  } else {
    console.log('')
  }
}
