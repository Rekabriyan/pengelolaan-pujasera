const express = require("express");
const router = express.Router();
const kasirController = require("../controllers/kasirController");

router.post("/api/kasir/insert", kasirController.insertKasir);
router.put("/api/kasir/update/:kode_kasir", kasirController.updateKasir);
router.get("/api/kasir", kasirController.getKasir);
router.delete("/api/kasir/delete/:kode_kasir", kasirController.deleteKasir);

module.exports = router;