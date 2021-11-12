import { ApolloServer } from "apollo-server";
import schema from "./graphql/schema/schema";

import { IApolloContext } from "./interface/IApolloContext";
import prisma from "./prisma/client";

const startServer = () => {
  const context: IApolloContext = {
    prisma,
  };

  const server = new ApolloServer({
    schema,
    playground: process.env.NODE_ENV !== "production",
    context,
  });

  server
    .listen()
    .then(({ url }) => {
      console.log(`Server is at ${url}graphql`);
    })
    .catch((err) => console.error(err));
};

startServer();
