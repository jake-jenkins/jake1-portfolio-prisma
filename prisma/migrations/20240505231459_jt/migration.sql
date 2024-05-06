/*
  Warnings:

  - Added the required column `categorySlug` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_categoryTitle_fkey";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "categorySlug" TEXT NOT NULL,
ALTER COLUMN "categoryTitle" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_categorySlug_fkey" FOREIGN KEY ("categorySlug") REFERENCES "Category"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
