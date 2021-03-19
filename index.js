//console.log('Sita');
/* console.log('Bekasi'); */
console.log('12 Juni 1999');
console.log('21');
console.log('CEO');


const Nama = prompt('Siapakah nama Anda?');
const asalDaerah = prompt('Darimanakah Anda berasal?');

const confirmedData = confirm('Apakah Semua Data, Sudah Anda Isi Dengan Benar?');
alert('Terimakasih Sudah Mengisi Form');

const biodata = {
    Nama: 'Sita',
    asalDaerah: 'Bekasi',
    tanggalLahir: '12 Juni 1999',
    umur: '21',
    posisiPekerjaan: 'CEO',
};
console.log(biodata);

const penjumlahan = 25 + 10;
const perkalian = 100 * 2;
const pembagian = 99 / 2;
const modulus = 99 % 2;

console.log(penjumlahan);
console.log(perkalian);
console.log(pembagian);
console.log(modulus);

// 1
const HR = 'HR'
const CTO = 'CTO'
const CEO = 'CEO'
const Programmer = 'Programmer'
const position = prompt('Pilih posisi pekerjaanmu dari ke 4 list ini HR/CTO/CEO/POGRAMMER?').toUpperCase();

position === HR ? console.log('Tugas saya untuk merekrut karyawan baru') : position === CTO ? console.log('Tugas saya sebagai pimpinan teknologi') : position === CEO ? console.log('Tugas saya sebagai Pimpinan') : position === PROGRAMMER ? console.log('Tugas saya sebagai seorang programmer') : console.log('Tidak ada posisi saya dalam perusahaan tersebut');

// 2
const nilai1 = Number(prompt('Masukan angka dari 1 - 100?'));
const nilai2 = Number(prompt('Masukan angka dari 1 - 100?'));
if (nilai1 < nilai2) {
    console.log('nilai 1 lebih kecil dari nilai 2');
} else if (nilai1 > nilai2) {
    console.log('nilai 1 lebih dari nilai 2');
} else if (nilai1 = nilai2) {
    console.log('nilai 1 sama dengan nilai 2');
} else {
    console.log('nilai 1 dan nilai 2 tidak bisa dibandingkan');
};

// 3
const hari = Number(prompt('Masukan angka dari 1 - 7 untuk mengetahui nama hari berdasarkan angka tersebut!'))
switch (hari) {
    case 1:
        alert('Hari Minggu')
        break;
    case 2:
        alert('Hari Senin')
        break;
    case 3:
        alert('Hari Selasa')
        break;
    case 4:
        alert('Hari Rabu')
        break;
    case 5:
        alert('Hari Kamis')
        break;
    case 6:
        alert('Hari Jumat')
        break;
    case 7:
        alert('Hari Sabtu')
        break;
    default:
        alert('Tidak ada hari untuk angka tersebut')
        break;
}

//4
const UP = 'UP';
const RIGHT = 'RIGHT';
const BOTTOM = 'BOTTOM';
const LEFT = 'LEFT';
const langkah = prompt('Masukan langkahmu! Pilih UP/RIGHT/BOTTOM/LEFT').toUpperCase();
switch (langkah) {
    case UP:
        alert('Karakter berjalan ke atas')
        break;
    case RIGHT:
        alert('Karakter berjalan ke kanan')
        break;
    case BOTTOM:
        alert('Karakter berjalan ke bawah')
    case LEFT:
        alert('Karakter berjalan ke kiri')
        break;
    default:
        alert('Karakter diam di tempat')
        break;
}