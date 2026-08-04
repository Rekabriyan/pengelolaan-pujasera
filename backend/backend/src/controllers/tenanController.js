const tenanRepository = require("../repository/tenanRepository");

const insertTenan = (req, res) => {
  const {nama_tenan, HP} = req.body;

  tenanRepository.insertTenan(nama_tenan, HP, (err, result) => {
    if (!err) {
      res.send("Insert success");
    } else {
      res.status(500).send(err.message);
    }
  });
};

const updateTenan = (req, res) => {
  const kode_tenan = req.params.kode_tenan;
  const { nama_tenan, HP} = req.body;
  tenanRepository.updateTenan(
    nama_tenan,
    HP,
    kode_tenan,
    (err, result) => {
      if (!err) {
        res.send("Update berhasil");
      } else {
        res.status(500).send(err.message);
      }
    }
  );
};

const getTenan = (req, res) => {
  tenanRepository.getTenan( (err, result) => {
    if(!err) {
      res.send(result.rows)
    } else {
      res.status(500).send(err.message);
    }
  })
}

const deleteTenan = (req, res) => {
  const kode_tenan = req.params.kode_tenan;
  tenanRepository.deleteTenan(kode_tenan, (err, result) => {
    if(!err){
      res.send("Delete tenan dengan id " + kode_tenan + " berhasil")
    } else {
      res.status(500).send(err.message)
    }
  })
}

module.exports = {
    insertTenan,
    updateTenan,
    getTenan,
    deleteTenan
}