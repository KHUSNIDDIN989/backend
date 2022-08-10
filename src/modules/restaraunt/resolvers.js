const model = require("./model");

module.exports = {
  Query: {
    restaraunt: async (_, { id }) => {
      return await model.getRes(id);
    },
    restaraunts: async () => {
      return await model.getAllRes();
    },
  },
  RES: {
    id: (g) => g.res_id,
    name: (g) => g.res_name,
    img: (g) => g.res_img,
  },
  Mutation: {
    newRes: async (_, { name, res_cotegory_id, img }) => {
      if (name && res_cotegory_id) {
        const createdRes = await model.createdRes(name, res_cotegory_id, img);
        return createdRes;
      }
    },
    deleteRes: async (_, { id }) => await model.deleteRes(id),
  },
};
