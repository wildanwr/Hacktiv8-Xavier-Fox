/*
1. Newton Second Law

STORE "m" with 600 value
STORE "a" with 2 value
STORE "ΣF" without any value

  CALCULATE "m" times "a"
  SET "ΣF" value with calculation result

DISPLAY "ΣF" by adding 'Newton' string
*/


/*
2. Tahun Kabisat

--ALGORITMA--
1. Buat variabel dengan nama 'year' dengan nilai berupa angka berapapun
2. Buat pengkondisian dengan kondisi berikut, Jika nilai pada 'tahun' habis di bagi 4 dan nilai pada 'tahun' tidak habis di bagi 100 maka lanjut ke langkah 2.a.
  2.a Tampilkan tipe data string 'Tahun Kabisat'
3. Jika nilai pada 'tahun' habis di bagi 4 dan nilai pada 'tahun' habis di bagi 100 dan nilai pada 'tahun' habis di bagi 400 maka lanjut ke langkah 3.a.
  3.a Tampilkan tipe data string 'Tahun Kabisat'
4. Jika nilai pada 'tahun' tidak memenuhi kondisi pada lankah 2 dan 3 maka lanjut ke langkah 4.a.
  4.a Tampilkan tipe data string 'Bukan Tahun Kabisat'


--PSEUDOCODE--
STORE "year" to any number

IF "year" mod 4 is equals to 0 and mod 100 not equals 0
  DISPLAY "leap year"
ELSE IF "year" mod 4 is equals to 0 and mod 100 equals to 0 and mod 400 equals to 0
  DISPLAY "leap year"
ELSE
  DISPLAY "not leap year"
*/


/*
3. Laundry Day
--ALGORITMA--
1. Buat variabel dengan nama 'jumlahPakaian' dengan nilai 0.
2. Buat perulangan menggunakan metode 'While' dengan kondisi pertama yaitu, batas nilai 'jumlahPakaian' pada perulangan adalah kurang dari sama dengan 20 dan diikuti kondisi kedua pada langka 2.a.
  2.a kondisi kedua adalah penambahan 1 pada nilai variabel 'jumlahPakaian' disetiap proses perulangannya.
3. Tampilkan tipe data string 'Mulai Mencuci!'


--PSEUDOCODE--
STORE "washClothes" with 0

WHILE "washClothes" less than equals 20
  ADD "washClothes" by 1

DISPLAY "washing time!"
*/


/*
4. Periksa Kuku
--ALGORITMA--
1. Buat variabel 'murid' dengan nilai true.
2. Buat perulangan menggunakan metode 'while' dengan kondisi pertama yaitu, batas perulangan pada murid adalah 40. dan kondisi kedua ada pada langkah 2.b.
  2.a Buat variabel 'kukuPanjang' dengan nilai true.
  2.b kondisi kedua adalah penambahan 1 perulangan pada variabel 'murid' di setiap proses perulangannya.
  2.c Buat pengkondisian dengan kondisi, jika nilai pada variabel 'murid' sama dengan true maka lanjut ke langkah 2.d.
    2.d Tampilkan tipe data string 'Dihukum'
  2.e Jika tidak memenuhi kondisi 2.c maka lanjut ke langkah 2.f.
    2.f Tampilan tipe data string 'Murid yang baik.'



--PSEUDOCODE--
STORE  "student" to true

WHILE "student" less than equals to 40
  STORE variable "longNails" with true value
  ADD "student" by 1
  IF "student" is equals to true
    DISPLAY "punished"
  ELSE
    DISPLAY "not punished"
*/
