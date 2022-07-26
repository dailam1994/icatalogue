/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `item` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "item" ADD COLUMN     "date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "url" VARCHAR(200),
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "admin" (
    "adminID" TEXT NOT NULL,
    "firstName" VARCHAR(200) NOT NULL,
    "lastName" VARCHAR(200) NOT NULL,
    "dateOfBirth" DATE NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "username" VARCHAR(200) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("adminID")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_adminID_key" ON "admin"("adminID");

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "admin_username_key" ON "admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "item_url_key" ON "item"("url");
