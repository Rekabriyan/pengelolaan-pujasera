const client = require("../../config/connection");

const insertNota = (kode_tenan, kode_kasir, tgl_nota, jam_nota, jml_belanja, diskon, total, callback) => {
    const query = 
        "INSERT INTO nota (kode_tenan, kode_kasir, tgl_nota, jam_nota, jml_belanja, diskon, total) VALUES($1, $2, $3, $4, $5, $6, $7)";
    const values = [kode_tenan, kode_kasir, tgl_nota, jam_nota, jml_belanja, diskon, total];
    client.query(query, values, callback);
}

const updateNota = (kode_tenan, kode_kasir, tgl_nota, jam_nota, jml_belanja, diskon, total, kode_nota, callback) => {
    const query =
      "UPDATE nota SET kode_tenan =$1,  kode_kasir=$2, tgl_nota = $3, jam_nota = $4, jml_belanja = $5, diskon = $6, total = $7 WHERE kode_nota = $8";
    const values = [kode_tenan, kode_kasir, tgl_nota, jam_nota, jml_belanja, diskon, total, kode_nota];
    client.query(query, values, callback);
  };
  
  const getNota = (callback) => {
    const query =
      "SELECT * FROM nota";
    client.query(query, callback);
  }
  
  const deleteNota = (kode_nota, callback) => {
    const query =
      "DELETE FROM nota WHERE kode_nota = $1"
    const values = [kode_nota]
    client.query(query, values, callback);
  }

module.exports = {
    insertNota,
    getNota,
    deleteNota,
    updateNota
}