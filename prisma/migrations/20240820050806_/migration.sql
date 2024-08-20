/*
  Warnings:

  - You are about to drop the column `featuresId` on the `VehiclePrice` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleId` on the `VehiclePrice` table. All the data in the column will be lost.
  - You are about to drop the `_VehicleFeatures` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `price` on the `VehiclePrice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "VehiclePrice" DROP CONSTRAINT "VehiclePrice_featuresId_fkey";

-- DropForeignKey
ALTER TABLE "VehiclePrice" DROP CONSTRAINT "VehiclePrice_vehicleId_fkey";

-- DropForeignKey
ALTER TABLE "_VehicleFeatures" DROP CONSTRAINT "_VehicleFeatures_A_fkey";

-- DropForeignKey
ALTER TABLE "_VehicleFeatures" DROP CONSTRAINT "_VehicleFeatures_B_fkey";

-- AlterTable
ALTER TABLE "VehiclePrice" DROP COLUMN "featuresId",
DROP COLUMN "vehicleId",
DROP COLUMN "price",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "_VehicleFeatures";
