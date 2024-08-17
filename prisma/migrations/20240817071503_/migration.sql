/*
  Warnings:

  - You are about to drop the `_VehicleVehicleTypes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_VehicleVehicleTypes" DROP CONSTRAINT "_VehicleVehicleTypes_A_fkey";

-- DropForeignKey
ALTER TABLE "_VehicleVehicleTypes" DROP CONSTRAINT "_VehicleVehicleTypes_B_fkey";

-- DropTable
DROP TABLE "_VehicleVehicleTypes";

-- CreateTable
CREATE TABLE "_VehicleType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_VehicleType_AB_unique" ON "_VehicleType"("A", "B");

-- CreateIndex
CREATE INDEX "_VehicleType_B_index" ON "_VehicleType"("B");

-- AddForeignKey
ALTER TABLE "_VehicleType" ADD CONSTRAINT "_VehicleType_A_fkey" FOREIGN KEY ("A") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VehicleType" ADD CONSTRAINT "_VehicleType_B_fkey" FOREIGN KEY ("B") REFERENCES "VehicleType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
