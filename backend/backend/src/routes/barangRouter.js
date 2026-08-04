const express = require("express");
const router = express.Router();
const barangController = require("../controllers/barangController");

router.post("/api/barang/insert", barangController.insertBarang);
router.put("/api/barang/update/:kode_barang", barangController.updateBarang);
router.get("/api/barang", barangController.getBarang);
router.delete("/api/barang/delete/:kode_barang", barangController.deleteBarang);


module.exports = router;