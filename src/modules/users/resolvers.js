const model = require("./model");

module.exports = {
  Query: {
    users: async () => await model.getUser(),
  },
  User: {
    id: (g) => g.user_id,
    name: (g) => g.user_name,
    phone: (g) => g.user_phone,
  },
  Mutation: {
    newUser: async (_, { name, phone }) => await model.createdUser(name, phone),
    deleteUser: async (_, { id }) => await model.deleteUser(id),
  },
};
