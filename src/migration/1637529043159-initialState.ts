import {MigrationInterface, QueryRunner} from "typeorm";

export class initialState1637529043159 implements MigrationInterface {
    name = 'initialState1637529043159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`heroku_5201e2f44bc5d2f\`.\`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL DEFAULT '', \`email\` varchar(255) NOT NULL, \`password\` varchar(128) NOT NULL, \`roles\` text NOT NULL, \`status\` tinyint NOT NULL DEFAULT 1, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`heroku_5201e2f44bc5d2f\`.\`entries\` (\`id\` int NOT NULL AUTO_INCREMENT, \`content\` varchar(255) NOT NULL, \`category\` varchar(255) NOT NULL, \`intensity\` int NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`author\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`heroku_5201e2f44bc5d2f\`.\`entries\` ADD CONSTRAINT \`FK_000d7a063bd59384121d97a316f\` FOREIGN KEY (\`author\`) REFERENCES \`heroku_5201e2f44bc5d2f\`.\`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`heroku_5201e2f44bc5d2f\`.\`entries\` DROP FOREIGN KEY \`FK_000d7a063bd59384121d97a316f\``);
        await queryRunner.query(`DROP TABLE \`heroku_5201e2f44bc5d2f\`.\`entries\``);
        await queryRunner.query(`DROP TABLE \`heroku_5201e2f44bc5d2f\`.\`users\``);
    }

}
