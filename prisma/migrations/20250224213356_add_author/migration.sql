-- AlterTable
ALTER TABLE "books" ADD COLUMN     "authorId" INTEGER;

-- CreateTable
CREATE TABLE "authors" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "authors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
