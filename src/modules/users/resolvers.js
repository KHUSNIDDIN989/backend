const model = require("./model");
const jwt = require("jsonwebtoken");

module.exports = {
  Query: {
    users: async () => {
      return await model.getUsers();
    },
    user: async (_, {}, { authorization }) => {
      const { id } = jwt.verify(authorization, "SECRET_KEY");

      return await model.getUserByID(id);
    },
  },
  Mutation: {
    newUser: async (_, { name, password }) => {
      const createdUser = await model.newUser(name, password);

      if (!createdUser) {
        return "Tur yoqol";
      }

      return jwt.sign({ id: createdUser.user_id }, "SECRET_KEY");
    },
    login: async (_, { username, password }) => {
      const foundUser = await model.login(username, password);

      if (!foundUser) {
        return "Tur yoqol";
      }

      return jwt.sign({ id: foundUser.user_id }, "SECRET_KEY");
    },
  },
  User: {
    id: (g) => g.user_id,
    name: (g) => g.user_name,
    password: (g) => g.user_password,
  },
};
