const client = require("../../config/connection");

const insertBarangNota = (kode_nota, kode_barang, jml_barang, harga_satuan, jumlah, callback) => {
    const query = 
        "INSERT INTO barangnota (kode_nota, kode_barang, jml_barang, harga_satuan, jumlah) VALUES($1, $2, $3, $4, $5)";
    const values = [kode_nota, kode_barang, jml_barang, harga_satuan, jumlah];
    client.query(query, values, callback);
}

const updateBarangNota = (kode_nota, kode_barang, jml_barang, harga_satuan, jumlah, kode_barang_nota, callback) => {
    const query =
      "UPDATE barangnota SET kode_nota = $1,  kode_barang = $2, jml_barang = $3, harga_satuan = $4, jumlah = $5 WHERE kode_barang_nota = $6";
    const values = [kode_nota, kode_barang, jml_barang, harga_satuan, jumlah, kode_barang_nota];
    client.query(query, values, callback);
  };
  
  const getBarangNota = (callback) => {
    const query =
      "SELECT * FROM barangnota";
    client.query(query, callback);
  }
  
  const deleteBarangNota = (kode_barang_nota, callback) => {
    const query =
      "DELETE FROM barangnota WHERE kode_barang_nota = $1"
    const values = [kode_barang_nota]
    client.query(query, values, callback);
  }

module.exports = {
    insertBarangNota,
    getBarangNota,
    deleteBarangNota,
    updateBarangNota
}