/*
  Warnings:

  - You are about to drop the `Feature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_VehicleFeatures` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_vehicleTypeId_fkey";

-- DropForeignKey
ALTER TABLE "_VehicleFeatures" DROP CONSTRAINT "_VehicleFeatures_A_fkey";

-- DropForeignKey
ALTER TABLE "_VehicleFeatures" DROP CONSTRAINT "_VehicleFeatures_B_fkey";

-- DropTable
DROP TABLE "Feature";

-- DropTable
DROP TABLE "_VehicleFeatures";

-- CreateTable
CREATE TABLE "Features" (
    "id" SERIAL NOT NULL,
    "engineType" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "horsepower" INTEGER,
    "torque" INTEGER,
    "fuelEfficiency" DOUBLE PRECISION,
    "dimensions" TEXT,
    "weight" DOUBLE PRECISION,
    "safetyFeatures" TEXT[],
    "infotainment" TEXT,
    "vehicleId" INTEGER NOT NULL,

    CONSTRAINT "Features_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Features" ADD CONSTRAINT "Features_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
