const express = require("express");
const router = express.Router();
const notaController = require("../controllers/notaController");

router.post("/api/nota/insert", notaController.insertNota);
router.put("/api/nota/update/:kode_nota", notaController.updateNota);
router.get("/api/nota", notaController.getNota);
router.delete("/api/nota/delete/:kode_nota", notaController.deleteNota);

module.exports = router;