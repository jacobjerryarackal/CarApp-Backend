-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_vehicleTypeId_fkey";

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
