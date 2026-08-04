const client = require("../../config/connection");

const insertTenan = (nama_tenan, hp, callback) => {
  const query =
    "INSERT INTO tenan(nama_tenan, HP) VALUES($1, $2)";
  const values = [nama_tenan, hp];
  client.query(query, values, callback);
};

const updateTenan = (nama_tenan, HP, kode_tenan, callback) => {
  const query =
    "UPDATE tenan SET nama_tenan = $1, HP = $2 WHERE kode_tenan = $3";
  const values = [nama_tenan, HP, kode_tenan];
  client.query(query, values, callback);
};

const getTenan = (callback) => {
  const query =
    "SELECT * FROM tenan";
  client.query(query, callback);
}

const deleteTenan = (kode_tenan, callback) => {
  const query =
    "DELETE FROM tenan WHERE kode_tenan = $1"
  const values = [kode_tenan]
  client.query(query, values, callback);
}

module.exports = {
    insertTenan,
    updateTenan,
    getTenan,
    deleteTenan
}
