const { ApolloServer } = require("apollo-server");
const modules = require("./modules");

const server = new ApolloServer({
  modules,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
