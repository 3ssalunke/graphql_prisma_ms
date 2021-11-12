import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const CreateBookInput = new GraphQLInputObjectType({
  name: "BookInput",
  description: "create book input",
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: "book title",
    },
    author: {
      type: new GraphQLNonNull(GraphQLString),
      description: "book author",
    },
  },
});

export default CreateBookInput;
