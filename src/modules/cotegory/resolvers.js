const model = require("./model");

module.exports = {
  Query: {
    cotegory: async () => {
      return await model.cotegoies();
    },
  },
  COTEGORY: {
    id: (g) => g.cot_id,
    name: (g) => g.cot_name,
    img: (g) => g.res_img,
  },
};
