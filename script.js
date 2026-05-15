const nama = [
    "RIZKY HARUN RAMADHAN",
    "ASEP SAEPUL RAHMAN",
    "TUBAGUS RAFA XAVIER",
    "APRILIA MAULIDA",
    "FARA ZAHRA NABILA",
    "ROVITA PUJI HARTANTI",
    "ASSYA AULIA",
    "VIRGA N FAJAR",
    "AMANDA DWI PUSPITASARI NUGROHO"
];

for (let i = 1; i <= 9; i++) {
    const semua = document.querySelectorAll(`.nama${i}`);

    semua.forEach(item => {
        item.innerHTML = nama[i - 1];
    });
}