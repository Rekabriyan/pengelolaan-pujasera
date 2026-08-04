const barangRepository = require("../repository/barangRepository");

const insertBarang = (req, res) => {
  const { nama_barang, satuan, harga_satuan, stok } = req.body;

  barangRepository.insertBarang(nama_barang, satuan, harga_satuan, stok, (err, result) => {
    if (!err) {
      res.send("Insert success");
    } else {
      res.status(500).send(err.message);
    }
  });
};

const updateBarang = (req, res) => {
  const kode_barang = req.params.kode_barang;
  const { nama_barang, satuan, harga_satuan, stok } = req.body;
  barangRepository.updateBarang(
    nama_barang,
    satuan,
    harga_satuan,
    stok,
    kode_barang,
    (err, result) => {
      if (!err) {
        res.send("Update berhasil");
      } else {
        res.status(500).send(err.message);
      }
    }
  );
};

const getBarang = (req, res) => {
  barangRepository.getBarang( (err, result) => {
    if(!err) {
      res.send(result.rows)
    } else {
      res.status(500).send(err.message);
    }
  })
}

const deleteBarang = (req, res) => {
  const kode_barang = req.params.kode_barang;
  barangRepository.deleteBarang(kode_barang, (err, result) => {
    if(!err){
      res.send("Delete barang dengan id " + kode_barang + " berhasil")
    } else {
      res.status(500).send(err.message)
    }
  })
}

module.exports = {
    insertBarang,
    updateBarang,
    getBarang,
    deleteBarang
}