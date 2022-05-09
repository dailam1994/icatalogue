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
CREATE TABLE "recordList" (
    "recordListID" TEXT NOT NULL,
    "userUserID" TEXT,
    "recordRecordID" TEXT,

    CONSTRAINT "recordList_pkey" PRIMARY KEY ("recordListID")
);

-- CreateTable
CREATE TABLE "record" (
    "recordID" TEXT NOT NULL,
    "date" VARCHAR(50) NOT NULL,
    "start" VARCHAR(50) NOT NULL,
    "end" VARCHAR(50) NOT NULL,
    "firstService" VARCHAR(50),
    "secondService" VARCHAR(50),
    "thirdService" VARCHAR(50),
    "fourthService" VARCHAR(50),
    "fifthService" VARCHAR(50),

    CONSTRAINT "record_pkey" PRIMARY KEY ("recordID")
);

-- CreateTable
CREATE TABLE "changelog" (
    "changelogID" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dateChanged" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "userUserID" TEXT,
    "recordRecordID" TEXT,

    CONSTRAINT "changelog_pkey" PRIMARY KEY ("changelogID")
);

-- CreateTable
CREATE TABLE "logging" (
    "loggingID" TEXT NOT NULL,
    "ip" VARCHAR(200) NOT NULL,
    "session" VARCHAR(500),
    "username" VARCHAR(200),
    "usertype" VARCHAR(200),
    "timestamp" VARCHAR(50) NOT NULL,
    "action" VARCHAR(50) NOT NULL,

    CONSTRAINT "logging_pkey" PRIMARY KEY ("loggingID")
);

-- CreateTable
CREATE TABLE "blockip" (
    "blockipID" TEXT NOT NULL,
    "ip" VARCHAR(50) NOT NULL,

    CONSTRAINT "blockip_pkey" PRIMARY KEY ("blockipID")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_userID_key" ON "user"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "recordList_recordListID_key" ON "recordList"("recordListID");

-- CreateIndex
CREATE UNIQUE INDEX "record_recordID_key" ON "record"("recordID");

-- CreateIndex
CREATE UNIQUE INDEX "changelog_changelogID_key" ON "changelog"("changelogID");

-- CreateIndex
CREATE UNIQUE INDEX "logging_loggingID_key" ON "logging"("loggingID");

-- CreateIndex
CREATE UNIQUE INDEX "blockip_blockipID_key" ON "blockip"("blockipID");

-- CreateIndex
CREATE UNIQUE INDEX "blockip_ip_key" ON "blockip"("ip");

-- AddForeignKey
ALTER TABLE "recordList" ADD CONSTRAINT "recordList_userUserID_fkey" FOREIGN KEY ("userUserID") REFERENCES "user"("userID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recordList" ADD CONSTRAINT "recordList_recordRecordID_fkey" FOREIGN KEY ("recordRecordID") REFERENCES "record"("recordID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "changelog" ADD CONSTRAINT "changelog_userUserID_fkey" FOREIGN KEY ("userUserID") REFERENCES "user"("userID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "changelog" ADD CONSTRAINT "changelog_recordRecordID_fkey" FOREIGN KEY ("recordRecordID") REFERENCES "record"("recordID") ON DELETE CASCADE ON UPDATE CASCADE;
