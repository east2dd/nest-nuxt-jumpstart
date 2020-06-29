import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRoleToUsers1593404616116 implements MigrationInterface {
    name = 'AddRoleToUsers1593404616116'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "role" integer NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
    }

}
