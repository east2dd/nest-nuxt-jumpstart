import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateApartments1593313273431 implements MigrationInterface {
    name = 'CreateApartments1593313273431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "apartments" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "user_id" integer NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "floor_area_size" integer NOT NULL, "price_per_month" integer NOT NULL, "number_of_rooms" integer NOT NULL, "state" integer NOT NULL, "longitude" double precision NOT NULL, "latitude" double precision NOT NULL, CONSTRAINT "UQ_f6058e85d6d715dbe22b72fe722" UNIQUE ("id"), CONSTRAINT "UQ_fc93d67ffff5a838cb1e183dcc5" UNIQUE ("user_id"), CONSTRAINT "UQ_44a2e6df123f9369a2041c5411a" UNIQUE ("name"), CONSTRAINT "PK_f6058e85d6d715dbe22b72fe722" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_a3ffb1c0c8416b9fc6f907b7433" UNIQUE ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_a3ffb1c0c8416b9fc6f907b7433"`);
        await queryRunner.query(`DROP TABLE "apartments"`);
    }

}
