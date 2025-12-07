-- CreateTable
CREATE TABLE "image" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "productId" TEXT,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
