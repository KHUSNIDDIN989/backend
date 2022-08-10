const { fetchAll, fetch } = require("../../utils/postgres");

const ALL_PRODUCT = `
    select * from products where res_id = $1
`;
const ALL_PRODUCTS = `
    select * from products NATURAL JOIN restaurants 
`;

const CREATE_PRODUCT = `
    INSERT INTO products (product_name, product_price, product_img, res_id) VALUES ($1, $2, $3, $4) RETURNING *
`;

const DELETE_PRODUCT = `
  DELETE 
  FROM 
    products
  WHERE 
    product_id = $1 
  RETURNING *
`;

const getProducts = () => fetchAll(ALL_PRODUCTS);
const getProduct = (id) => fetchAll(ALL_PRODUCT, id);
const createProduct = (name, price, img, res) =>
  fetch(CREATE_PRODUCT, name, price, img, res);
const deleteProduct = (id) => fetch(DELETE_PRODUCT, id);

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  deleteProduct,
};
