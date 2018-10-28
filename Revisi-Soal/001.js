/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan
- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap
- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62

// Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

RULE:
  - WAJIB menyertakan algoritma / pseudocode
  - Dilarang menggunakan .filter, .map, .reduce
*/

/*
1. Buat function bernama evenPairsSum dengan parameter 'str' yang argumennya berupa number
2. buat variabel berupa array dengan nilai kosong dengan nama 'pair'
3. ubah str menjadi tipe data array dengan .split
4. lakukan join pada str sehingga mencadi 2 pasangan angka dalam satu array
5. masukan nilai str pada variabel 'pair'
6. lakukan loop pada variabel 'pair' yang sudah di ubah nilainya menjadi array dari str
7. buat pengkodisian dengan kondisi jika angka yang ditampilkan pada proses looping pada 'pair' habis di bagi 2 maka lanjut ke step 7.a
  7.a jumlahkan semua nilai yang habis dibagi dua dan tampilkan sebagai output
8. jika angka terakhir pada pair tidak memiliki pasangan tambahkan nilai dgn index [0][0] seagai pasangannya
*/

function evenPairsSum (str) {
  var pair = []
  str.split(', ')
  pair.push(str)
  pair

  for (var i = 0; i < pair.length; i++) {

    }

console.log(evenPairsSum('2044101211'))


// console.log(evenPairsSum('2044101211')); // 86
// console.log(evenPairsSum('33791363')); // 0
// console.log(evenPairsSum('23426766201')); // 140
// console.log(evenPairsSum('2478201')); // 134
