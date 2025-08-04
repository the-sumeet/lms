/*
  Warnings:

  - Changed the type of `type` on the `question` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."question" ADD COLUMN     "contentType" TEXT NOT NULL DEFAULT 'text',
DROP COLUMN "type",
ADD COLUMN     "type" TEXT NOT NULL;

-- DropEnum
DROP TYPE "public"."QuestionType";
