/*
  Warnings:

  - You are about to drop the column `name` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `confirmPassword` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `pincode` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_VehicleVehicleTypes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `vehicleTypeId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_VehicleVehicleTypes" DROP CONSTRAINT "_VehicleVehicleTypes_A_fkey";

-- DropForeignKey
ALTER TABLE "_VehicleVehicleTypes" DROP CONSTRAINT "_VehicleVehicleTypes_B_fkey";

-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "city",
DROP COLUMN "confirmPassword",
DROP COLUMN "country",
DROP COLUMN "name",
DROP COLUMN "phone",
DROP COLUMN "pincode",
DROP COLUMN "state";

-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "vehicleTypeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_VehicleVehicleTypes";

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_vehicleTypeId_fkey" FOREIGN KEY ("vehicleTypeId") REFERENCES "VehicleType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
