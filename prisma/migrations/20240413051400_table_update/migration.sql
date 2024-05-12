-- DropForeignKey
ALTER TABLE `comments` DROP FOREIGN KEY `comments_userID_fkey`;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
