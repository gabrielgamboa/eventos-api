import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEvents1642040484869 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "events",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "street",
                        type: "varchar",
                    },
                    {
                        name: "number",
                        type: "varchar",
                    },
                    {
                        name: "city",
                        type: "varchar",
                    },
                    {
                        name: "state",
                        type: "varchar",
                    },
                    {
                        name: "date",
                        type: "timestamp",
                    },
                    {
                        name: "ticket_price",
                        type: "numeric"
                    },
                    {
                        name: "tickets_available",
                        type: "integer",
                    },
                    {
                        name: "organizer_id",
                        type: "integer",
                        isNullable: true
                        
                    },
                    {
                        name: "event_type_id",
                        type: "integer",
                        isNullable: true
                    },

                ],
                foreignKeys: [
                    {
                        name: "FKOrganizerEvent",
                        referencedTableName: "organizers",
                        referencedColumnNames: ["id"],
                        columnNames: ["organizer_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKEventtypesEvent",
                        referencedTableName: "event_types",
                        referencedColumnNames: ["id"],
                        columnNames: ["event_type_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("events");
    }

}
