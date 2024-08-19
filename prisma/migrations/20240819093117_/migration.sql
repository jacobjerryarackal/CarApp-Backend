/*
  Warnings:

  - You are about to drop the `_VehicleFeatures` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_VehicleFeatures" DROP CONSTRAINT "_VehicleFeatures_A_fkey";

-- DropForeignKey
ALTER TABLE "_VehicleFeatures" DROP CONSTRAINT "_VehicleFeatures_B_fkey";

-- DropTable
DROP TABLE "_VehicleFeatures";

-- CreateTable
CREATE TABLE "_Features" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Features_AB_unique" ON "_Features"("A", "B");

-- CreateIndex
CREATE INDEX "_Features_B_index" ON "_Features"("B");

-- AddForeignKey
ALTER TABLE "_Features" ADD CONSTRAINT "_Features_A_fkey" FOREIGN KEY ("A") REFERENCES "Features"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Features" ADD CONSTRAINT "_Features_B_fkey" FOREIGN KEY ("B") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
