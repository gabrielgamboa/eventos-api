import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTickets1642040497395 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tickets",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: "purchase_date",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "price",
                        type: "numeric"
                    },
                    {
                        name: "user_id",
                        type: "integer",
                        isNullable: true
                    },
                    {
                        name: "event_id",
                        type: "integer",
                        isNullable: true
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserTicket",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKEventTicket",
                        referencedTableName: "events",
                        referencedColumnNames: ["id"],
                        columnNames: ["event_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tickets");
    }

}
