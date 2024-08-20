/*
  Warnings:

  - You are about to drop the column `price` on the `Vehicle` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "price";

-- CreateTable
CREATE TABLE "VehiclePrice" (
    "id" SERIAL NOT NULL,
    "price" TEXT NOT NULL,
    "vehicleId" INTEGER NOT NULL,
    "vehicleTypeId" INTEGER NOT NULL,
    "featuresId" INTEGER NOT NULL,

    CONSTRAINT "VehiclePrice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VehiclePrice" ADD CONSTRAINT "VehiclePrice_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehiclePrice" ADD CONSTRAINT "VehiclePrice_vehicleTypeId_fkey" FOREIGN KEY ("vehicleTypeId") REFERENCES "VehicleType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehiclePrice" ADD CONSTRAINT "VehiclePrice_featuresId_fkey" FOREIGN KEY ("featuresId") REFERENCES "Features"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
