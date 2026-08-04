const client = require("../../config/connection");

const insertBarang = (nama_barang, satuan, harga_satuan, stok, callback) => {
  const query =
    "INSERT INTO barang(nama_barang, satuan, harga_satuan, stok) VALUES($1, $2, $3, $4)";
  const values = [nama_barang, satuan, harga_satuan, stok];
  client.query(query, values, callback);
};

const updateBarang = (nama_barang, satuan, harga_satuan, stok, kode_barang, callback) => {
  const query =
    "UPDATE barang SET nama_barang = $1, satuan = $2, harga_satuan = $3, stok = $4 WHERE kode_barang = $5";
  const values = [nama_barang, satuan, harga_satuan, stok, kode_barang];
  client.query(query, values, callback);
};

const getBarang = (callback) => {
  const query =
    "SELECT * FROM barang";
  client.query(query, callback);
}

const deleteBarang = (kode_barang, callback) => {
  const query =
    "DELETE FROM barang WHERE kode_barang = $1"
  const values = [kode_barang]
  client.query(query, values, callback);
}

module.exports = {
    insertBarang,
    updateBarang,
    getBarang,
    deleteBarang
}
