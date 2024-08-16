/*
  Warnings:

  - Added the required column `vehicleTypeId` to the `Features` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Features" ADD COLUMN     "vehicleTypeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Features" ADD CONSTRAINT "Features_vehicleTypeId_fkey" FOREIGN KEY ("vehicleTypeId") REFERENCES "VehicleType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
