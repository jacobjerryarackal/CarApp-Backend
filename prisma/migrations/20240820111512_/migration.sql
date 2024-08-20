/*
  Warnings:

  - You are about to drop the `_VehicleToPrices` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_VehicleToPrices" DROP CONSTRAINT "_VehicleToPrices_A_fkey";

-- DropForeignKey
ALTER TABLE "_VehicleToPrices" DROP CONSTRAINT "_VehicleToPrices_B_fkey";

-- DropTable
DROP TABLE "_VehicleToPrices";
