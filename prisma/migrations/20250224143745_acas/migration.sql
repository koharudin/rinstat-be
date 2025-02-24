/*
  Warnings:

  - You are about to drop the column `is_valid` on the `user_affiliation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_affiliation" DROP COLUMN "is_valid",
ADD COLUMN     "is_valid3" BOOLEAN DEFAULT true;
