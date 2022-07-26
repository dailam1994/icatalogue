-- CreateTable
CREATE TABLE "item" (
    "itemID" TEXT NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "quantity" SMALLINT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("itemID")
);

-- CreateIndex
CREATE UNIQUE INDEX "item_itemID_key" ON "item"("itemID");

-- CreateIndex
CREATE UNIQUE INDEX "item_title_key" ON "item"("title");
