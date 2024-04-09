function tampilkanPesan(id) {
    // Semua pesan diubah menjadi display none
    for (let i = 1; i <= 11; i++) {
        document.getElementById('pesan' + i).style.display = 'none';
    }
    
    // Pesan dengan ID yang diberikan diubah menjadi display block
    document.getElementById('pesan' + id).style.display = 'block';
}
