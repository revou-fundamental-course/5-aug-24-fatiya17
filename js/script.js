 //             fungsi hitung           //

function hitungBMI() {
    
    const berat = parseFloat(document.getElementById('beratbadan').value);
    const tinggi = parseFloat(document.getElementById('tinggibadan').value) / 100;
    const usia = parseInt(document.getElementById('usia').value);
    const jeniskelamin = document.getElementById('jeniskelamin').value;
    const saranD = 'Saran untuk anda'
    const peringatanD = 'Peringatan !'

    // Pengecekan apakah semua input telah diisi
    if (isNaN(berat) || isNaN(tinggi) || isNaN(usia) || jeniskelamin === '') {
        alert('Harap isi semua data');
        return;  // Hentikan eksekusi fungsi jika ada input yang kosong
    }
    // Rumus BMI
    const bmi = berat / (tinggi * tinggi);

    let kategori, deskripsi;

    // Kondisi BMI
    if (bmi < 18.5) {
        kategori = "Kurang";
        deskripsi = "Anda berada dalam kategori underweight atau berat badan kurang.";
        saran = "Yuk, tambah berat badan dengan makan lebih sering dan pilih makanan bergizi. Coba konsultasi ke ahli gizi untuk tips yang pas buat kamu."
        peringatan = "Berat badan kurang bisa bikin kamu rentan kena masalah kesehatan, seperti anemia dan daya tahan tubuh yang lemah. Yuk, jaga kesehatan dengan pola makan yang lebih baik!"
        
    } else if (bmi >= 18.5 && bmi < 25) {
        kategori = "Ideal";
        deskripsi = "Anda berada dalam kategori normal.";
        saran = "Mantap, berat badan kamu ideal! Tetap jaga pola makan sehat dan rajin bergerak biar selalu fit."
        peringatan = "Berat badan kamu sudah ideal, tapi jangan lengah! Terus jaga pola hidup sehat biar terhindar dari penyakit, seperti diabetes dan penyakit jantung."
    
    } else if (bmi >= 25 && bmi < 30) {
        kategori = "Lebih";
        deskripsi = "Anda berada dalam kategori overweight atau berat badan berlebih.";
        saran = "Mulai kurangi porsi makan dan pilih makanan yang lebih sehat. Tambah aktivitas fisik biar berat badan turun dan badan lebih bugar."
        peringatan = "Hati-hati, berat badan berlebih bisa meningkatkan risiko penyakit serius, seperti tekanan darah tinggi dan diabetes. Yuk, mulai hidup sehat sebelum terlambat!"
    
    } else if (bmi >= 30 && bmi < 1000) {
        kategori = "Obesitas";
        deskripsi = "Anda berada dalam kategori obesitas.";
        saran = "Saatnya fokus nurunin berat badan! Makan lebih sehat dan olahraga teratur. Konsultasi ke dokter untuk bantuan lebih lanjut."
        peringatan = "Obesitas itu serius! Bisa meningkatkan risiko penyakit berbahaya, seperti penyakit jantung, diabetes, dan stroke. Saatnya ambil tindakan untuk kesehatan kamu!"
    }

    // Menangkap ID
    document.getElementById('bmi-hasil').textContent = bmi.toFixed(1);
    document.getElementById('kategori').textContent = kategori;
    document.getElementById('bmi-deskripsi').textContent = deskripsi;
    document.getElementById('saran').textContent = saran;
    document.getElementById('peringatan').textContent = peringatan;
    document.getElementById('bmi-gender').textContent = 'Jenis kelamin : ' + jeniskelamin
    document.getElementById('saran-hide').textContent = saranD
    document.getElementById('peringatan-hide').textContent = peringatanD
    document.getElementById('hasil-bmi').scrollIntoView({ behavior: 'smooth' });
}



//                  fungsi reset              //
function resetForm() {
    document.getElementById('beratbadan').value = '';
    document.getElementById('usia').value = '';
    document.getElementById('tinggibadan').value = '';
    document.getElementById('bmi-hasil').textContent = '00.00';
    document.getElementById('kategori').textContent = '';
    document.getElementById('bmi-gender').textContent = '';
    document.getElementById('bmi-deskripsi').textContent = '';
    document.getElementById('saran').textContent = '';
    document.getElementById('peringatan').textContent = '';
    document.getElementById('saran-hide').textContent = 'Saran dan peringatan';
    document.getElementById('peringatan-hide').textContent = '';
}
