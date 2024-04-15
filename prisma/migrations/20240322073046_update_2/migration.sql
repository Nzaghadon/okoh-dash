/*
  Warnings:

  - You are about to drop the `_CategoryToProduct` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_CategoryToProduct_B_index";

-- DropIndex
DROP INDEX "_CategoryToProduct_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CategoryToProduct";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "brand" TEXT,
    "currentInventory" INTEGER,
    "categoryId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("brand", "createdAt", "currentInventory", "description", "id", "image", "name", "price", "rating", "updatedAt") SELECT "brand", "createdAt", "currentInventory", "description", "id", "image", "name", "price", "rating", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE INDEX "Product_id_idx" ON "Product"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
