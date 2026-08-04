const notaRepository = require("../repository/notaRepository.js");

const insertNota = (req, res) => {
    const {kode_tenan, kode_kasir, tgl_nota, jam_nota, jml_belanja, diskon, total} = req.body;

    notaRepository.insertNota(kode_tenan, kode_kasir, tgl_nota, jam_nota, jml_belanja, diskon, total, (err,result) =>{
        if(!err){
            res.send("Insert Nota success");
        } else {
            res.status(500).send(err.message);
        }
    });
};

const getNota = (req, res) => {
    notaRepository.getNota( (err, result) => {
      if(!err) {
        res.send(result.rows)
      } else {
        res.status(500).send(err.message);
      }
    })
  }
  
  const deleteNota = (req, res) => {
    const kode_nota = req.params.kode_nota;
    notaRepository.deleteNota(kode_nota, (err, result) => {
      if(!err){
        res.send("Delete nota dengan id " + kode_nota + " berhasil")
      } else {
        res.status(500).send(err.message)
      }
    })
  }

  const updateNota = (req, res) => {
    const kode_nota = req.params.kode_nota;
    const {kode_tenan, kode_kasir, tgl_nota, jam_nota, jml_belanja, diskon, total} = req.body;
    notaRepository.updateNota(
        kode_tenan,
        kode_kasir,
        tgl_nota, 
        jam_nota, 
        jml_belanja, 
        diskon, 
        total,
        kode_nota,
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
    insertNota,
    getNota,
    deleteNota,
    updateNota
}