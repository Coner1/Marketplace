let { productModel } = require("../models/product.model");

module.exports.GetAll = async (req, res) => {
  try {
    const name = req.query.name;
    if (name && name.length > 0) {
      const products = await productModel.find({
        name: { $regex: new RegExp(name, "i") },
      });
      if (!products.length)
        return res
          .status(404)
          .json({ message: "No products found matching the keyword" });
      res.json(products);
      return;
    } else {
      const products = await productModel.find();
      res.json(products);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.GetById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports.Save = async (req, res) => {
  try {
    const product = new productModel({
      name: "dress1",
      description: "beautify dress",
      price: 100,
      quantity: 21,
      category: "top",
    });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports.Update = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = { name: "new dress", price: 32 };
    const updatedProduct = await productModel.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports.Del = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await productModel.findByIdAndDelete(id);
    if (!deletedProduct)
      return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports.DelAll = async (req, res) => {
  try {
    await productModel.deleteMany({}); // Delete all products with an empty filter
    res.json({ message: "All products deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
