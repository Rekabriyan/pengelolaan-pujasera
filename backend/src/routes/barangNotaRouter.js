const express = require("express");
const router = express.Router();
const barangNotaController = require("../controllers/barangNotaController");

router.post("/api/barangnota/insert", barangNotaController.insertBarangNota);
router.put("/api/barangnota/update/:kode_barang_nota", barangNotaController.updateBarangNota);
router.get("/api/barangnota", barangNotaController.getBarangNota);
router.delete("/api/barangnota/delete/:kode_barang_nota", barangNotaController.deleteBarangNota);

module.exports = router;