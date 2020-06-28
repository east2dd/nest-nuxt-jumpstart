import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDefaultValueToApartmentsState1593313550015 implements MigrationInterface {
    name = 'AddDefaultValueToApartmentsState1593313550015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartments" ADD CONSTRAINT "UQ_f6058e85d6d715dbe22b72fe722" UNIQUE ("id")`);
        await queryRunner.query(`ALTER TABLE "apartments" ALTER COLUMN "state" SET DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartments" ALTER COLUMN "state" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "apartments" DROP CONSTRAINT "UQ_f6058e85d6d715dbe22b72fe722"`);
    }

}
