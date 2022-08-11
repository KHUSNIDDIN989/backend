require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const modules = require("./modules");
const PORT = process.env.PORT || 4004;

const server = new ApolloServer({
  modules,
  introspection: true,
  playground: true,
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
