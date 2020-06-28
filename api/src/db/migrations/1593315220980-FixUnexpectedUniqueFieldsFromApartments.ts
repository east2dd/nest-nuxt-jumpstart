import {MigrationInterface, QueryRunner} from "typeorm";

export class FixUnexpectedUniqueFieldsFromApartments1593315220980 implements MigrationInterface {
    name = 'FixUnexpectedUniqueFieldsFromApartments1593315220980'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartments" DROP CONSTRAINT "UQ_fc93d67ffff5a838cb1e183dcc5"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartments" ADD CONSTRAINT "UQ_fc93d67ffff5a838cb1e183dcc5" UNIQUE ("user_id")`);
    }

}
