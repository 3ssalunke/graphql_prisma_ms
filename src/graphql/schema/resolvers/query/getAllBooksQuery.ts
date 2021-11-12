import { Book } from "@prisma/client";
import { getAllBoooks } from "@src/data/bookService";
import { IApolloContext } from "@src/interface/IApolloContext";
import { GraphQLList } from "graphql";
import GqlBook from "../../typedefs/GqlBook";

const getAllBooksQuery = {
  type: GraphQLList(GqlBook),
  resolve: (
    _source: unknown,
    _args: unknown,
    _context: IApolloContext,
    _info: unknown
  ): Promise<Book[]> => {
    return getAllBoooks();
  },
};

export default getAllBooksQuery;
