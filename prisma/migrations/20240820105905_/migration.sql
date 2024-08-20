-- CreateTable
CREATE TABLE "_VehicleToPrices" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_VehicleToPrices_AB_unique" ON "_VehicleToPrices"("A", "B");

-- CreateIndex
CREATE INDEX "_VehicleToPrices_B_index" ON "_VehicleToPrices"("B");

-- AddForeignKey
ALTER TABLE "_VehicleToPrices" ADD CONSTRAINT "_VehicleToPrices_A_fkey" FOREIGN KEY ("A") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VehicleToPrices" ADD CONSTRAINT "_VehicleToPrices_B_fkey" FOREIGN KEY ("B") REFERENCES "VehiclePrice"("id") ON DELETE CASCADE ON UPDATE CASCADE;
