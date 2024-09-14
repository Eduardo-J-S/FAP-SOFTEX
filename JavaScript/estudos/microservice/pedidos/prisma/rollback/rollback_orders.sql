-- Remove the 'status' column from the 'orders' table
ALTER TABLE "orders" DROP COLUMN IF EXISTS "status";

-- Remove foreign keys and tables 'orders' and 'orders_items'

-- Drop foreign keys from 'orders_items'
ALTER TABLE "orders_items" DROP CONSTRAINT IF EXISTS "orders_items_productId_fkey";
ALTER TABLE "orders_items" DROP CONSTRAINT IF EXISTS "orders_items_orderId_fkey";

-- Drop foreign key from 'orders'
ALTER TABLE "orders" DROP CONSTRAINT IF EXISTS "orders_customerId_fkey";

-- Drop 'orders_items' table
DROP TABLE IF EXISTS "orders_items";

-- Drop 'orders' table
DROP TABLE IF EXISTS "orders";
