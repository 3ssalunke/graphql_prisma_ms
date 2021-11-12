import { Book } from "@prisma/client";
import prisma from "@src/prisma/client";

export const getAllBoooks = async (): Promise<Book[]> => {
  return prisma.book.findMany();
};

export const createBook = async (
  title: string,
  author: string
): Promise<Book> => {
  return prisma.book.create({
    data: {
      title,
      author,
    },
  });
};
