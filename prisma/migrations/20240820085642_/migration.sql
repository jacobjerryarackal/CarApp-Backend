-- CreateTable
CREATE TABLE "_FeaturesOnVehicles" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FeaturesOnVehicles_AB_unique" ON "_FeaturesOnVehicles"("A", "B");

-- CreateIndex
CREATE INDEX "_FeaturesOnVehicles_B_index" ON "_FeaturesOnVehicles"("B");

-- AddForeignKey
ALTER TABLE "_FeaturesOnVehicles" ADD CONSTRAINT "_FeaturesOnVehicles_A_fkey" FOREIGN KEY ("A") REFERENCES "Features"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FeaturesOnVehicles" ADD CONSTRAINT "_FeaturesOnVehicles_B_fkey" FOREIGN KEY ("B") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
