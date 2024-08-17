/*
  Warnings:

  - Added the required column `featureId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "featureId" INTEGER NOT NULL;
