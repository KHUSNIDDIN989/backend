const model = require("./model");

module.exports = {
  Query: {
    products: async (_, { id }) => {
      return await model.getProduct(id);
    },
    product: async () => {
      return await model.getProducts();
    },
  },

  PRODUCT: {
    id: (g) => g.product_id,
    name: (g) => g.product_name,
    resName: (g) => g.res_name,
    img: (g) => g.product_img,
    price: (g) => g.product_price,
    res: (g) => g.res_id,
  },
  Mutation: {
    newproduct: async (_, { name, price, img, res }) =>
      await model.createProduct(name, price, img, res),
    deleteProduct: async (_, { id }) => await model.deleteProduct(id),
  },
};
