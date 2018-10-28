var nama;
var peran;

if (nama === '') {
  console.log('Nama harus diisi!')
} else {
  //DISINILAH SEMUA PROSES YANG TERJADI JIKA NAMA ADA ISINYA
  if (peran === '') {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!')
  } else {
    //DISINILAH PROSES YANG TERJADI JIKA NAMA ADA ISINYA DAN PERAN JUGA ADA ISINYA
    console.log('Selamat datang di dunia Proxytia, ' + nama)
    if (peran === 'Ksatria') {
      console.log('Halo Ksatria ' + nama + ', kamu bisa menyerang dengan senjatamu!')
    } else if (peran === 'Tabib') {
      console.log('Halo Tabib ' + nama + ', kamu bisa membantu temanmu yang terluka.')
    } else if (peran === 'Penyihir') {
      console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
    }
  }
}
