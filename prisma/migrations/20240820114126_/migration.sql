/*
  Warnings:

  - Added the required column `vehicleId` to the `VehiclePrice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VehiclePrice" ADD COLUMN     "vehicleId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "VehiclePrice" ADD CONSTRAINT "VehiclePrice_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
