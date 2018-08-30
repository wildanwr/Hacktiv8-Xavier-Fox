var nama = 'Wildan';
var peran = 'Ksatria';

if (nama === 'Wildan' && peran === '') {
  console.log("Halo Wildan, Pilih peranmu untuk memulai game!");
} else if (nama === 'Wildan' && peran === 'Ksatria') {
  console.log("Selamat datang di Dunia Proxytia Wildan")
  console.log("Halo Ksatria Wildan, kamu dapat menyerang dengan senjatamu!");
} else if (nama === 'Wildan' && peran === 'Tabib') {
  console.log("Selamat datang di Dunia Proxytia Wildan")
  console.log("Halo Tabib Wildan, kamu akan membantu temanmu yang terluka.");
} else if (nama === 'Wildan' && peran === 'Penyihir') {
  console.log("Selamat datang di Dunia Proxytia Wildan")
  console.log("Halo Penyihir Wildan, ciptakan keajaiban yang membantu kemenanganmu!");
} else {
  console.log("Nama harus diisi!");
}
