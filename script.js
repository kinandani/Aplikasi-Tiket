alert(`Aplikasi Tiket`)
const nama = prompt('masukkan nama : ')
const umur = prompt('masukkan umur : ')

if (umur <= 13) {
    alert(`Maaf, Anda belum cukup umur`)
}
else {
    const studio = prompt('Pilih studio A/B/C \N\nISI DENGAN HURUF KAPITAL!')
    if(studio == `A`){
    alert(`Tiket ${nama}, Studio A, Umur ${umur}`)
    }
    else if(studio == `B`){
        alert(`Tiket ${nama}, Studio B, Umur ${umur}`)
        }
    else if(studio == `C`){
        alert(`Tiket ${nama}, Studio C, Umur ${umur}`)
        }
}