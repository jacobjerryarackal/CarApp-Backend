/*
  Warnings:

  - You are about to drop the `_Features` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Features" DROP CONSTRAINT "_Features_A_fkey";

-- DropForeignKey
ALTER TABLE "_Features" DROP CONSTRAINT "_Features_B_fkey";

-- DropTable
DROP TABLE "_Features";

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
