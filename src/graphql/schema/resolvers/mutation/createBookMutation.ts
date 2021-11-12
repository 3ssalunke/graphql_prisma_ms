import { Book } from "@prisma/client";
import { createBook } from "@src/data/bookService";
import { IApolloContext } from "@src/interface/IApolloContext";
import { GraphQLNonNull } from "graphql";
import CreateBookInput from "../../typedefs/CreateBookInput";
import GqlBook from "../../typedefs/GqlBook";

const createBookMutation = {
  type: GqlBook,
  args: {
    bookInput: {
      type: GraphQLNonNull(CreateBookInput),
      description: "book input to be created",
    },
  },
  resolve: async (
    _source: unknown,
    { bookInput: { title, author } }: any,
    _context: IApolloContext
  ): Promise<Book> => {
    return createBook(title, author);
  },
};

export default createBookMutation;
