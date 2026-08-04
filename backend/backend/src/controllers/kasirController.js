const kasirRepository = require("../repository/kasirRepository");

const insertKasir = (req, res) => {
  const { nama_kasir, hp } = req.body;

  kasirRepository.insertKasir(nama_kasir, hp, (err, result) => {
    if (!err) {
      res.send("Insert kasir success");
    } else {
      res.status(500).send(err.message);
    }
  });
};

const updateKasir = (req, res) => {
  const kode_kasir = req.params.kode_kasir;
  const { nama_kasir, hp } = req.body;
  kasirRepository.updateKasir(nama_kasir, hp, kode_kasir, (err, result) => {
      if (!err) {
        res.send("Update kasir success");
      } else {
        res.status(500).send(err.message);
      }
    }
  );
};

const getKasir = (req, res) => {
  kasirRepository.getKasir( (err, result) => {
    if(!err) {
      res.send(result.rows)
    } else {
      res.status(500).send(err.message);
    }
  })
}

const deleteKasir = (req, res) => {
  const kode_kasir = req.params.kode_kasir;
  kasirRepository.deleteKasir(kode_kasir, (err, result) => {
    if(!err){
      res.send("Delete kasir dengan id " + kode_kasir + " berhasil")
    } else {
      res.status(500).send(err.message)
    }
  })
}

module.exports = {
    insertKasir,
    updateKasir,
    getKasir,
    deleteKasir
}