/*
  Warnings:

  - You are about to drop the column `vehicleTypeId` on the `Vehicle` table. All the data in the column will be lost.
  - Added the required column `vehicleTypeIds` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_vehicleTypeId_fkey";

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "vehicleTypeId",
ADD COLUMN     "vehicleTypeIds" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "_VehicleTypes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_VehicleTypes_AB_unique" ON "_VehicleTypes"("A", "B");

-- CreateIndex
CREATE INDEX "_VehicleTypes_B_index" ON "_VehicleTypes"("B");

-- AddForeignKey
ALTER TABLE "_VehicleTypes" ADD CONSTRAINT "_VehicleTypes_A_fkey" FOREIGN KEY ("A") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VehicleTypes" ADD CONSTRAINT "_VehicleTypes_B_fkey" FOREIGN KEY ("B") REFERENCES "VehicleType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
