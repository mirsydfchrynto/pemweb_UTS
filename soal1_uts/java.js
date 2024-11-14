// Menampilkan alert ketika halaman diakses
window.onload = function() {
    alert("Selamat Datang di Website Tebing Breksi Jogja!");
  };
  
  // Menampilkan alert setelah form pemesanan dikirimkan
  document.querySelector(".form-section form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form untuk tujuan demo
    alert("Terima kasih! Pesanan tiket Anda telah diterima.");
    // this.submit(); // Melanjutkan pengiriman form setelah alert ditampilkan
  });
  