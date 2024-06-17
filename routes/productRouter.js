var express = require("express");
var controller = require("../controllers/product.controller.js");
const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ message: "Welcome to DressStore Application" });
});
router.get("/api/products", controller.GetAll);
router.get("/api/products/:id", controller.GetById);
router.post("/api/products", controller.Save);
router.put("/api/products/:id", controller.Update);
router.delete("/api/products/:id", controller.Del);

router.delete("/api/products/", controller.DelAll);

module.exports = router;
