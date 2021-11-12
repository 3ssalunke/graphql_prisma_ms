import { GraphQLSchema } from "graphql";
import mutation from "./resolvers/mutation/mutation";
import query from "./resolvers/query/query";

const schema: GraphQLSchema = new GraphQLSchema({
  query,
  mutation,
});

export default schema;
