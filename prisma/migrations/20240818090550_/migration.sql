/*
  Warnings:

  - You are about to drop the column `customerName` on the `Booking` table. All the data in the column will be lost.
  - The `bookingDate` column on the `Booking` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `userId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "customerName",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL,
DROP COLUMN "bookingDate",
ADD COLUMN     "bookingDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
