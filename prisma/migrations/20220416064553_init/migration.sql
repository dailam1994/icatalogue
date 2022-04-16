-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'CLIENT');

-- CreateTable
CREATE TABLE "user" (
    "userID" TEXT NOT NULL,
    "firstName" VARCHAR(200) NOT NULL,
    "lastName" VARCHAR(200) NOT NULL,
    "dateOfBirth" DATE NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "username" VARCHAR(200) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "roles" "Role" NOT NULL DEFAULT E'CLIENT',

    CONSTRAINT "user_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "availability" (
    "availabilityID" TEXT NOT NULL,
    "date" TIMESTAMP(6) NOT NULL,
    "startTime" TIMESTAMP(6) NOT NULL,
    "endTime" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "availability_pkey" PRIMARY KEY ("availabilityID")
);

-- CreateTable
CREATE TABLE "bookingList" (
    "bookingListID" TEXT NOT NULL,
    "userUserID" TEXT,
    "bookingBookingID" TEXT,

    CONSTRAINT "bookingList_pkey" PRIMARY KEY ("bookingListID")
);

-- CreateTable
CREATE TABLE "booking" (
    "bookingID" TEXT NOT NULL,
    "date" TIMESTAMP(6) NOT NULL,
    "startTime" TIMESTAMP(6) NOT NULL,
    "endTime" TIMESTAMP(6) NOT NULL,
    "firstService" VARCHAR(50),
    "secondService" VARCHAR(50),
    "thirdService" VARCHAR(50),
    "fourthService" VARCHAR(50),
    "fifthService" VARCHAR(50),

    CONSTRAINT "booking_pkey" PRIMARY KEY ("bookingID")
);

-- CreateTable
CREATE TABLE "changelog" (
    "changelogID" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dateChanged" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "userUserID" TEXT,
    "bookingBookingID" TEXT,

    CONSTRAINT "changelog_pkey" PRIMARY KEY ("changelogID")
);

-- CreateTable
CREATE TABLE "logging" (
    "loggingID" TEXT NOT NULL,
    "ip" VARCHAR(200) NOT NULL,
    "session" VARCHAR(500) NOT NULL,
    "username" VARCHAR(200) NOT NULL,
    "usertype" VARCHAR(200) NOT NULL,
    "timestamp" VARCHAR(50) NOT NULL,
    "action" VARCHAR(50) NOT NULL,

    CONSTRAINT "logging_pkey" PRIMARY KEY ("loggingID")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_userID_key" ON "user"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "availability_availabilityID_key" ON "availability"("availabilityID");

-- CreateIndex
CREATE UNIQUE INDEX "bookingList_bookingListID_key" ON "bookingList"("bookingListID");

-- CreateIndex
CREATE UNIQUE INDEX "booking_bookingID_key" ON "booking"("bookingID");

-- CreateIndex
CREATE UNIQUE INDEX "changelog_changelogID_key" ON "changelog"("changelogID");

-- CreateIndex
CREATE UNIQUE INDEX "logging_loggingID_key" ON "logging"("loggingID");

-- AddForeignKey
ALTER TABLE "bookingList" ADD CONSTRAINT "bookingList_userUserID_fkey" FOREIGN KEY ("userUserID") REFERENCES "user"("userID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookingList" ADD CONSTRAINT "bookingList_bookingBookingID_fkey" FOREIGN KEY ("bookingBookingID") REFERENCES "booking"("bookingID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "changelog" ADD CONSTRAINT "changelog_userUserID_fkey" FOREIGN KEY ("userUserID") REFERENCES "user"("userID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "changelog" ADD CONSTRAINT "changelog_bookingBookingID_fkey" FOREIGN KEY ("bookingBookingID") REFERENCES "booking"("bookingID") ON DELETE CASCADE ON UPDATE CASCADE;
