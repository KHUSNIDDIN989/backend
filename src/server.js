require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const modules = require("./modules");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const PORT = process.env.PORT || 4004;

const server = new ApolloServer({
  modules,
  introspection: true,
  playground: true,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
