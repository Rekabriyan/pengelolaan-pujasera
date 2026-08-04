const barangNotaRepository = require("../repository/barangNotaRepository.js");

const insertBarangNota = (req, res) => {
    const {kode_nota, kode_barang, jml_barang, harga_satuan, jumlah} = req.body;

    barangNotaRepository.insertBarangNota(kode_nota, kode_barang, jml_barang, harga_satuan, jumlah, (err,result) =>{
        if(!err){
            res.send("Insert Nota success");
        } else {
            res.status(500).send(err.message);
        }
    });
};

const getBarangNota = (req, res) => {
    barangNotaRepository.getBarangNota( (err, result) => {
      if(!err) {
        res.send(result.rows)
      } else {
        res.status(500).send(err.message);
      }
    })
  }
  
  const deleteBarangNota = (req, res) => {
    const kode_barang_nota = req.params.kode_barang_nota;
    barangNotaRepository.deleteBarangNota(kode_barang_nota, (err, result) => {
      if(!err){
        res.send("Delete barang nota dengan id " + kode_barang_nota + " berhasil")
      } else {
        res.status(500).send(err.message)
      }
    })
  }

  const updateBarangNota = (req, res) => {
    const kode_barang_nota = req.params.kode_barang_nota;
    const {kode_nota, kode_barang, jml_barang, harga_satuan, jumlah} = req.body;
    barangNotaRepository.updateBarangNota(
        kode_nota,
        kode_barang,
        jml_barang, 
        harga_satuan, 
        jumlah, 
        kode_barang_nota,
      (err, result) => {
        if (!err) {
          res.send("Update berhasil");
        } else {
          res.status(500).send(err.message);
        }
      }
    );
  };

module.exports = {
    insertBarangNota,
    getBarangNota,
    deleteBarangNota,
    updateBarangNota
}