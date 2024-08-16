/*
  Warnings:

  - You are about to drop the column `vehicleId` on the `Features` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Features" DROP CONSTRAINT "Features_vehicleId_fkey";

-- AlterTable
ALTER TABLE "Features" DROP COLUMN "vehicleId";

-- AlterTable
ALTER TABLE "Vehicle" ALTER COLUMN "primaryImage" DROP NOT NULL;

-- CreateTable
CREATE TABLE "_VehicleFeatures" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_VehicleFeatures_AB_unique" ON "_VehicleFeatures"("A", "B");

-- CreateIndex
CREATE INDEX "_VehicleFeatures_B_index" ON "_VehicleFeatures"("B");

-- AddForeignKey
ALTER TABLE "_VehicleFeatures" ADD CONSTRAINT "_VehicleFeatures_A_fkey" FOREIGN KEY ("A") REFERENCES "Features"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VehicleFeatures" ADD CONSTRAINT "_VehicleFeatures_B_fkey" FOREIGN KEY ("B") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
