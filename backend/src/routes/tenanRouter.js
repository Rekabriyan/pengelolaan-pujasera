const express = require("express");
const router = express.Router();
const tenanController = require("../controllers/tenanController");

router.post("/api/tenan/insert", tenanController.insertTenan);
router.put("/api/tenan/update/:kode_tenan", tenanController.updateTenan);
router.get("/api/tenan", tenanController.getTenan);
router.delete("/api/tenan/delete/:kode_tenan", tenanController.deleteTenan);


module.exports = router;