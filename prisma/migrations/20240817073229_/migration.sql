/*
  Warnings:

  - You are about to drop the column `featuresId` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleTypeId` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the `_VehicleType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_VehicleType" DROP CONSTRAINT "_VehicleType_A_fkey";

-- DropForeignKey
ALTER TABLE "_VehicleType" DROP CONSTRAINT "_VehicleType_B_fkey";

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "featuresId",
DROP COLUMN "vehicleTypeId";

-- DropTable
DROP TABLE "_VehicleType";

-- CreateTable
CREATE TABLE "_VehicleVehicleTypes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_VehicleVehicleTypes_AB_unique" ON "_VehicleVehicleTypes"("A", "B");

-- CreateIndex
CREATE INDEX "_VehicleVehicleTypes_B_index" ON "_VehicleVehicleTypes"("B");

-- AddForeignKey
ALTER TABLE "_VehicleVehicleTypes" ADD CONSTRAINT "_VehicleVehicleTypes_A_fkey" FOREIGN KEY ("A") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VehicleVehicleTypes" ADD CONSTRAINT "_VehicleVehicleTypes_B_fkey" FOREIGN KEY ("B") REFERENCES "VehicleType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
