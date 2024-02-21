alert(`Aplikasi Tiket!`)

var nama = prompt("Masukkan nama Anda:");

const umur = prompt("Masukkan umur Anda:");

if (umur > 13) {

    var studio = prompt("Anda boleh masuk studio. Pilih studio A, B, atau C:");

    if (studio === 'A' || studio === 'a') {
        alert(`Tiket ${nama}, studio A, Umur ${umur}`);
    } else if (studio === 'B' || studio === 'b') {
        alert(`Tiket ${nama}, studio B, Umur ${umur}`);
    } else if (studio === 'C' || studio === 'c') {
        alert(`Tiket ${nama}, studio C, Umur ${umur}`);
    } else {
        alert("Pilihan studio tidak valid!");
    } 
} else {
    alert(`Maaf ${nama}, Anda tidak boleh masuk studio karena umur Anda kurang dari 13 tahun.`);
}