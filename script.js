alert(`Aplikasi Tiket`)
const nama = prompt('masukkan nama : ')
const umur = prompt('masukkan umur : ')

if (umur <= 13) {
    alert(`Maaf, umur 13 tahun kebawah \n belum bisa masuk studio.`)
}
else {
    const studio = prompt('Pilih studio A/B/C \nISI DENGAN HURUF KAPITAL!')
    if(studio == `A`){
    alert(`Tiket ${nama}, Studio A, Umur ${umur} Tahun`)
    }
    else if(studio == `B`){
        alert(`Tiket ${nama}, Studio B, Umur ${umur} Tahun`)
        }
    else if(studio == `C`){
        alert(`Tiket ${nama}, Studio C, Umur ${umur} Tahun`)
        }
}
