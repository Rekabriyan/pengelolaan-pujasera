const client = require("../../config/connection");

const insertKasir = (nama_kasir, hp, callback) => {
  const query =
    "INSERT INTO kasir(nama_kasir, hp) VALUES($1, $2)";
  const values = [nama_kasir, hp];
  client.query(query, values, callback);
};

const updateKasir = (nama_kasir, hp, kode_kasir, callback) => {
  const query =
    "UPDATE kasir SET nama_kasir = $1, hp = $2 WHERE kode_kasir = $3";
  const values = [nama_kasir, hp, kode_kasir];
  client.query(query, values, callback);
};

const getKasir = (callback) => {
  const query =
    "SELECT * FROM kasir";
  client.query(query, callback);
}

const deleteKasir = (kode_kasir, callback) => {
  const query =
    "DELETE FROM kasir WHERE kode_kasir = $1"
  const values = [kode_kasir]
  client.query(query, values, callback);
}

module.exports = {
    insertKasir,
    updateKasir,
    getKasir,
    deleteKasir
}
