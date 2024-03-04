/*
  Warnings:

  - Made the column `codigo` on table `articulo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `codigo` on table `conceptos_fijos_tipo_socio` required. This step will fail if there are existing NULL values in that column.
  - Made the column `codigo_familiares` on table `familiares` required. This step will fail if there are existing NULL values in that column.
  - Made the column `codigo` on table `grupos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `codigo` on table `mae_ultimo_pago` required. This step will fail if there are existing NULL values in that column.
  - Made the column `codigo` on table `parentesco_familiares` required. This step will fail if there are existing NULL values in that column.
  - Made the column `codigo` on table `socios` required. This step will fail if there are existing NULL values in that column.
  - Made the column `codigo` on table `suspensiones_familiares` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cod_mot` on table `suspensiones_motivos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `codigo` on table `suspensiones_socios` required. This step will fail if there are existing NULL values in that column.
  - Made the column `codigo` on table `tipo_socio` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `articulo` MODIFY `codigo` VARCHAR(254) NOT NULL,
    ADD PRIMARY KEY (`codigo`);

-- AlterTable
ALTER TABLE `conceptos_fijos_tipo_socio` MODIFY `codigo` VARCHAR(254) NOT NULL,
    ADD PRIMARY KEY (`codigo`);

-- AlterTable
ALTER TABLE `familiares` MODIFY `codigo_familiares` VARCHAR(254) NOT NULL,
    ADD PRIMARY KEY (`codigo_familiares`);

-- AlterTable
ALTER TABLE `grupos` MODIFY `codigo` VARCHAR(254) NOT NULL,
    ADD PRIMARY KEY (`codigo`);

-- AlterTable
ALTER TABLE `mae_ultimo_pago` MODIFY `codigo` VARCHAR(254) NOT NULL,
    ADD PRIMARY KEY (`codigo`);

-- AlterTable
ALTER TABLE `parentesco_familiares` MODIFY `codigo` VARCHAR(254) NOT NULL,
    ADD PRIMARY KEY (`codigo`);

-- AlterTable
ALTER TABLE `socios` MODIFY `codigo` VARCHAR(254) NOT NULL,
    ADD PRIMARY KEY (`codigo`);

-- AlterTable
ALTER TABLE `suspensiones_familiares` MODIFY `codigo` VARCHAR(254) NOT NULL,
    ADD PRIMARY KEY (`codigo`);

-- AlterTable
ALTER TABLE `suspensiones_motivos` MODIFY `cod_mot` VARCHAR(254) NOT NULL,
    ADD PRIMARY KEY (`cod_mot`);

-- AlterTable
ALTER TABLE `suspensiones_socios` MODIFY `codigo` VARCHAR(254) NOT NULL,
    ADD PRIMARY KEY (`codigo`);

-- AlterTable
ALTER TABLE `tipo_socio` MODIFY `codigo` VARCHAR(254) NOT NULL,
    ADD PRIMARY KEY (`codigo`);

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    UNIQUE INDEX `user_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
