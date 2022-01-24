import data from "../data.js";
import Product from "../models/product.js";

const getProducts = async (req, res) => {
  const result = await Product.find();
  res.send(result);
};

const getProduct = async (req, res) => {
  const id = req.params.id;
  await Product.findById(id)
    .then((product) => {
      if (product) {
        res.send(product);
      } else {
        res.status(404).send({ message: "Product not found!" });
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const addProduct = async (req, res) => {
  await Product.remove({});
  const products = await Product.insertMany(data.products);
  res.send({ products });
};

export default { getProducts, getProduct, addProduct };
